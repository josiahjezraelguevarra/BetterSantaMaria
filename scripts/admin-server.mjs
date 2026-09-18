import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'data');
const BACKUPS_DIR = path.join(DATA_DIR, 'backups');
const ADMIN_DIR = path.join(ROOT_DIR, 'admin');
const ASSETS_DIR = path.join(ROOT_DIR, 'assets');

const PORT = parseInt(process.env.ADMIN_PORT || '8888', 10);
const HOST = '127.0.0.1'; // Localhost only for security

if (!fs.existsSync(BACKUPS_DIR)) {
  fs.mkdirSync(BACKUPS_DIR, { recursive: true });
}

const COLLECTIONS = {
  news: {
    file: 'news.json',
    label: 'News & Announcements',
    rootKey: 'news',
    description: 'Public updates, advisories, announcements, and press releases'
  },
  services: {
    file: 'services.json',
    label: 'Municipal Services',
    rootKey: 'services',
    description: "Citizen's Charter services, requirements, fees, and processing times"
  },
  officials: {
    file: 'officials.json',
    label: 'Government Officials',
    rootKey: null,
    description: 'Elected officials, SB members, and municipal leadership'
  },
  demographics: {
    file: 'demographics.json',
    label: 'Demographics & Profile',
    rootKey: null,
    description: 'Population, land area, 24 barangays list, and municipal profile'
  },
  ordinances: {
    file: 'ordinances.json',
    label: 'Municipal Ordinances',
    rootKey: 'ordinances',
    description: 'Sangguniang Bayan enacted ordinances and local laws'
  },
  resolutions: {
    file: 'resolutions.json',
    label: 'Municipal Resolutions',
    rootKey: 'resolutions',
    description: 'Sangguniang Bayan approved resolutions and formal declarations'
  },
  'competitive-index': {
    file: 'competitive-index.json',
    label: 'Competitive Index (CMCI)',
    rootKey: null,
    description: 'Cities and Municipalities Competitiveness Index rankings'
  }
};

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(JSON.stringify(data, null, 2));
}

function sendError(res, statusCode, message) {
  sendJson(res, statusCode, { ok: false, error: message });
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      if (body.length > 50 * 1024 * 1024) {
        reject(new Error('Payload too large (>50MB)'));
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(new Error('Invalid JSON payload: ' + err.message));
      }
    });
    req.on('error', reject);
  });
}

function serveStatic(res, filePath) {
  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
    return;
  }
  const stat = fs.statSync(filePath);
  if (stat.isDirectory()) {
    return serveStatic(res, path.join(filePath, 'index.html'));
  }
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  res.writeHead(200, {
    'Content-Type': contentType,
    'Content-Length': stat.size,
    'Cache-Control': 'no-cache'
  });
  fs.createReadStream(filePath).pipe(res);
}

