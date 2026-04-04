// Uwash Homepage – SEO Optimization
// ตั้งค่า SEO สำหรับหน้าแรก uwashthai.com

import wixSeo from 'wix-seo';

$w.onReady(function () {

    // ===== 1. ตั้งค่า Title =====
    wixSeo.setTitle(
        'Uwash แฟรนไชส์สะดวกซัก | ลงทุนร้านซักผ้า เริ่มต้นไม่ถึงล้าน'
    );

    // ===== 2. Meta Tags (Description + Open Graph) =====
    wixSeo.setMetaTags([
        {
            name: 'description',
            content:
                'Uwash แฟรนไชส์เครื่องซักผ้าหยอดเหรียญ ลงทุนร้านสะดวกซักเริ่มต้นไม่ถึงล้าน ' +
                'เครื่องซักผ้า LG Commercial 13-18KG ระบบ Smart Kiosk แอปจัดการร้าน ' +
                'แฟรนไชส์ร้านซักผ้าที่ดีที่สุดในประเทศไทย'
        },
        {
            name: 'keywords',
            content:
                'แฟรนไชส์เครื่องซักผ้า, แฟรนไชส์ร้านซักผ้า, ลงทุนร้านสะดวกซัก, ' +
                'เครื่องซักผ้าหยอดเหรียญ, แฟรนไชส์สะดวกซัก, ร้านสะดวกซัก ลงทุน, ' +
                'แฟรนไชส์ซักอบแห้ง, Uwash, uwash franchise'
        },
        // Open Graph Tags
        {
            property: 'og:title',
            content: 'Uwash แฟรนไชส์สะดวกซัก | ลงทุนร้านซักผ้า เริ่มต้นไม่ถึงล้าน'
        },
        {
            property: 'og:description',
            content:
                'ลงทุนแฟรนไชส์เครื่องซักผ้าหยอดเหรียญกับ Uwash เริ่มต้นไม่ถึงล้าน ' +
                'เครื่อง LG Commercial ระบบ Smart Kiosk แอปจัดการร้านครบวงจร'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://www.uwashthai.com'
        },
        {
            property: 'og:site_name',
            content: 'Uwash Thailand'
        },
        {
            property: 'og:locale',
            content: 'th_TH'
        },
        // Twitter Card
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:title',
            content: 'Uwash แฟรนไชส์สะดวกซัก | ลงทุนร้านซักผ้า เริ่มต้นไม่ถึงล้าน'
        },
        {
            name: 'twitter:description',
            content:
                'ลงทุนแฟรนไชส์เครื่องซักผ้าหยอดเหรียญกับ Uwash เริ่มต้นไม่ถึงล้าน'
        }
    ]);

    // ===== 3. Canonical Link =====
    wixSeo.setLinks([
        {
            rel: 'canonical',
            href: 'https://www.uwashthai.com'
        }
    ]);

    // ===== 4. Structured Data (JSON-LD) =====
    wixSeo.setStructuredData([

        // --- 4.1 WebSite Schema พร้อม SearchAction ---
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Uwash Thailand',
            alternateName: 'ยูวอช แฟรนไชส์สะดวกซัก',
            url: 'https://www.uwashthai.com',
            potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.uwashthai.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
            }
        },

        // --- 4.2 Product Schema สำหรับแพ็กเกจแฟรนไชส์ ---
        {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Uwash แฟรนไชส์สะดวกซัก แพ็กเกจลงทุน',
            description:
                'แฟรนไชส์ร้านสะดวกซัก Uwash พร้อมเครื่องซักผ้า LG Commercial 13-18KG ' +
                'ระบบ Smart Kiosk แอปจัดการร้าน ลงทุนเริ่มต้นไม่ถึงล้านบาท',
            brand: {
                '@type': 'Brand',
                name: 'Uwash'
            },
            offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'THB',
                lowPrice: '590000',
                highPrice: '990000',
                offerCount: '3',
                availability: 'https://schema.org/InStock',
                url: 'https://www.uwashthai.com'
            },
            category: 'แฟรนไชส์เครื่องซักผ้าหยอดเหรียญ'
        },

        // --- 4.3 BreadcrumbList Schema ---
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'หน้าแรก',
                    item: 'https://www.uwashthai.com'
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'แฟรนไชส์สะดวกซัก',
                    item: 'https://www.uwashthai.com/franchise'
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'ติดต่อเรา',
                    item: 'https://www.uwashthai.com/contact'
                }
            ]
        },

        // --- 4.4 FAQ Schema – คำถามที่พบบ่อยเกี่ยวกับแฟรนไชส์ ---
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'แฟรนไชส์เครื่องซักผ้า ลงทุนเท่าไหร่?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text:
                            'แฟรนไชส์เครื่องซักผ้า Uwash ลงทุนเริ่มต้นไม่ถึง 1 ล้านบาท ' +
                            'ใช้เครื่องซักผ้า LG Commercial ขนาด 13-18KG คุณภาพระดับสากล ' +
                            'พร้อมระบบ Smart Kiosk และแอปจัดการร้านครบวงจร ' +
                            'คืนทุนเร็วภายใน 12-18 เดือน'
                    }
                },
                {
                    '@type': 'Question',
                    name: 'ร้านสะดวกซัก ลงทุนเท่าไหร่?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text:
                            'ร้านสะดวกซัก Uwash มีแพ็กเกจลงทุนหลายระดับ เริ่มต้นตั้งแต่ 590,000 บาท ' +
                            'ถึง 990,000 บาท ทุกแพ็กเกจรวมเครื่องซักผ้า LG Commercial ' +
                            'ระบบ Smart Kiosk ป้ายร้าน และการฝึกอบรมครบถ้วน'
                    }
                },
                {
                    '@type': 'Question',
                    name: 'แฟรนไชส์สะดวกซัก uwash ดีอย่างไร?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text:
                            'Uwash แฟรนไชส์สะดวกซักที่โดดเด่นด้วยระบบ Smart Kiosk ' +
                            'รับเงินสดและ QR Payment อัตโนมัติ มีแอปจัดการร้านแบบ Real-time ' +
                            'ใช้เครื่องซักผ้า LG Commercial ทนทาน ประหยัดน้ำ-ไฟ ' +
                            'ระบบร้านทันสมัย ดูแลง่าย ไม่ต้องมีพนักงานประจำ'
                    }
                },
                {
                    '@type': 'Question',
                    name: 'เครื่องซักผ้าหยอดเหรียญ แฟรนไชส์ ราคาเท่าไหร่?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text:
                            'แฟรนไชส์เครื่องซักผ้าหยอดเหรียญ Uwash ราคาเริ่มต้นที่ 590,000 บาท ' +
                            'รวมเครื่องซักผ้า LG Commercial 13-18KG, ระบบ Smart Kiosk, ' +
                            'แอปจัดการร้าน, ป้ายหน้าร้าน และอุปกรณ์ครบชุด ' +
                            'แพ็กเกจสูงสุด 990,000 บาท สำหรับร้านขนาดใหญ่'
                    }
                },
                {
                    '@type': 'Question',
                    name: 'แฟรนไชส์ซักอบแห้ง คืออะไร?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text:
                            'แฟรนไชส์ซักอบแห้ง Uwash คือธุรกิจร้านสะดวกซักครบวงจร ' +
                            'ที่มีทั้งเครื่องซักผ้าและเครื่องอบผ้าในร้านเดียว ' +
                            'ใช้เครื่อง IMAGE Washer-Dryer คุณภาพสูง ร่วมกับระบบ Richimo ' +
                            'ลูกค้าซักและอบแห้งเสร็จในที่เดียว สะดวก รวดเร็ว'
                    }
                }
            ]
        }
    ]);
});
