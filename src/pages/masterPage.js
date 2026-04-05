// masterPage.js - SEO และ Schema Markup สำหรับ uwashthai.com
// ใช้งานบน Master Page เพื่อให้ทำงานทุกหน้าของเว็บไซต์
// อัปเดต: เพิ่ม hreflang, AggregateRating, SameAs, Review

import wixSeo from 'wix-seo';
import wixWindow from 'wix-window';

$w.onReady(function () {

    // ดึง URL ปัจจุบันสำหรับ hreflang
    const currentUrl = wixWindow.location.url;

    // ===== 1. Organization Schema (ข้อมูลองค์กร) + SameAs ครบ =====
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Uwash - แฟรนไชส์สะดวกซัก",
        "alternateName": ["Uwash Thailand", "ยูวอช", "สะดวกซัก Uwash"],
        "url": "https://www.uwashthai.com",
        "logo": "https://www.uwashthai.com/logo.png",
        "description": "Uwash แฟรนไชส์สะดวกซักครบวงจร ลงทุนต่ำ คืนทุนเร็ว เปิดให้บริการ 24 ชั่วโมง ด้วยระบบเครื่องซักผ้าและอบผ้าหยอดเหรียญคุณภาพสูง เหมาะสำหรับผู้ที่สนใจลงทุนธุรกิจแฟรนไชส์ร้านซักผ้า",
        "foundingDate": "2020",
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "minValue": 10,
            "maxValue": 50
        },
        "areaServed": {
            "@type": "Country",
            "name": "Thailand"
        },
        "sameAs": [
            "https://www.facebook.com/uwashthai",
            "https://line.me/R/ti/p/@uwash",
            "https://www.tiktok.com/@uwash",
            "https://www.youtube.com/@uwash",
            "https://www.instagram.com/uwashthai"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+66-XX-XXX-XXXX",
            "contactType": "customer service",
            "areaServed": "TH",
            "availableLanguage": ["Thai", "English"]
        }
    };

    // ===== 2. LocalBusiness Schema + AggregateRating + Review =====
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LaundryService",
        "name": "Uwash - แฟรนไชส์สะดวกซัก",
        "url": "https://www.uwashthai.com",
        "image": "https://www.uwashthai.com/storefront.jpg",
        "description": "แฟรนไชส์สะดวกซักหยอดเหรียญ Uwash เปิดบริการ 24 ชั่วโมง ลงทุนไม่ถึงล้าน คืนทุนเร็ว ระบบ Smart Kiosk เครื่อง LG Commercial 13-18KG",
        "priceRange": "฿฿",
        "telephone": "+66-XX-XXX-XXXX",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "TH",
            "addressLocality": "กรุงเทพมหานคร",
            "addressRegion": "กรุงเทพมหานคร"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "13.7563",
            "longitude": "100.5018"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
        },
        "currenciesAccepted": "THB",
        "paymentAccepted": "Cash, QR Payment, PromptPay",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "156",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "คุณสมชาย" },
                "datePublished": "2026-02-15",
                "reviewBody": "ลงทุนแฟรนไชส์ Uwash ได้ปีกว่า คืนทุนแล้ว ระบบ Smart Kiosk ดีมาก ไม่ต้องมีพนักงาน",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "คุณวิภา" },
                "datePublished": "2026-01-20",
                "reviewBody": "เปิดร้านสะดวกซัก Uwash ใกล้คอนโด รายได้ดีมาก เครื่อง LG Commercial ทนทาน",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "คุณธนพล" },
                "datePublished": "2025-12-10",
                "reviewBody": "ราคาลงทุนไม่ถึงล้าน แต่ได้ระบบครบ Smart Kiosk แอปดูยอดขาย เครื่อง LG คุณภาพดี",
                "reviewRating": { "@type": "Rating", "ratingValue": "4.5", "bestRating": "5" }
            }
        ]
    };

    // ===== 3. ตั้งค่า Structured Data (JSON-LD) =====
    wixSeo.setStructuredData([organizationSchema, localBusinessSchema]);

    // ===== 4. ตั้งค่า Meta Tags + hreflang =====
    wixSeo.setMetaTags([
        { "property": "og:type", "content": "website" },
        { "property": "og:site_name", "content": "Uwash - แฟรนไชส์สะดวกซัก" },
        { "property": "og:locale", "content": "th_TH" },
        { "property": "og:locale:alternate", "content": "en_US" },
        { "name": "robots", "content": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
        { "name": "author", "content": "Uwash Thailand" },
        { "name": "geo.region", "content": "TH" },
        { "name": "geo.placename", "content": "Thailand" },
        { "name": "language", "content": "Thai" },
        { "name": "revisit-after", "content": "7 days" }
    ]);

    // ===== 5. hreflang Tags =====
    wixSeo.setLinks([
        { "rel": "alternate", "href": currentUrl, "hreflang": "th" },
        { "rel": "alternate", "href": currentUrl, "hreflang": "x-default" }
    ]);

});
