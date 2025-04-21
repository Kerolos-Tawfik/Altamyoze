const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن الشركة",
      services: "خدماتنا",
      products: "أعمالنا",
      Contact: "اتصل بنا",
    },
    title: "التميز | تصميم المواقع وخدمات الويب ",
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

    viewMore: "تواصل لعمل مماثل",
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
    serviceDropdownItems: {
      mobileDesign: "تصميم و تطوير التطبيقات",
      webDev: "تصميم و تطوير المواقع الالكترونيه",
      digitalServices: "التسويق الرقمي",
      motionDesign: "التصميم و الموشن جرافيكس"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      products: "Portfolio",
      Contact: "Contact Us",
    },
    title: "Excellence | Web Design and Services",
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
    viewMore: "Contact for similar work",
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
    serviceDropdownItems: {
      mobileDesign: "Mobile App Design & Development",
      webDev: "Website Design & Development",
      digitalServices: "Digital Marketing",
      motionDesign: "Design & Motion Graphics"
    }
  },
};

document.addEventListener("DOMContentLoaded", function() {
  // Inicialización después de que el DOM esté completamente cargado
  loadLanguage();
});

const loadLanguage = () => {
  const savedLang = localStorage.getItem("selectedLang") || "ar";
  updatePageLanguage(savedLang);
  const languageToggle = document.getElementById("language-toggle");
  if (languageToggle) {
    languageToggle.checked = savedLang === "en";
  }
};

const updatePageLanguage = (lang) => {
  const selectedLang = translations[lang];
  
  // Actualizar dirección y lenguaje del documento
  document.documentElement.setAttribute("dir", lang === "en" ? "ltr" : "rtl");
  document.documentElement.setAttribute("lang", lang);
  
  // Actualizar elementos de navegación en escritorio y móvil
  const navItems = document.querySelectorAll(
    ".nav-menu-wrapper .navbar-nav > .nav-item > a, .slicknav_menu .slicknav_nav > li > a"
  );
  
  const keys = ["home", "about", "services", "products", "Contact"];
  
  if (navItems) {
    navItems.forEach((item, index) => {
      if (index < keys.length) {
        item.textContent = selectedLang.nav[keys[index]];
      }
    });
  }
  
  // Actualizar elementos de la lista desplegable de servicios
  const serviceDropdownItems = document.querySelectorAll(
    ".nav-menu-wrapper .navbar-nav .submenu ul li a, .slicknav_menu .slicknav_nav .slicknav_parent ul li a"
  );
  
  const dropdownKeys = ["mobileDesign", "webDev", "digitalServices", "motionDesign"];
  
  if (serviceDropdownItems) {
    serviceDropdownItems.forEach((item, index) => {
      if (index < dropdownKeys.length) {
        const key = dropdownKeys[index];
        item.textContent = selectedLang.serviceDropdownItems[key];
      }
    });
  }
  

  // Actualizar el título de la página de portfolio
  const profileHeaderTitle = document.querySelector(".page-header-box.profile h1");
  if (profileHeaderTitle) {
    profileHeaderTitle.innerHTML = selectedLang.pageheaderbox;
  }
  
  // Actualizar título de la página
  const titleElement = document.querySelector("title");
  if (titleElement) {
    titleElement.textContent = selectedLang.title;
  }
  
  // Actualizar sección de newsletter
  const newsletterTitle = document.querySelector(".footer-newsletter-title h2");
  if (newsletterTitle) {
    newsletterTitle.innerHTML = selectedLang.newsletterTitle;
  }
  
  const mailInput = document.querySelector("#mail");
  if (mailInput) {
    mailInput.placeholder = selectedLang.newsletterPlaceholder;
  }

  // Actualizar enlaces del footer
  const linksHeadings = document.querySelectorAll(".footer-links h3");
  if (linksHeadings && linksHeadings.length >= 3) {
    linksHeadings[0].textContent = selectedLang.quickLinks;
    linksHeadings[1].textContent = selectedLang.ourServices;
    linksHeadings[2].textContent = selectedLang.supportTitle;
  }

  const quickLinks = document.querySelectorAll(".footer-links.two ul li a");
  if (quickLinks && quickLinks.length >= 4) {
    quickLinks[0].textContent = selectedLang.home;
    quickLinks[1].textContent = selectedLang.about;
    quickLinks[2].textContent = selectedLang.services;
    quickLinks[3].textContent = selectedLang.portfolio;
  }

  const servicesLinks = document.querySelectorAll(".footer-links.three ul li a");
  if (servicesLinks && servicesLinks.length >= 4) {
    servicesLinks[0].textContent = selectedLang.webDevelopment;
    servicesLinks[1].textContent = selectedLang.ecommerce;
    servicesLinks[2].textContent = selectedLang.seo;
    servicesLinks[3].textContent = selectedLang.support;
  }

  const supportLinks = document.querySelectorAll(".footer-links.four ul li a");
  if (supportLinks && supportLinks.length >= 2) {
    supportLinks[0].textContent = selectedLang.help;
    supportLinks[1].textContent = selectedLang.contact;
  }

  // Actualizar texto de copyright
  const copyrightText = document.querySelector(".footer-copyright-text p");
  if (copyrightText) {
    copyrightText.textContent = selectedLang.copyright;
  }

  // Actualizar botones de "Ver más" en la sección de proyectos
  const viewMoreButtons = document.querySelectorAll(".blog-item-btn a");
  if (viewMoreButtons) {
    viewMoreButtons.forEach((btn) => {
      btn.textContent = selectedLang.viewMore;
    });
  }

  // Actualizar títulos de proyectos
  const projectTitles = document.querySelectorAll(".post-item-content h3 a");
  if (projectTitles) {
    projectTitles.forEach((title, index) => {
      if (index < selectedLang.projects.length) {
        title.textContent = selectedLang.projects[index];
      }
    });
  }
};

// Event listener para el cambio de idioma
document.addEventListener("DOMContentLoaded", function() {
  const languageToggle = document.getElementById("language-toggle");
  if (languageToggle) {
    languageToggle.addEventListener("change", function() {
      const lang = this.checked ? "en" : "ar";
      localStorage.setItem("selectedLang", lang);
    
      // Mostrar el preloader antes de actualizar el idioma
      const preloader = document.querySelector(".preloader");
      if (preloader) {
        preloader.style.display = "flex";
        preloader.style.alignItems = "center";
        preloader.style.justifyContent = "center";
      }
    
      // Actualizar el idioma
      updatePageLanguage(lang);
      
      // Ocultar el preloader después de un breve retraso
      setTimeout(() => {
        if (preloader) {
          preloader.style.display = "none";
        }
      }, 500);
    });
  }
});
