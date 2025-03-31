const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن الشركة",
      services: "خدماتنا",
      products: "أعمالنا",
      Contact: "اتصل بنا",
    },
    pageheaderbox:
      '<h1 class="text-anime-style-2" data-cursor="-opaque">جميع <span>أعمالنا</span></h1>',
    newsletterTitle:
      "<h2> دعونا نحقق التميز في موقعك<span> الأكتروني</span></h2>",
    newsletterPlaceholder: "أدخل بريدك الإلكتروني",
    quickLinks: "روابط سريعة",
    ourServices: "خدماتنا",
    supportTitle: "الدعم",
    home: "الرئيسية",
    about: "عن الشركة",
    services: "خدماتنا",
    portfolio: "أعمالنا",
    webDevelopment: "تصميم وتطوير المواقع",
    ecommerce: "إنشاء المتاجر الإلكترونية",
    seo: "تحسين محركات البحث",
    support: "خدمات الدعم الفني",
    help: "مساعدة",
    privacy: "سياسة الخصوصية",
    terms: "الشروط والأحكام",
    contact: "اتصال",
    copyright: "حقوق الطبع والنشر © 2025 جميع الحقوق محفوظة.",

    viewMore: "عرض المزيد",
    projects: [
      "تطبيق متجر إلكتروني لبيع وتوصيل ألعاب الأطفال",
      "تصميم تطبيق هوم بزنس – شغل بيت",
      "تصميم متجر لبيع المنتجات الزراعية Bonsai",
      "تطوير موقع تعليمي",
      "تصميم تطبيق بودكاست iOS",
      "منصة الاذاعة المدرسية",

      "بناء داشبورد بشكل كامل ",
      "تطوير وبناء تطبيق بني شهر",

      "منصة حجز الفنادق - رواق",
      "مملكة هوم - إعادة تصميم متجر إلكتروني لمواد البناء",
      "تصميم موقع لشركة Printa",
      "تصميم متجر عطور الصابرى عود",
      "عمل  خطة بحث السوق",
      "تحسين سيو شامل لموقع الالكتروني - Moien",
      " انشاء تطبيق اعلانات يرهش",
    ],
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      products: "Portfolio",
      Contact: "Contact Us",
    },
    pageheaderbox:
      '<h1 class="text-anime-style-2" data-cursor="-opaque">All <span>Our Works</span></h1>',
    newsletterTitle:
      "<h2> Let's Achieve Excellence in <span> Your Website</span></h2>",
    newsletterPlaceholder: "Enter Your Email",
    quickLinks: "Quick Links",
    ourServices: "Our Services",
    supportTitle: "Support",
    home: "Home",
    about: "About Us",
    services: "Services",
    portfolio: "Our Work",
    webDevelopment: "Web Design & Development",
    ecommerce: "E-commerce Creation",
    seo: "SEO Optimization",
    support: "Technical Support",
    help: "Help",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    contact: "Contact",
    copyright: "Copyright © 2025 All Rights Reserved.",
    viewMore: "View More",
    projects: [
      "E-commerce app for selling and delivering children's toys",
      "Home business app design - Home Jobs",
      "Bonsai agricultural products e-store design",
      "Educational website development",
      "iOS podcast app design",
      "School radio platform",
      "Building a complete dashboard",
      "Developing and building Bani Shahr application",
      "Hotel booking platform - Rwaq",
      "Mamlaka Home - Redesigning an e-commerce store for building materials",
      "Website design for Printa company",
      "Designing Al-Sabri Oud perfume store",
      "Conducting market research plan",
      "Comprehensive SEO optimization for Moien website",
      "Creating Yarahsh advertising application",
    ],
  },
};

const loadLanguage = () => {
  const savedLang = localStorage.getItem("selectedLang") || "ar";
  updatePageLanguage(savedLang);
  document.getElementById("language-toggle").checked = savedLang === "en";
};

const updatePageLanguage = (lang) => {
  const selectedLang = translations[lang];

  const navItems = document.querySelectorAll(
    ".nav-menu-wrapper .navbar-nav .nav-item a"
  );
  const keys = ["home", "about", "services", "products", "Contact"];

  navItems.forEach((item, index) => {
    item.textContent = selectedLang.nav[keys[index]];
  });

  document.querySelector(".page-header-box.profile h1").innerHTML =
    selectedLang.pageheaderbox;
  document.querySelector(".footer-newsletter-title h2").innerHTML =
    selectedLang.newsletterTitle;
  document.querySelector("#mail").placeholder =
    selectedLang.newsletterPlaceholder;

  let links = document.querySelectorAll(".footer-links h3");
  links[0].textContent = selectedLang.quickLinks;
  links[1].textContent = selectedLang.ourServices;
  links[2].textContent = selectedLang.supportTitle;

  let quickLinks = document.querySelectorAll(".footer-links.two ul li a");
  quickLinks[0].textContent = selectedLang.home;
  quickLinks[1].textContent = selectedLang.about;
  quickLinks[2].textContent = selectedLang.services;
  quickLinks[3].textContent = selectedLang.portfolio;

  let servicesLinks = document.querySelectorAll(".footer-links.three ul li a");
  servicesLinks[0].textContent = selectedLang.webDevelopment;
  servicesLinks[1].textContent = selectedLang.ecommerce;
  servicesLinks[2].textContent = selectedLang.seo;
  servicesLinks[3].textContent = selectedLang.support;

  let supportLinks = document.querySelectorAll(".footer-links.four ul li a");
  supportLinks[0].textContent = selectedLang.help;
  supportLinks[1].textContent = selectedLang.privacy;
  supportLinks[2].textContent = selectedLang.terms;
  supportLinks[3].textContent = selectedLang.contact;

  document.querySelector(".footer-copyright-text p").textContent =
    selectedLang.copyright;

  document.querySelectorAll(".blog-item-btn a").forEach((btn) => {
    btn.textContent = translations[lang].viewMore;
  });

  document.querySelectorAll(".post-item-content h3 a").forEach((title, index) => {
      title.textContent = translations[lang].projects[index];
  });

  document.querySelector("title").textContent = selectedLang.title;
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "en" ? "ltr" : "rtl");
};

document
  .getElementById("language-toggle")
  .addEventListener("change", function () {
    const lang = this.checked ? "en" : "ar";
    localStorage.setItem("selectedLang", lang);

    const preloader = document.querySelector(".preloader");
    preloader.style.display = "flex";
    preloader.style.alignItems = "center";
    preloader.style.justifyContent = "center";

    setTimeout(() => {
      updatePageLanguage(lang);
      preloader.style.display = "none";
    }, 1000);
  });

loadLanguage();
