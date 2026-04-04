// routers.js - ระบบจัดการเส้นทาง URL สำหรับ uwashthai.com
// จัดการเส้นทางบล็อกและ sitemap สำหรับแฟรนไชส์สะดวกซัก Uwash

import { ok, notFound, WixRouterSitemapEntry } from 'wix-router';

// ข้อมูลบทความทั้งหมด - กำหนดไว้ในไฟล์โดยไม่ต้องใช้ฐานข้อมูล
const articles = [
  {
    slug: 'แฟรนไชส์เครื่องซักผ้า-คืออะไร',
    title: 'แฟรนไชส์เครื่องซักผ้าคืออะไร? ทำความรู้จักธุรกิจสะดวกซักแบบแฟรนไชส์',
    description: 'เรียนรู้ทุกอย่างเกี่ยวกับแฟรนไชส์เครื่องซักผ้า ธุรกิจสะดวกซักที่กำลังเติบโต พร้อมข้อดีและโอกาสในการลงทุนกับ Uwash',
    lastModified: '2026-03-15',
  },
  {
    slug: 'ร้านสะดวกซัก-ลงทุนเท่าไหร่-2026',
    title: 'ร้านสะดวกซักลงทุนเท่าไหร่ในปี 2026? คู่มือต้นทุนและผลตอบแทน',
    description: 'สรุปค่าใช้จ่ายการลงทุนร้านสะดวกซักปี 2026 ตั้งแต่ค่าเครื่องซักผ้า ค่าตกแต่งร้าน ไปจนถึงผลตอบแทนที่คาดหวัง กับแฟรนไชส์ Uwash',
    lastModified: '2026-03-20',
  },
  {
    slug: 'แฟรนไชส์ซักอบแห้ง-ธุรกิจมาแรง',
    title: 'แฟรนไชส์ซักอบแห้ง ธุรกิจมาแรงที่น่าจับตามอง',
    description: 'แฟรนไชส์ซักอบแห้งกำลังเป็นธุรกิจมาแรงในไทย ทำไมนักลงทุนถึงให้ความสนใจ? วิเคราะห์แนวโน้มตลาดและโอกาสกับ Uwash',
    lastModified: '2026-03-10',
  },
  {
    slug: 'เปรียบเทียบ-แฟรนไชส์ซักผ้า-uwash-vs-otteri',
    title: 'เปรียบเทียบแฟรนไชส์ซักผ้า Uwash vs Otteri ต่างกันอย่างไร?',
    description: 'เปรียบเทียบแฟรนไชส์ซักผ้า Uwash กับ Otteri แบบละเอียด ทั้งค่าลงทุน บริการ จุดเด่น เพื่อช่วยตัดสินใจเลือกแฟรนไชส์ที่เหมาะกับคุณ',
    lastModified: '2026-03-25',
  },
  {
    slug: 'เครื่องซักผ้าหยอดเหรียญ-แฟรนไชส์-ราคา',
    title: 'เครื่องซักผ้าหยอดเหรียญแฟรนไชส์ ราคาเท่าไหร่? สรุปครบทุกรุ่น',
    description: 'รวมราคาเครื่องซักผ้าหยอดเหรียญสำหรับแฟรนไชส์ เปรียบเทียบราคาทุกรุ่น พร้อมคำแนะนำการเลือกซื้อจาก Uwash',
    lastModified: '2026-03-18',
  },
  {
    slug: 'วิธีเปิดร้านสะดวกซัก-คู่มือฉบับสมบูรณ์',
    title: 'วิธีเปิดร้านสะดวกซัก คู่มือฉบับสมบูรณ์ ครบทุกขั้นตอน',
    description: 'คู่มือฉบับสมบูรณ์สำหรับการเปิดร้านสะดวกซัก ตั้งแต่เลือกทำเล จดทะเบียน เลือกเครื่อง ไปจนถึงการตลาด กับแฟรนไชส์ Uwash',
    lastModified: '2026-03-28',
  },
];

// ชื่อเว็บไซต์หลัก
const SITE_BASE_URL = 'https://www.uwashthai.com';

/**
 * ฟังก์ชัน Router สำหรับหน้าบล็อก
 * จับคู่ slug จาก URL แล้วส่งข้อมูลบทความไปยังหน้าเพจ
 */