const server = http.createServer(async (req, res) => {
  const hostHeader = req.headers.host || `${HOST}:${PORT}`;
  const reqUrl = new URL(req.url, `http://${hostHeader}`);
  const pathname = reqUrl.pathname;
  const method = req.method;

  // CORS preflight if called from other local port
  if (method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  // --- API Endpoints ---
  if (pathname === '/api/collections' && method === 'GET') {
    const list = Object.entries(COLLECTIONS).map(([key, meta]) => {
      const filePath = path.join(DATA_DIR, meta.file);
      let count = 0;
      let size = 0;
      let mtime = null;
      if (fs.existsSync(filePath)) {
        const stat = fs.statSync(filePath);
        size = stat.size;
        mtime = stat.mtime.toISOString();
        try {
          const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          if (meta.rootKey && Array.isArray(raw[meta.rootKey])) {
            count = raw[meta.rootKey].length;
          } else if (Array.isArray(raw)) {
            count = raw.length;
          } else if (typeof raw === 'object' && raw !== null) {
            count = Object.keys(raw).length;
          }
        } catch {
          // ignore parse errors
        }
      }
      return {
        id: key,
        file: meta.file,
        label: meta.label,
        description: meta.description,
        rootKey: meta.rootKey,
        count,
        sizeBytes: size,
        lastModified: mtime
      };
    });
    sendJson(res, 200, { ok: true, collections: list });
    return;
  }

  if (pathname.startsWith('/api/data/') && method === 'GET') {
    const collName = pathname.slice('/api/data/'.length);
    const meta = COLLECTIONS[collName];
    if (!meta) return sendError(res, 404, `Collection '${collName}' not recognized`);
    const filePath = path.join(DATA_DIR, meta.file);
    if (!fs.existsSync(filePath)) return sendError(res, 404, `Data file '${meta.file}' not found`);
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      sendJson(res, 200, { ok: true, id: collName, meta, data });
    } catch (err) {
      sendError(res, 500, `Failed to parse ${meta.file}: ${err.message}`);
    }
    return;
  }

  if (pathname.startsWith('/api/data/') && method === 'POST') {
    const collName = pathname.slice('/api/data/'.length);
    const meta = COLLECTIONS[collName];
    if (!meta) return sendError(res, 404, `Collection '${collName}' not recognized`);
    const filePath = path.join(DATA_DIR, meta.file);

    try {
      const payload = await parseBody(req);
      if (!payload || typeof payload !== 'object') {
        return sendError(res, 400, 'Invalid JSON body: expected object or array');
      }

      // 1. Safety Backup
      if (fs.existsSync(filePath)) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const backupFileName = `${collName}_${timestamp}.json`;
        const backupPath = path.join(BACKUPS_DIR, backupFileName);
        fs.copyFileSync(filePath, backupPath);

        // Keep at most 20 recent backups per collection
        const allBackups = fs.readdirSync(BACKUPS_DIR)
          .filter(f => f.startsWith(`${collName}_`) && f.endsWith('.json'))
          .sort();
        if (allBackups.length > 20) {
          for (let i = 0; i < allBackups.length - 20; i++) {
            try { fs.unlinkSync(path.join(BACKUPS_DIR, allBackups[i])); } catch {}
          }
        }
      }

      // 2. Format and write cleanly to disk
      const jsonText = JSON.stringify(payload, null, 2) + '\n';
      fs.writeFileSync(filePath, jsonText, 'utf8');

      console.log(`[Admin CMS] Saved ${meta.file} (${(jsonText.length / 1024).toFixed(1)} KB)`);
      sendJson(res, 200, {
        ok: true,
        message: `Successfully saved ${meta.label} (${meta.file})`,
        file: meta.file
      });
    } catch (err) {
      console.error(`[Admin CMS Error] ${err.message}`);
      sendError(res, 500, `Error saving data: ${err.message}`);
    }
    return;
  }

  if (pathname.startsWith('/api/backups/') && method === 'GET') {
    const collName = pathname.slice('/api/backups/'.length);
    const backups = fs.readdirSync(BACKUPS_DIR)
      .filter(f => f.startsWith(`${collName}_`) && f.endsWith('.json'))
      .map(f => {
        const s = fs.statSync(path.join(BACKUPS_DIR, f));
        return { filename: f, sizeBytes: s.size, date: s.mtime.toISOString() };
      })
      .sort((a, b) => b.filename.localeCompare(a.filename));
    sendJson(res, 200, { ok: true, collection: collName, backups });
    return;
  }

  if (pathname.startsWith('/api/restore/') && method === 'POST') {
    const collName = pathname.slice('/api/restore/'.length);
    const meta = COLLECTIONS[collName];
    if (!meta) return sendError(res, 404, `Collection '${collName}' not found`);
    try {
      const { backupFileName } = await parseBody(req);
      if (!backupFileName || !backupFileName.startsWith(`${collName}_`)) {
        return sendError(res, 400, 'Invalid backup filename');
      }
      const backupPath = path.join(BACKUPS_DIR, backupFileName);
      if (!fs.existsSync(backupPath)) {
        return sendError(res, 404, 'Backup file not found');
      }
      const targetPath = path.join(DATA_DIR, meta.file);
      fs.copyFileSync(backupPath, targetPath);
      sendJson(res, 200, { ok: true, message: `Restored ${collName} from ${backupFileName}` });
    } catch (err) {
      sendError(res, 500, err.message);
    }
    return;
  }

  // --- Static Files (Admin UI & Assets) ---
  if (pathname.startsWith('/assets/')) {
    const rel = pathname.slice('/assets/'.length);
    const safePath = path.join(ASSETS_DIR, rel);
    if (safePath.startsWith(ASSETS_DIR)) {
      return serveStatic(res, safePath);
    }
  }

  // Admin Studio UI files
  let relAdmin = pathname;
  if (relAdmin === '/' || relAdmin === '/admin' || relAdmin === '/admin/') {
    relAdmin = '/index.html';
  } else if (relAdmin.startsWith('/admin/')) {
    relAdmin = relAdmin.slice('/admin'.length);
  }
  const safeAdminPath = path.join(ADMIN_DIR, relAdmin);
  if (safeAdminPath.startsWith(ADMIN_DIR) && fs.existsSync(safeAdminPath)) {
    return serveStatic(res, safeAdminPath);
  }

  // Fallback to index.html for SPA admin navigation
  const defaultIndex = path.join(ADMIN_DIR, 'index.html');
  if (fs.existsSync(defaultIndex)) {
    return serveStatic(res, defaultIndex);
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Admin file not found');
});

server.listen(PORT, HOST, () => {
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║       BetterSantaMaria — Santa Maria Admin Studio          ║');
  console.log('║               Flat-File Civic Data CMS                     ║');
  console.log('╠════════════════════════════════════════════════════════════╣');
  console.log(`║  Local Admin Studio : http://${HOST}:${PORT}/              ║`);
  console.log(`║  Security Mode      : Localhost-only (Zero external access) ║`);
  console.log(`║  Storage Target     : ${DATA_DIR}       ║`);
  console.log('╚════════════════════════════════════════════════════════════╝');
  console.log('\nReady! Press Ctrl+C to stop.\n');
});
