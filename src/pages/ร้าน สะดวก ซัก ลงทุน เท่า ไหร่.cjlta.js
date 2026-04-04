// SEO Optimization สำหรับหน้าร้านสะดวกซัก ลงทุนเท่าไหร่
import wixSeo from 'wix-seo';

$w.onReady(function () {
    // ตั้งค่า Title Tag
    wixSeo.setTitle('ร้านสะดวกซัก ลงทุนเท่าไหร่? | Uwash เริ่มต้นไม่ถึงล้านบาท');

    // ตั้งค่า Meta Tags รวม Open Graph
    wixSeo.setMetaTags([
        {
            name: 'description',
            content: 'ร้านสะดวกซักลงทุนเท่าไหร่? Uwash ตอบทุกคำถามเรื่องการลงทุน แฟรนไชส์เครื่องซักผ้าลงทุนเท่าไหร่ เปิดร้านซักผ้าลงทุนเท่าไหร่ เริ่มต้นไม่ถึงล้านบาท พร้อมเครื่อง LG Commercial'
        },
        {
            name: 'keywords',
            content: 'ร้านสะดวกซักลงทุนเท่าไหร่, แฟรนไชส์เครื่องซักผ้าลงทุนเท่าไหร่, เปิดร้านซักผ้าลงทุนเท่าไหร่, ลงทุนร้านซักผ้า, Uwash'
        },
        {
            property: 'og:title',
            content: 'ร้านสะดวกซัก ลงทุนเท่าไหร่? | Uwash เริ่มต้นไม่ถึงล้านบาท'
        },
        {
            property: 'og:description',
            content: 'ร้านสะดวกซักลงทุนเท่าไหร่? Uwash ตอบทุกคำถาม แฟรนไชส์เครื่องซักผ้าเริ่มต้นไม่ถึงล้านบาท พร้อมเครื่อง LG Commercial'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://www.uwashthai.com/ร้าน-สะดวก-ซัก-ลงทุน-เท่า-ไหร่'
        },
        {
            property: 'og:image',
            content: 'https://www.uwashthai.com/og-image-investment-faq.jpg'
        }
    ]);

    // ตั้งค่า Structured Data - FAQ Schema และ BreadcrumbList
    wixSeo.setStructuredData([
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
                {
                    '@type': 'Question',
                    'name': 'ร้านสะดวกซักลงทุนเท่าไหร่?',
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'ร้านสะดวกซัก Uwash ลงทุนเริ่มต้นไม่ถึงล้านบาท พร้อมเครื่องซักผ้าหยอดเหรียญ LG Commercial คุณภาพสูง และระบบจัดการร้านอัตโนมัติครบวงจร'
                    }
                },
                {
                    '@type': 'Question',
                    'name': 'แฟรนไชส์เครื่องซักผ้าลงทุนเท่าไหร่?',
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'แฟรนไชส์เครื่องซักผ้า Uwash มีหลายแพ็กเกจให้เลือก เริ่มต้นราคาไม่ถึงล้านบาท รวมเครื่องซักผ้า เครื่องอบผ้า ระบบหยอดเหรียญ และการติดตั้ง'
                    }
                },
                {
                    '@type': 'Question',
                    'name': 'เปิดร้านซักผ้าลงทุนเท่าไหร่?',
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'เปิดร้านซักผ้ากับ Uwash ลงทุนเริ่มต้นไม่ถึงล้านบาท ไม่ต้องจ้างพนักงาน ระบบอัตโนมัติทั้งหมด เหมาะสำหรับผู้ที่ต้องการ passive income'
                    }
                }
            ]
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                {
                    '@type': 'ListItem',
                    'position': 1,
                    'name': 'หน้าหลัก',
                    'item': 'https://www.uwashthai.com'
                },
                {
                    '@type': 'ListItem',
                    'position': 2,
                    'name': 'ร้านสะดวกซัก ลงทุนเท่าไหร่',
                    'item': 'https://www.uwashthai.com/ร้าน-สะดวก-ซัก-ลงทุน-เท่า-ไหร่'
                }
            ]
        }
    ]);

    // ตั้งค่า Canonical URL
    wixSeo.setLinks([
        {
            rel: 'canonical',
            href: 'https://www.uwashthai.com/ร้าน-สะดวก-ซัก-ลงทุน-เท่า-ไหร่'
        }
    ]);
});
