const translationsFoter = {
    en: {
        newsletterTitle: "<h2> Let's Achieve Excellence in <span> Your Website</span></h2>",
        newsletterPlaceholder: "Enter Your Email",
        quickLinks: "Quick Links",
        home: "Home",
        about: "About Us",
        services: "Services",
        portfolio: "Our Work",
        ourServices: "Our Services",
        webDevelopment: "Web Design & Development",
        ecommerce: "E-commerce Creation",
        seo: "SEO Optimization",
        support: "Technical Support",
        supportTitle: "Support",
        help: "Help",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        contact: "Contact",
        copyright: "Copyright © 2025 All Rights Reserved.",
    },
    ar: {
        newsletterTitle: "<h2> دعونا نحقق التميز في موقعك<span> الأكتروني</span></h2>",
        newsletterPlaceholder: "أدخل بريدك الإلكتروني",
        quickLinks: "روابط سريعة",
        home: "الرئيسية",
        about: "عن الشركة",
        services: "خدماتنا",
        portfolio: "أعمالنا",
        ourServices: "خدماتنا",
        webDevelopment: "تصميم وتطوير المواقع",
        ecommerce: "إنشاء المتاجر الإلكترونية",
        seo: "تحسين محركات البحث",
        support: "خدمات الدعم الفني",
        supportTitle: "الدعم",
        help: "مساعدة",
        privacy: "سياسة الخصوصية",
        terms: "الشروط والأحكام",
        contact: "اتصال",
        copyright: "حقوق الطبع والنشر © 2025 جميع الحقوق محفوظة.",

    }
};
const loadLanguages = () => {
    const savedLang = localStorage.getItem("selectedLang") || "ar";
    updatePageLanguages(savedLang);
    document.getElementById("language-toggle").checked = savedLang === "en";
};
function updatePageLanguages(lang) {
    const newsletterTitle = document.querySelector(".footer-newsletter-title h2");
    if (newsletterTitle) {
        newsletterTitle.innerHTML = translationsFoter[lang].newsletterTitle;
    }
    
    const mailInput = document.querySelector("#mail");
    if (mailInput) {
        mailInput.placeholder = translationsFoter[lang].newsletterPlaceholder;
    }
    
    let links = document.querySelectorAll(".footer-links h3");
    if (links && links.length >= 3) {
        links[0].textContent = translationsFoter[lang].quickLinks;
        links[1].textContent = translationsFoter[lang].ourServices;
        links[2].textContent = translationsFoter[lang].supportTitle;
    }
    
    let quickLinks = document.querySelectorAll(".footer-links.two ul li a");
    if (quickLinks && quickLinks.length >= 4) {
        quickLinks[0].textContent = translationsFoter[lang].home;
        quickLinks[1].textContent = translationsFoter[lang].about;
        quickLinks[2].textContent = translationsFoter[lang].services;
        quickLinks[3].textContent = translationsFoter[lang].portfolio;
    }
    
    let servicesLinks = document.querySelectorAll(".footer-links.three ul li a");
    if (servicesLinks && servicesLinks.length >= 4) {
        servicesLinks[0].textContent = translationsFoter[lang].webDevelopment;
        servicesLinks[1].textContent = translationsFoter[lang].ecommerce;
        servicesLinks[2].textContent = translationsFoter[lang].seo;
        servicesLinks[3].textContent = translationsFoter[lang].support;
    }
    
    let supportLinks = document.querySelectorAll(".footer-links.four ul li a");
    if (supportLinks && supportLinks.length >= 4) {
        supportLinks[0].textContent = translationsFoter[lang].help;
        supportLinks[1].textContent = translationsFoter[lang].privacy;
        supportLinks[2].textContent = translationsFoter[lang].terms;
        supportLinks[3].textContent = translationsFoter[lang].contact;
    }
    
    const copyrightText = document.querySelector(".footer-copyright-text p");
    if (copyrightText) {
        copyrightText.textContent = translationsFoter[lang].copyright;
    }
    
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "en" ? "ltr" : "rtl");

    const switchOn = document.querySelector(".switch .on");
    const switchOff = document.querySelector(".switch .off");
    if (switchOn) switchOn.textContent = lang === "ar" ? "ar" : "ar";
    if (switchOff) switchOff.textContent = lang === "ar" ? "en" : "en";
}

document.getElementById("language-toggle").addEventListener("change", function () {
    const lang = this.checked ? "en" : "ar";
    localStorage.setItem("selectedLang", lang);

    // تحديث اللغة فوراً
    updatePageLanguages(lang);

    const preloader = document.querySelector(".preloader");

    // تشغيل اللودر في المنتصف
    preloader.style.display = "flex";
    preloader.style.alignItems = "center";
    preloader.style.justifyContent = "center";

    // إخفاء اللودر بعد فترة قصيرة للتأثير البصري
    setTimeout(() => {
        preloader.style.display = "none";
    }, 500);
});

loadLanguages();
