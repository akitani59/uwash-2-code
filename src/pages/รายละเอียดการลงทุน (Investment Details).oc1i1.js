// SEO Optimization สำหรับหน้ารายละเอียดการลงทุน (Investment Details)
import wixSeo from 'wix-seo';

$w.onReady(function () {
    // ตั้งค่า Title Tag
    wixSeo.setTitle('รายละเอียดการลงทุนแฟรนไชส์ Uwash | แพ็กเกจเครื่องซักผ้า LG Commercial');

    // ตั้งค่า Meta Tags รวม Open Graph
    wixSeo.setMetaTags([
        {
            name: 'description',
            content: 'รายละเอียดการลงทุนแฟรนไชส์ซักผ้า Uwash แพ็กเกจเครื่องซักผ้า LG Commercial ราคาแฟรนไชส์เครื่องซักผ้าและแฟรนไชส์ร้านซักผ้าราคาเริ่มต้นไม่ถึงล้าน พร้อมข้อมูลครบจบในหน้าเดียว'
        },
        {
            name: 'keywords',
            content: 'แฟรนไชส์ซักผ้า, แฟรนไชส์เครื่องซักผ้าราคา, แฟรนไชส์ร้านซักผ้าราคา, รายละเอียดการลงทุน, Uwash, LG Commercial'
        },
        {
            property: 'og:title',
            content: 'รายละเอียดการลงทุนแฟรนไชส์ Uwash | แพ็กเกจเครื่องซักผ้า LG Commercial'
        },
        {
            property: 'og:description',
            content: 'รายละเอียดการลงทุนแฟรนไชส์ซักผ้า Uwash แพ็กเกจเครื่องซักผ้า LG Commercial ราคาเริ่มต้นไม่ถึงล้าน พร้อมข้อมูลครบจบในหน้าเดียว'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://www.uwashthai.com/รายละเอียดการลงทุน'
        },
        {
            property: 'og:image',
            content: 'https://www.uwashthai.com/og-image-details.jpg'
        }
    ]);

    // ตั้งค่า Structured Data - Product/Offer Schema และ BreadcrumbList
    wixSeo.setStructuredData([
        {
            '@context': 'https://schema.org',
            '@type': 'Product',
            'name': 'แพ็กเกจแฟรนไชส์เครื่องซักผ้า Uwash',
            'description': 'แพ็กเกจแฟรนไชส์ซักผ้า Uwash พร้อมเครื่องซักผ้าหยอดเหรียญ LG Commercial ระบบจัดการร้านอัตโนมัติ',
            'brand': {
                '@type': 'Brand',
                'name': 'Uwash Thailand'
            },
            'category': 'Laundry Franchise Package',
            'offers': {
                '@type': 'AggregateOffer',
                'priceCurrency': 'THB',
                'availability': 'https://schema.org/InStock',
                'description': 'แพ็กเกจแฟรนไชส์ร้านซักผ้าราคาเริ่มต้นไม่ถึงล้านบาท หลายแพ็กเกจให้เลือก',
                'offerCount': '3'
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
                    'name': 'รายละเอียดการลงทุน',
                    'item': 'https://www.uwashthai.com/รายละเอียดการลงทุน'
                }
            ]
        }
    ]);

    // ตั้งค่า Canonical URL
    wixSeo.setLinks([
        {
            rel: 'canonical',
            href: 'https://www.uwashthai.com/รายละเอียดการลงทุน'
        }
    ]);
});