export function blog_Router(request) {
  // ดึง slug จากเส้นทาง URL
  const slug = request.path[0];

  // ค้นหาบทความจาก slug
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    // ไม่พบบทความ - ส่งกลับหน้า 404
    return notFound();
  }

  // สร้าง SEO head tags สำหรับบทความ
  const seoData = {
    title: `${article.title} | Uwash Thailand`,
    description: article.description,
    metaTags: [
      { name: 'description', content: article.description },
      { property: 'og:title', content: article.title },
      { property: 'og:description', content: article.description },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: `${SITE_BASE_URL}/blog/${article.slug}` },
      { property: 'og:site_name', content: 'Uwash Thailand - แฟรนไชส์สะดวกซัก' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: article.title },
      { name: 'twitter:description', content: article.description },
      { name: 'robots', content: 'index, follow' },
    ],
  };

  // ส่งข้อมูลบทความไปยังหน้า "blog"
  return ok('blog', article, seoData);
}

/**
 * ฟังก์ชัน SiteMap สำหรับบล็อก
 * สร้างรายการ sitemap ของบทความทั้งหมดเพื่อช่วย SEO
 */
export function blog_SiteMap(sitemapRequest) {
  // สร้าง sitemap entries จากบทความทั้งหมด
  const entries = articles.map((article) => {
    const entry = new WixRouterSitemapEntry(`blog/${article.slug}`);
    entry.title = article.title;
    entry.lastModified = new Date(article.lastModified);
    entry.changeFrequency = 'weekly';
    entry.priority = 0.8;
    return entry;
  });

  return entries;
}

// ข้อมูลหน้าคงที่ทั้งหมดของเว็บไซต์
const staticPages = [
  {
    url: '/',
    title: 'Uwash Thailand - แฟรนไชส์สะดวกซักอันดับ 1',
    priority: 1.0,
    changeFrequency: 'daily',
  },
  {
    url: '/franchise-สะดวกซัก-uwash',
    title: 'แฟรนไชส์สะดวกซัก Uwash',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    url: '/ลงทุนแฟรนไชส์ร้านซักผ้า',
    title: 'ลงทุนแฟรนไชส์ร้านซักผ้า',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    url: '/ร้านสะดวกซักลงทุนเท่าไหร่',
    title: 'ร้านสะดวกซักลงทุนเท่าไหร่',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    url: '/รายละเอียดการลงทุน',
    title: 'รายละเอียดการลงทุนแฟรนไชส์ Uwash',
    priority: 0.8,
    changeFrequency: 'weekly',
  },
  {
    url: '/จุดเด่นสะดวกซัก-uwash',
    title: 'จุดเด่นสะดวกซัก Uwash',
    priority: 0.7,
    changeFrequency: 'weekly',
  },
  {
    url: '/aboutus',
    title: 'เกี่ยวกับ Uwash Thailand',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    url: '/branchesตำแหน่งที่ตั้ง-locations',
    title: 'สาขาและตำแหน่งที่ตั้ง Uwash',
    priority: 0.7,
    changeFrequency: 'weekly',
  },
  {
    url: '/ulaundry-full-service',
    title: 'ULaundry Full Service - บริการซักอบรีดเต็มรูปแบบ',
    priority: 0.7,
    changeFrequency: 'weekly',
  },
  {
    url: '/ulaundry-details',
    title: 'รายละเอียด ULaundry',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    url: '/newsandpromotion',
    title: 'ข่าวสารและโปรโมชั่น Uwash',
    priority: 0.5,
    changeFrequency: 'weekly',
  },
  {
    url: '/packageสะดวกซักuwashราคาเท่าไหร่',
    title: 'แพ็คเกจสะดวกซัก Uwash ราคาเท่าไหร่',
    priority: 0.8,
    changeFrequency: 'weekly',
  },
];

/**
 * ฟังก์ชัน SiteMap สำหรับหน้าคงที่ทั้งหมด
 * รวบรวม URL ของทุกหน้าในเว็บไซต์เพื่อช่วยให้ Google ทำ index ได้ครบถ้วน
 */
export function sitemap_SiteMap(sitemapRequest) {
  // สร้าง sitemap entries จากหน้าคงที่ทั้งหมด
  const entries = staticPages.map((page) => {
    // ตัด "/" นำหน้าออกสำหรับ WixRouterSitemapEntry (ยกเว้นหน้าแรก)
    const pagePath = page.url === '/' ? '' : page.url.substring(1);
    const entry = new WixRouterSitemapEntry(pagePath);
    entry.title = page.title;
    entry.lastModified = new Date('2026-04-01');
    entry.changeFrequency = page.changeFrequency;
    entry.priority = page.priority;
    return entry;
  });

  return entries;
}
