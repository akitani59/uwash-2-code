// SEO Optimization - หน้าสาขาแฟรนไชส์ Uwash
import wixSeo from 'wix-seo';

$w.onReady(function () {
    // ตั้งค่า Title สำหรับ SEO
    wixSeo.setTitle("สาขาแฟรนไชส์ Uwash ทั่วประเทศ | ร้านสะดวกซัก ใกล้คุณ");

    // ตั้งค่า Meta Tags รวม Open Graph
    wixSeo.setMetaTags([
        { "name": "description", "content": "รวมสาขาแฟรนไชส์ Uwash สะดวกซัก ทั่วประเทศไทย" },
        { "name": "keywords", "content": "สาขา Uwash, แฟรนไชส์สะดวกซัก, ร้านสะดวกซักใกล้ฉัน, สาขาสะดวกซัก, Uwash สาขา" },
        { "property": "og:title", "content": "สาขาแฟรนไชส์ Uwash ทั่วประเทศ | ร้านสะดวกซัก ใกล้คุณ" },
        { "property": "og:description", "content": "รวมสาขาแฟรนไชส์ Uwash สะดวกซัก ทั่วประเทศไทย" },
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
                    "name": "สาขาแฟรนไชส์",
                    "item": "https://www.uwash.co.th/branches"
                }
            ]
        },
        // ItemList - รายการสาขา
        {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "สาขาแฟรนไชส์ Uwash ทั่วประเทศ",
            "description": "รวมสาขาแฟรนไชส์ร้านสะดวกซัก Uwash ทั่วประเทศไทย",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "สาขากรุงเทพและปริมณฑล",
                    "description": "สาขา Uwash ในเขตกรุงเทพมหานครและปริมณฑล"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "สาขาภาคกลาง",
                    "description": "สาขา Uwash ในพื้นที่ภาคกลาง"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "สาขาภาคเหนือ",
                    "description": "สาขา Uwash ในพื้นที่ภาคเหนือ"
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "สาขาภาคตะวันออกเฉียงเหนือ",
                    "description": "สาขา Uwash ในพื้นที่ภาคอีสาน"
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "สาขาภาคใต้",
                    "description": "สาขา Uwash ในพื้นที่ภาคใต้"
                }
            ]
        }
    ]);
});
