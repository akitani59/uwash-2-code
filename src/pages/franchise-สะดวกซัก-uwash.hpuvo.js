// SEO Optimization สำหรับหน้าแฟรนไชส์สะดวกซัก Uwash
import wixSeo from 'wix-seo';

$w.onReady(function () {
    // ตั้งค่า Title Tag
    wixSeo.setTitle('แฟรนไชส์สะดวกซัก Uwash | ลงทุนแฟรนไชส์เครื่องซักผ้า ราคาไม่ถึงล้าน');

    // ตั้งค่า Meta Tags รวม Open Graph
    wixSeo.setMetaTags([
        {
            name: 'description',
            content: 'แฟรนไชส์เครื่องซักผ้า Uwash ลงทุนแฟรนไชส์ร้านซักผ้าหยอดเหรียญ LG Commercial ราคาไม่ถึงล้าน แฟรนไชส์สะดวกซักที่คุ้มค่าที่สุด พร้อมระบบจัดการร้านอัตโนมัติ รับรายได้ passive income ทุกวัน'
        },
        {
            name: 'keywords',
            content: 'แฟรนไชส์เครื่องซักผ้า, แฟรนไชส์ร้านซักผ้า, แฟรนไชส์สะดวกซัก, แฟรนไชส์ร้านซักผ้าหยอดเหรียญ, Uwash, ลงทุนแฟรนไชส์'
        },
        {
            property: 'og:title',
            content: 'แฟรนไชส์สะดวกซัก Uwash | ลงทุนแฟรนไชส์เครื่องซักผ้า ราคาไม่ถึงล้าน'
        },
        {
            property: 'og:description',
            content: 'แฟรนไชส์เครื่องซักผ้า Uwash ลงทุนแฟรนไชส์ร้านซักผ้าหยอดเหรียญ LG Commercial ราคาไม่ถึงล้าน พร้อมระบบจัดการร้านอัตโนมัติ'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://www.uwashthai.com/franchise-สะดวกซัก-uwash'
        },
        {
            property: 'og:image',
            content: 'https://www.uwashthai.com/og-image-franchise.jpg'
        }
    ]);

    // ตั้งค่า Structured Data - Service Schema และ BreadcrumbList
    wixSeo.setStructuredData([
        {
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'แฟรนไชส์สะดวกซัก Uwash',
            'description': 'แฟรนไชส์เครื่องซักผ้าหยอดเหรียญ LG Commercial ลงทุนราคาไม่ถึงล้าน พร้อมระบบจัดการร้านอัตโนมัติ',
            'provider': {
                '@type': 'Organization',
                'name': 'Uwash Thailand',
                'url': 'https://www.uwashthai.com'
            },
            'serviceType': 'Laundry Franchise',
            'areaServed': {
                '@type': 'Country',
                'name': 'Thailand'
            },
            'offers': {
                '@type': 'Offer',
                'priceCurrency': 'THB',
                'description': 'แพ็กเกจแฟรนไชส์เครื่องซักผ้า ราคาเริ่มต้นไม่ถึงล้านบาท'
            }
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
                    'name': 'แฟรนไชส์สะดวกซัก Uwash',
                    'item': 'https://www.uwashthai.com/franchise-สะดวกซัก-uwash'
                }
            ]
        }
    ]);

    // ตั้งค่า Canonical URL
    wixSeo.setLinks([
        {
            rel: 'canonical',
            href: 'https://www.uwashthai.com/franchise-สะดวกซัก-uwash'
        }
    ]);
});
