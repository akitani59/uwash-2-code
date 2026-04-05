# CLAUDE.md สำหรับ uwash-web repo

## Project
- **Website:** https://www.uwashthai.com (Wix Velo)
- **Business:** Uwash - แฟรนไชส์ร้านสะดวกซัก
- **GitHub Repo:** akitani59/uwash-web (เชื่อมกับ Wix โดยตรง)
- **Source Repo:** akitani59/uwash-2 (repo ต้นฉบับ SEO code)

## How It Works
- Repo นี้เชื่อมตรงกับ Wix Editor ผ่าน Velo Dev Mode
- เมื่อ push code ไปที่ repo นี้ Wix จะ sync อัตโนมัติ
- หลัง sync แล้วต้องกด Publish ใน Wix Editor เพื่อ deploy

## Tech Stack
- Wix Velo APIs: wix-seo, wix-router, wix-http-functions
- Language: JavaScript (ES6 modules)
- Content Language: Thai

## Important Rules
- DO NOT rename page files - Wix uses specific hash IDs
- DO NOT change import paths
- All SEO uses wix-seo API
- HTTP functions must follow naming: get_functionName

## Brand Info
- Brand: Uwash (สะดวกซัก uwash)
- Investment: under 1M THB
- System: Smart Kiosk + mobile app
- Machines: LG Commercial 13-18KG, IMAGE washer-dryer
- Tagline: ร้านสะดวกซัก smart kiosk จบครบ ร้าน ไม่ถึง ล้าน

## Pending Tasks
1. Push src/backend/http-functions.js to this repo
2. Verify /_functions/llms endpoint after publish
3. Submit sitemap to Google Search Console
