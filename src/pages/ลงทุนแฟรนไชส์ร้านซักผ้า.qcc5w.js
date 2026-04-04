// SEO Optimization สำหรับหน้าลงทุนแฟรนไชส์ร้านซักผ้า
import wixSeo from 'wix-seo';

$w.onReady(function () {
    // ตั้งค่า Title Tag
    wixSeo.setTitle('ลงทุนแฟรนไชส์ร้านซักผ้า Uwash | เครื่องซักผ้าหยอดเหรียญ LG Commercial');

    // ตั้งค่า Meta Tags รวม Open Graph
    wixSeo.setMetaTags([
        {
            name: 'description',
            content: 'ลงทุนแฟรนไชส์ร้านซักผ้า Uwash พร้อมเครื่องซักผ้าหยอดเหรียญ LG Commercial คุณภาพสูง ลงทุนร้านสะดวกซักเริ่มต้นราคาประหยัด ลงทุนเครื่องซักผ้าหยอดเหรียญกับแบรนด์ที่ไว้ใจได้'
        },
        {
            name: 'keywords',
            content: 'ลงทุนร้านซักผ้า, ลงทุนเครื่องซักผ้าหยอดเหรียญ, ลงทุนร้านสะดวกซัก, แฟรนไชส์ร้านซักผ้า, LG Commercial, Uwash'
        },
        {
            property: 'og:title',
            content: 'ลงทุนแฟรนไชส์ร้านซักผ้า Uwash | เครื่องซักผ้าหยอดเหรียญ LG Commercial'
        },
        {
            property: 'og:description',
            content: 'ลงทุนแฟรนไชส์ร้านซักผ้า Uwash พร้อมเครื่องซักผ้าหยอดเหรียญ LG Commercial คุณภาพสูง ลงทุนร้านสะดวกซักเริ่มต้นราคาประหยัด'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://www.uwashthai.com/ลงทุนแฟรนไชส์ร้านซักผ้า'
        },
        {
            property: 'og:image',
            content: 'https://www.uwashthai.com/og-image-investment.jpg'
        }
    ]);

    // ตั้งค่า Structured Data - Product Schema และ BreadcrumbList
    wixSeo.setStructuredData([
        {
            '@context': 'https://schema.org',
            '@type': 'Product',
            'name': 'แฟรนไชส์ร้านซักผ้า Uwash พร้อมเครื่องซักผ้าหยอดเหรียญ LG Commercial',
            'description': 'แพ็กเกจลงทุนแฟรนไชส์ร้านซักผ้า Uwash พร้อมเครื่องซักผ้าหยอดเหรียญ LG Commercial คุณภาพสูง ระบบจัดการร้านอัตโนมัติ',
            'brand': {
                '@type': 'Brand',
                'name': 'Uwash Thailand'
            },
            'category': 'Laundry Franchise Investment',
            'offers': {
                '@type': 'Offer',
                'priceCurrency': 'THB',
                'availability': 'https://schema.org/InStock',
                'description': 'แพ็กเกจลงทุนร้านสะดวกซัก เครื่องซักผ้าหยอดเหรียญ LG Commercial'
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
                    'name': 'ลงทุนแฟรนไชส์ร้านซักผ้า',
                    'item': 'https://www.uwashthai.com/ลงทุนแฟรนไชส์ร้านซักผ้า'
                }
            ]
        }
    ]);

    // ตั้งค่า Canonical URL
    wixSeo.setLinks([
        {
            rel: 'canonical',
            href: 'https://www.uwashthai.com/ลงทุนแฟรนไชส์ร้านซักผ้า'
        }
    ]);
});
