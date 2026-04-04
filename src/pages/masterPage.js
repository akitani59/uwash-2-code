// masterPage.js - SEO และ Schema Markup สำหรับ uwashthai.com
// ใช้งานบน Master Page เพื่อให้ทำงานทุกหน้าของเว็บไซต์

import wixSeo from 'wix-seo';

$w.onReady(function () {

    // ===== 1. Organization Schema (ข้อมูลองค์กร) =====
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Uwash - แฟรนไชส์สะดวกซัก",
        "url": "https://www.uwashthai.com",
        "logo": "https://www.uwashthai.com/logo.png",
        "description": "Uwash แฟรนไชส์สะดวกซักครบวงจร ลงทุนต่ำ คืนทุนเร็ว เปิดให้บริการ 24 ชั่วโมง ด้วยระบบเครื่องซักผ้าและอบผ้าหยอดเหรียญคุณภาพสูง เหมาะสำหรับผู้ที่สนใจลงทุนธุรกิจแฟรนไชส์ร้านซักผ้า",
        "sameAs": [
            "https://www.facebook.com/uwashthai",
            "https://line.me/R/ti/p/@uwash"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+66-XX-XXX-XXXX",
            "contactType": "customer service",
            "areaServed": "TH",
            "availableLanguage": ["Thai", "English"]
        }
    };

    // ===== 2. LocalBusiness Schema (ข้อมูลธุรกิจท้องถิ่น) =====
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Uwash - แฟรนไชส์สะดวกซัก",
        "url": "https://www.uwashthai.com",
        "image": "https://www.uwashthai.com/storefront.jpg",
        "description": "แฟรนไชส์สะดวกซักหยอดเหรียญ Uwash เปิดบริการ 24 ชั่วโมง ลงทุนไม่ถึงล้าน คืนทุนเร็ว",
        "priceRange": "฿฿",
        "telephone": "+66-XX-XXX-XXXX",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "TH",
            "addressLocality": "กรุงเทพมหานคร",
            "addressRegion": "กรุงเทพมหานคร"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday",
                "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "currenciesAccepted": "THB"
    };

    // ===== 3. ตั้งค่า Structured Data (JSON-LD) ผ่าน wix-seo =====
    // setStructuredData() รับ Array ของ Schema Objects
    wixSeo.setStructuredData([
        organizationSchema,
        localBusinessSchema
    ]);

    // ===== 4. ตั้งค่า Meta Tags เพิ่มเติมสำหรับ SEO =====
    wixSeo.setMetaTags([
        // Open Graph Tags สำหรับการแชร์บนโซเชียลมีเดีย
        {
            "property": "og:type",
            "content": "website"
        },
        {
            "property": "og:site_name",
            "content": "Uwash - แฟรนไชส์สะดวกซัก"
        },
        {
            "property": "og:locale",
            "content": "th_TH"
        },
        // Meta Tags สำหรับ SEO ทั่วไป
        {
            "name": "robots",
            "content": "index, follow"
        },
        {
            "name": "author",
            "content": "Uwash Thailand"
        },
        {
            "name": "geo.region",
            "content": "TH"
        },
        {
            "name": "geo.placename",
            "content": "Thailand"
        }
    ]);

});
