// SEO Optimization - หน้าจุดเด่นสะดวกซัก Uwash
import wixSeo from 'wix-seo';

$w.onReady(function () {
    // ตั้งค่า Title สำหรับ SEO
    wixSeo.setTitle("จุดเด่นสะดวกซัก Uwash | ระบบ Smart Kiosk ทันสมัย มี App ควบคุม");

    // ตั้งค่า Meta Tags รวม Open Graph
    wixSeo.setMetaTags([
        { "name": "description", "content": "จุดเด่น Uwash - ระบบควบคุมร้านอัจฉริยะ Smart Kiosk หน้าจอสัมผัส แอปพลิเคชัน ราคาลงทุนไม่ถึงล้าน เครื่อง LG Commercial 13-18KG" },
        { "name": "keywords", "content": "จุดเด่น Uwash, Smart Kiosk, สะดวกซัก, แฟรนไชส์สะดวกซัก, LG Commercial, ระบบควบคุมร้านซัก" },
        { "property": "og:title", "content": "จุดเด่นสะดวกซัก Uwash | ระบบ Smart Kiosk ทันสมัย มี App ควบคุม" },
        { "property": "og:description", "content": "จุดเด่น Uwash - ระบบควบคุมร้านอัจฉริยะ Smart Kiosk หน้าจอสัมผัส แอปพลิเคชัน ราคาลงทุนไม่ถึงล้าน เครื่อง LG Commercial 13-18KG" },
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
                    "name": "จุดเด่นสะดวกซัก Uwash",
                    "item": "https://www.uwash.co.th/จุดเด่นสะดวกซัก-uwash"
                }
            ]
        },
        // ItemList - รายการจุดเด่น
        {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "จุดเด่นสะดวกซัก Uwash",
            "description": "จุดเด่นและคุณสมบัติของแฟรนไชส์สะดวกซัก Uwash",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "ระบบ Smart Kiosk หน้าจอสัมผัส",
                    "description": "ระบบควบคุมร้านอัจฉริยะ Smart Kiosk หน้าจอสัมผัสที่ทันสมัย"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "แอปพลิเคชันควบคุม",
                    "description": "แอปพลิเคชันสำหรับผู้ลงทุนและลูกค้า ควบคุมการใช้งานได้ง่าย"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "ราคาลงทุนไม่ถึงล้าน",
                    "description": "แพ็คเกจลงทุนเริ่มต้นราคาไม่ถึงล้านบาท"
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "เครื่องซัก LG Commercial 13-18KG",
                    "description": "เครื่องซักผ้าอุตสาหกรรม LG Commercial ขนาด 13-18 กิโลกรัม"
                }
            ]
        }
    ]);
});
