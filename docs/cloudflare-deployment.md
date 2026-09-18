# Deploying BetterSantaMaria to Cloudflare Pages & Cloudflare R2

This guide details the modern, zero-cost cloud architecture using **Cloudflare Pages** for global edge hosting and **Cloudflare R2** for municipal document storage.

---

## Part 1: Deploying the Next.js Frontend on Cloudflare Pages

Cloudflare Pages automatically builds and deploys the Next.js static export on Cloudflare's global edge network.

### Step 1: Connect your GitHub Repository
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, navigate to **Compute (Workers) > Workers & Pages** (or **Pages**).
3. Click **Create application** > Select the **Pages** tab > Click **Connect to Git**.
4. Authorize GitHub and select your repository: `josiahjezraelguevarra/BetterSantaMaria`.

### Step 2: Configure Build Settings
Fill in the build configuration:

| Setting | Value | Description |
| :--- | :--- | :--- |
| **Project name** | `bettersantamaria` | Your chosen Pages subdomain (e.g. `bettersantamaria.pages.dev`) |
| **Production branch** | `main` | Primary deployment branch |
| **Framework preset** | `None` (or `Next.js (Static Export)`) | Next.js SSG output |
| **Build command** | `cd react-app && npm install && npm run build` | Builds the React app into `out/` |
| **Build output directory** | `react-app/out` | Contains exported HTML/JS/CSS |
| **Root directory** | `/` (leave blank) | Base repository root |

### Step 3: Environment Variables
Under **Environment Variables (optional)**, you can add:
- `NODE_VERSION` = `20`
- `NEXT_PUBLIC_R2_STORAGE_URL` = `https://<your-r2-domain-or-pub-url>` (see Part 2)

Click **Save and Deploy**. Cloudflare Pages will build the site and provide a live URL (`https://bettersantamaria.pages.dev`).

---

## Part 2: Setting up Cloudflare R2 for Municipal Documents

Cloudflare R2 provides S3-compatible object storage with **zero egress bandwidth fees**. This is ideal for hosting municipal PDF ordinances, resolutions, executive orders, and high-resolution civic seal images.

### Step 1: Create an R2 Bucket
1. In the Cloudflare Dashboard, select **R2** from the left menu.
2. Click **Create bucket**.
3. Name your bucket (e.g., `bettersantamaria-storage` or `bettersantamaria-docs`).
4. Select location: **Automatic** (or **APAC**).
5. Click **Create Bucket**.

### Step 2: Enable Public Access / Custom Domain
To allow citizens to view and download ordinances directly in their browser:
1. In your new bucket settings, go to the **Settings** tab.
2. Scroll to **Public access**.
3. You can either:
   - **Connect a Domain**: Add a custom subdomain like `docs.bettersantamaria.org` (recommended if you own the domain).
   - **R2.dev Subdomain**: Enable the managed `r2.dev` public URL for testing.

### Step 3: Organizing Files in R2
Organize documents with clean folder prefixes:
```
bettersantamaria-storage/
├── ordinances/
│   ├── 2025/
│   │   └── SB-ORD-2025-01-tax-relief.pdf
│   └── 2026/
├── resolutions/
├── budgets/
│   └── AIP-2026-santa-maria.pdf
└── media/
    ├── seal-santa-maria-highres.png
    └── banners/
```

In your Next.js components or `data/ordinances.json`, reference documents via:
```json
{
  "title": "Municipal Ordinance No. 2026-001",
  "pdf_url": "https://docs.bettersantamaria.org/ordinances/2026/SB-ORD-2026-001.pdf"
}
```

---

## Part 3: Adding a Custom Apex Domain (e.g. `bettersantamaria.org`)

1. In Cloudflare Pages, go to **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter your domain: `bettersantamaria.org` and `www.bettersantamaria.org`.
4. Cloudflare will automatically provision SSL certificates (HTTPS) and configure DNS routing.
