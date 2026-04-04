// Uwash Blog Router Page – SEO Optimization
// หน้า Router Page สำหรับแสดงบทความบล็อก
// เมื่อ router ส่ง ok("blog", data) ระบบจะ render หน้านี้พร้อมข้อมูลบทความ

import wixSeo from 'wix-seo';
import wixRouter from 'wix-router';

$w.onReady(function () {

    // ===== 1. ดึงข้อมูลบทความจาก Router Data =====
    let data = wixRouter.getRouterData();

    // ถ้าไม่มีข้อมูล ไม่ต้องทำอะไร
    if (!data) {
        return;
    }

    // ===== 2. ตั้งค่า SEO Title =====
    wixSeo.setTitle(
        data.seoTitle || data.title || 'บทความ | Uwash Thailand'
    );

    // ===== 3. Meta Tags (Description + Open Graph + Twitter) =====
    wixSeo.setMetaTags([
        {
            name: 'description',
            content: data.metaDescription || data.description || ''
        },
        {
            name: 'keywords',
            content: data.keywords || ''
        },
        // Open Graph Tags
        {
            property: 'og:title',
            content: data.seoTitle || data.title || ''
        },
        {
            property: 'og:description',
            content: data.metaDescription || data.description || ''
        },
        {
            property: 'og:type',
            content: 'article'
        },
        {
            property: 'og:url',
            content: data.canonicalUrl || ('https://www.uwashthai.com/blog/' + data.slug)
        },
        {
            property: 'og:site_name',
            content: 'Uwash Thailand'
        },
        {
            property: 'og:locale',
            content: 'th_TH'
        },
        {
            property: 'og:image',
            content: data.featuredImage || ''
        },
        // Twitter Card
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:title',
            content: data.seoTitle || data.title || ''
        },
        {
            name: 'twitter:description',
            content: data.metaDescription || data.description || ''
        },
        {
            name: 'twitter:image',
            content: data.featuredImage || ''
        }
    ]);

    // ===== 4. Canonical Link =====
    wixSeo.setLinks([
        {
            rel: 'canonical',
            href: data.canonicalUrl || ('https://www.uwashthai.com/blog/' + data.slug)
        }
    ]);

    // ===== 5. Structured Data (JSON-LD) =====
    let structuredData = [];

    // --- 5.1 Article Schema – ข้อมูล JSON-LD ของบทความ ---
    structuredData.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title || '',
        description: data.description || '',
        image: data.featuredImage || '',
        author: {
            '@type': 'Organization',
            name: 'Uwash Thailand'
        },
        publisher: {
            '@type': 'Organization',
            name: 'Uwash Thailand',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.uwashthai.com/uwash-logo.png'
            }
        },
        datePublished: data.datePublished || data.publishDate || '',
        dateModified: data.dateModified || data.lastUpdated || data.datePublished || '',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data.canonicalUrl || ('https://www.uwashthai.com/blog/' + data.slug)
        }
    });

    // --- 5.2 FAQ Schema – ถ้าบทความมีเนื้อหา FAQ ---
    if (data.faqItems && data.faqItems.length > 0) {
        let faqEntities = data.faqItems.map(function (faq) {
            return {
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer
                }
            };
        });

        structuredData.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqEntities
        });
    }

    // --- 5.3 BreadcrumbList Schema – เส้นทางนำทาง: หน้าแรก > บล็อก > ชื่อบทความ ---
    structuredData.push({
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
                name: 'บล็อก',
                item: 'https://www.uwashthai.com/blog'
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: data.title || '',
                item: data.canonicalUrl || ('https://www.uwashthai.com/blog/' + data.slug)
            }
        ]
    });

    // ตั้งค่า Structured Data ทั้งหมด
    wixSeo.setStructuredData(structuredData);

    // ===== 6. อัปเดต Element บนหน้าเว็บ (ถ้ามี) =====

    // ตั้งค่าชื่อบทความ
    try {
        $w('#blogTitle').text = data.title;
    } catch (e) {
        // element อาจไม่มีอยู่บนหน้านี้
    }

    // ตั้งค่าเนื้อหาบทความ
    try {
        $w('#blogContent').text = data.content;
    } catch (e) {
        // element อาจไม่มีอยู่บนหน้านี้
    }
});
