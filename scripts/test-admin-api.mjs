import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

async function runTests() {
  console.log('Testing Admin CMS Endpoints against http://127.0.0.1:8888 ...');

  // Helper fetch
  async function apiGet(endpoint) {
    const res = await fetch(`http://127.0.0.1:8888${endpoint}`);
    if (!res.ok) throw new Error(`GET ${endpoint} returned ${res.status}`);
    return await res.json();
  }

  async function apiPost(endpoint, body) {
    const res = await fetch(`http://127.0.0.1:8888${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error(`POST ${endpoint} returned ${res.status}`);
    return await res.json();
  }

  try {
    // 1. Collections endpoint
    console.log('1. Testing GET /api/collections...');
    const colls = await apiGet('/api/collections');
    console.log(`   Success: Found ${colls.collections.length} managed collections.`);
    const newsColl = colls.collections.find(c => c.id === 'news');
    console.log(`   News entries count: ${newsColl.count}`);

    // 2. Fetch specific dataset
    console.log('2. Testing GET /api/data/news...');
    const newsData = await apiGet('/api/data/news');
    console.log(`   Success: Retrieved ${newsData.data.news.length} news items.`);

    // 3. Test saving (triggering automatic backup)
    console.log('3. Testing POST /api/data/news (auto backup + save)...');
    const originalNews = JSON.parse(JSON.stringify(newsData.data));
    const testPost = {
      id: 'test-cms-verification',
      title: 'Admin Studio Verification Test',
      date: new Date().toISOString().slice(0, 10),
      category: 'Notice',
      badge: 'info',
      summary: 'Automated validation of the Santa Maria Admin Studio local Flat-File CMS.',
      url: null
    };
    
    // Add test item and post
    const updatedNews = {
      news: [testPost, ...originalNews.news]
    };
    const postRes = await apiPost('/api/data/news', updatedNews);
    console.log(`   Success: ${postRes.message}`);

    // 4. Verify backup was created
    const backupsDir = path.join(ROOT_DIR, 'data', 'backups');
    const backups = fs.readdirSync(backupsDir).filter(f => f.startsWith('news_'));
    console.log(`   Success: Found ${backups.length} backup snapshots in data/backups/`);

    // 5. Restore original data so repository remains clean
    console.log('4. Restoring original news.json...');
    await apiPost('/api/data/news', originalNews);
    console.log('   Success: Original news dataset cleanly restored.');

    // 6. Test Static Admin UI serving
    console.log('5. Testing GET / (Admin UI index.html)...');
    const htmlRes = await fetch('http://127.0.0.1:8888/');
    const htmlText = await htmlRes.text();
    if (htmlText.includes('Santa Maria Admin Studio')) {
      console.log('   Success: Admin Studio index.html served correctly.');
    } else {
      throw new Error('Admin Studio index.html missing expected title');
    }

    console.log('\nAll Admin Flat-File CMS verification tests passed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Verification failed:', err.message);
    process.exit(1);
  }
}

runTests();
