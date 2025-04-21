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
        '<h1 class="text-anime-style-2" > تواصل <span>معنا </span></h1>',
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

      contactInfo: [
        {
            text: "يمكنكم التواصل معنا عبر البريد الإلكتروني.",
        },
        {
            text: "اتصل بنا لرفع مستوى علامتك التجارية وتحقيق النجاح عبر الإنترنت.",
        },
        {
            text: "قم بزيارة مكتبنا للحصول على حلول مخصصة.",
        }
    ],
    contactTitle: "تواصل معنا",
    contactSubtitle: "تواصل <span>معنا</span> الآن",
    contactDescription: "تواصل مع فريقنا للحصول على حلول متخصصة في بناء المواقع، مصممة لتعزيز حضورك الرقمي وتقديم تجربة مستخدم متميزة.",
    placeholders: {
        firstName: "الاسم الأول",
        lastName: "الاسم الأخير",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        message: "اكتب استفسارك هنا..."
    },
    submit: "أرسل الرسالة"
       
      
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
        '<h1 class="text-anime-style-2" data-cursor="-opaque">Contact <span>Us</span></h1>',
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
       contactInfo: [
        {
            text: "You can contact us via email.",
        },
        {
            text: "Call us to elevate your brand and achieve online success.",
        },
        {
            text: "Visit our office for tailored solutions.",
        }
    ],
    contactTitle: "Contact Us",
        contactSubtitle: "Get in <span>Touch</span> Now",
        contactDescription: "Reach out to our team for specialized web solutions designed to enhance your digital presence and provide an exceptional user experience.",
        placeholders: {
            firstName: "First Name",
            lastName: "Last Name",
            phone: "Phone Number",
            email: "Email",
            message: "Write your inquiry here..."
        },
        submit: "Send Message"
     
     
    },
  };
   setTimeout(() => {}, 1000); // Simulate preloader delay
  const loadLanguage = () => {
    const savedLang = localStorage.getItem("selectedLang") || "ar";
   
    updatePageLanguage(savedLang);
    document.getElementById("language-toggle").checked = savedLang === "en";
  };

  const updatePageLanguage = (lang) => {
    const selectedLang = translations[lang];
  
    // Update both desktop and mobile navigation items
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
    
    // Update dropdown items in both desktop and mobile menus
    const serviceDropdownItems = document.querySelectorAll(".nav-menu-wrapper .navbar-nav .submenu ul li a, .slicknav_menu .slicknav_nav .submenu ul li a");
    if (serviceDropdownItems) {
        serviceDropdownItems.forEach((item) => {
            const dataEn = item.getAttribute("data-en");
            if (dataEn) {
                item.textContent = lang === "en" ? dataEn : item.getAttribute("data-ar") || item.textContent;
            }
        });
    }
    
    // Update page header title
    const pageHeaderTitle = document.querySelector(".page-header-box h1");
    if (pageHeaderTitle) {
        pageHeaderTitle.innerHTML = lang === "en" ? 'Contact <span>Us</span>' : 'تواصل <span>معنا</span>';
    }
  
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
    supportLinks[1].textContent = selectedLang.contact;
  
    document.querySelector(".footer-copyright-text p").textContent =
      selectedLang.copyright;

  
    
    document.querySelectorAll(".contact-info-item").forEach((item, index) => {
        item.querySelector(".par-info").textContent = translations[lang].contactInfo[index].text;
    });
    
    document.querySelector(".section-title h3").textContent = translations[lang].contactTitle;
    document.querySelector(".section-title h2").innerHTML = translations[lang].contactSubtitle;
    document.querySelector(".section-title-content p").textContent = translations[lang].contactDescription;
    
    document.getElementById("fname").placeholder = translations[lang].placeholders.firstName;
    document.getElementById("lname").placeholder = translations[lang].placeholders.lastName;
    document.getElementById("phone").placeholder = translations[lang].placeholders.phone;
    document.getElementById("email").placeholder = translations[lang].placeholders.email;
    document.getElementById("message").placeholder = translations[lang].placeholders.message;
    
    document.querySelector(".btn-default span").textContent = translations[lang].submit;


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
  
      updatePageLanguage(lang);
      
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    });
  
  loadLanguage();
  