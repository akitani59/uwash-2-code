# Uwash Thailand - SEO & GEO Optimization Project

## Project Overview
เว็บไซต์ uwashthai.com เป็นเว็บไซต์แฟรนไชส์ร้านสะดวกซัก Uwash สร้างบน Wix (Wix Velo)
โปรเจกต์นี้ทำ SEO + GEO Optimization ผ่าน Wix Velo Code (wix-seo API, wix-router, wix-http-functions)

## Tech Stack
- **Platform:** Wix (Wix Velo / Corvid)
- **API:** wix-seo, wix-router, wix-http-functions
- **GitHub Repo (source code):** akitani59/uwash-2 (repo นี้เก็บ source code ต้นฉบับ)
- **GitHub Repo (Wix connected):** akitani59/uwash-web (repo ที่เชื่อมกับ Wix โดยตรง)
- **Live Site:** https://www.uwashthai.com

## Architecture
```
src/
├── backend/
│   ├── routers.js              # Blog Router + Sitemap (wix-router)
│   ├── seo-content-data.js     # SEO articles part 1 (3 articles)
│   ├── seo-content-data-part2.js # SEO articles part 2 (3 articles)
│   ├── http-functions.js       # HTTP Function serve llms.txt at /_functions/llms
│   └── permissions.json        # Backend permissions
├── pages/
│   ├── masterPage.js           # Global Schema (Organization + LocalBusiness)
│   ├── Home.c1dmp.js           # Homepage SEO
│   ├── blog.js                 # Blog page (dynamic Article schema from router)
│   └── [other pages].js        # Each page has SEO optimization
└── public/
    └── llms.txt               # AI crawler content (backup)
```

## What Has Been Done (Completed)

### 1. Schema Markup (JSON-LD) - All Pages
- masterPage.js: Organization + LocalBusiness schema (applied globally)
- Home.c1dmp.js: WebSite, Product, BreadcrumbList, FAQPage
- Each page: Has its own structured data

### 2. Meta Tags & Open Graph - All Pages
- Title tags, Meta descriptions, OG tags, Twitter Cards, Canonical URLs

### 3. Blog Content Hub (6 SEO Articles)
- Router + Sitemap in routers.js
- 6 Thai-language articles targeting high-impression keywords

### 4. GEO (Generative Engine Optimization)
- llms.txt + http-functions.js for AI crawlers

### 5. Homepage SEO Verified
- Confirmed working via View Page Source

## What Still Needs To Be Done
1. Push http-functions.js to uwash-web repo
2. Submit sitemap to Google Search Console
3. Test Schema via Google Rich Results Test

## Brand Information
- Brand: Uwash
- Website: https://www.uwashthai.com
- Investment: Starting under 1,000,000 THB
- System: Smart Kiosk + mobile app
- Machines: LG Commercial 13-18KG, IMAGE washer-dryer
- Tagline: ร้านสะดวกซัก smart kiosk จบครบ ร้าน ไม่ถึง ล้าน
