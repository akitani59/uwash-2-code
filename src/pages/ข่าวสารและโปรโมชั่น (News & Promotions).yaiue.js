// SEO Optimization - หน้าข่าวสารและโปรโมชั่น
import wixSeo from 'wix-seo';

$w.onReady(function () {
    // ตั้งค่า Title สำหรับ SEO
    wixSeo.setTitle("ข่าวสารและโปรโมชั่น Uwash | อัปเดตแฟรนไชส์สะดวกซัก");

    // ตั้งค่า Meta Tags รวม Open Graph
    wixSeo.setMetaTags([
        { "name": "description", "content": "ข่าวสาร โปรโมชั่น อัปเดตล่าสุด จาก Uwash แฟรนไชส์สะดวกซัก" },
        { "name": "keywords", "content": "ข่าวสาร Uwash, โปรโมชั่น Uwash, อัปเดตแฟรนไชส์, สะดวกซัก, โปรโมชั่นสะดวกซัก" },
        { "property": "og:title", "content": "ข่าวสารและโปรโมชั่น Uwash | อัปเดตแฟรนไชส์สะดวกซัก" },
        { "property": "og:description", "content": "ข่าวสาร โปรโมชั่น อัปเดตล่าสุด จาก Uwash แฟรนไชส์สะดวกซัก" },
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
                    "name": "ข่าวสารและโปรโมชั่น",
                    "item": "https://www.uwash.co.th/news-promotions"
                }
            ]
        },
        // CollectionPage - หน้ารวมข่าวสารและโปรโมชั่น
        {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "ข่าวสารและโปรโมชั่น Uwash",
            "description": "ข่าวสาร โปรโมชั่น อัปเดตล่าสุด จาก Uwash แฟรนไชส์สะดวกซัก",
            "url": "https://www.uwash.co.th/news-promotions",
            "isPartOf": {
                "@type": "WebSite",
                "name": "Uwash",
                "url": "https://www.uwash.co.th"
            },
            "about": {
                "@type": "Organization",
                "name": "Uwash",
                "url": "https://www.uwash.co.th"
            }
        }
    ]);
});
