// SEO Optimization - หน้าเกี่ยวกับเรา (About Us)
import wixSeo from 'wix-seo';

$w.onReady(function () {
    // ตั้งค่า Title สำหรับ SEO
    wixSeo.setTitle("เกี่ยวกับ Uwash | แบรนด์แฟรนไชส์สะดวกซักอันดับ 1");

    // ตั้งค่า Meta Tags รวม Open Graph
    wixSeo.setMetaTags([
        { "name": "description", "content": "Uwash แบรนด์แฟรนไชส์ร้านสะดวกซัก เด่นเรื่องระบบควบคุม Smart Kiosk ทันสมัย มีแอป ลงทุนไม่ถึงล้าน" },
        { "name": "keywords", "content": "เกี่ยวกับ Uwash, แฟรนไชส์สะดวกซัก, แบรนด์สะดวกซัก, Uwash, ร้านสะดวกซัก" },
        { "property": "og:title", "content": "เกี่ยวกับ Uwash | แบรนด์แฟรนไชส์สะดวกซักอันดับ 1" },
        { "property": "og:description", "content": "Uwash แบรนด์แฟรนไชส์ร้านสะดวกซัก เด่นเรื่องระบบควบคุม Smart Kiosk ทันสมัย มีแอป ลงทุนไม่ถึงล้าน" },
        { "property": "og:type", "content": "website" },
        { "property": "og:locale", "content": "th_TH" }
    ]);

    // ตั้งค่า Structured Data (JSON-LD)
    wixSeo.setStructuredData([
        // BreadcrumbList - เส้นทางนำทาง
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "หน้าแรก",
                    "item": "https://www.uwash.co.th"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "เกี่ยวกับเรา",
                    "item": "https://www.uwash.co.th/about-us"
                }
            ]
        },
        // AboutPage - ข้อมูลหน้าเกี่ยวกับเรา
        {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "เกี่ยวกับ Uwash",
            "description": "Uwash แบรนด์แฟรนไชส์ร้านสะดวกซัก เด่นเรื่องระบบควบคุม Smart Kiosk ทันสมัย มีแอป ลงทุนไม่ถึงล้าน",
            "mainEntity": {
                "@type": "Organization",
                "name": "Uwash",
                "description": "แบรนด์แฟรนไชส์สะดวกซักอันดับ 1 ของประเทศไทย",
                "url": "https://www.uwash.co.th",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "availableLanguage": ["Thai", "English"]
                }
            }
        }
    ]);
});
