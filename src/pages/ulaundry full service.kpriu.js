// SEO Optimization - หน้า Ulaundry Full Service
import wixSeo from 'wix-seo';

$w.onReady(function () {
    // ตั้งค่า Title สำหรับ SEO
    wixSeo.setTitle("Ulaundry Full Service | บริการซักอบรีด ครบวงจร โดย Uwash");

    // ตั้งค่า Meta Tags รวม Open Graph
    // คีย์เวิร์ดเป้าหมาย: แฟรนไชส์ซักอบแห้ง (210/mo, trending +240%), แฟรนไชส์ซักอบ (140/mo)
    wixSeo.setMetaTags([
        { "name": "description", "content": "Ulaundry Full Service บริการซักอบรีดครบวงจร โดย Uwash แฟรนไชส์ซักอบแห้ง แฟรนไชส์ซักอบ ลงทุนง่าย ระบบจัดการทันสมัย" },
        { "name": "keywords", "content": "แฟรนไชส์ซักอบแห้ง, แฟรนไชส์ซักอบ, Ulaundry, ซักอบรีด, บริการซักอบรีดครบวงจร, Uwash, full service laundry" },
        { "property": "og:title", "content": "Ulaundry Full Service | บริการซักอบรีด ครบวงจร โดย Uwash" },
        { "property": "og:description", "content": "Ulaundry Full Service บริการซักอบรีดครบวงจร โดย Uwash แฟรนไชส์ซักอบแห้ง แฟรนไชส์ซักอบ ลงทุนง่าย ระบบจัดการทันสมัย" },
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
                    "name": "Ulaundry Full Service",
                    "item": "https://www.uwash.co.th/ulaundry-full-service"
                }
            ]
        },
        // Service - ข้อมูลบริการ
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Ulaundry Full Service",
            "description": "บริการซักอบรีดครบวงจร โดย Uwash แฟรนไชส์ซักอบแห้ง แฟรนไชส์ซักอบ ลงทุนง่าย ระบบจัดการทันสมัย",
            "provider": {
                "@type": "Organization",
                "name": "Uwash",
                "url": "https://www.uwash.co.th"
            },
            "serviceType": "บริการซักอบรีดครบวงจร",
            "areaServed": {
                "@type": "Country",
                "name": "Thailand"
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "บริการ Ulaundry Full Service",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "บริการซักอบรีด"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "บริการซักอบแห้ง"
                        }
                    }
                ]
            }
        }
    ]);
});
