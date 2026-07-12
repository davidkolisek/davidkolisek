(function () {
  const STORAGE_KEY = "portfolio-lang";

  const translations = {
    en: {
      "meta.title": "Dávid Kolísek | Frontend Developer · Vue.js & React",
      "meta.description":
        "Frontend developer from Slovakia specializing in Vue.js, React, and TypeScript. I build fast, responsive websites and SPAs — from corporate projects to side apps.",
      "nav.about": "About",
      "nav.projects": "Selected Work",
      "nav.products": "Products",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.cta": "Let's Build",
      "nav.available": "Available for work",
      "hero.badge": "Senior Frontend Engineer & Product Builder",
      "hero.title":
        'Engineering digital products with <span class="text-primary italic font-serif">architectural</span> precision.',
      "hero.lead":
        "I translate complex business requirements and ambitious design systems into highly performant, accessible, and polished web applications. Vue.js, React, TypeScript, and a strong focus on performance.",
      "hero.stat1.value": "10+ Yrs",
      "hero.stat1.label": "Professional Craft",
      "hero.stat2.label": "Lighthouse Focused",
      "hero.stat3.label": "Products Launched",
      "hero.cta1": "Explore Selected Work",
      "hero.cta2": "Read Philosophy",
      "hero.portrait.location": "Based in Slovakia",
      "hero.portrait.note": "Collaborating globally with premium teams",
      "about.eyebrow": "Philosophy",
      "about.title": "Beyond writing code.",
      "about.lead":
        "I consider a digital product done when it performs seamlessly under load, provides an equitable experience for everyone, and scales effortlessly for the engineers who inherit it.",
      "about.card1.title": "Design Systems & UX",
      "about.card1.text":
        "I bridge the gap between Figma design systems and production-ready frontend components. Accessibility (WCAG) and micro-interactions are core requirements, not afterthoughts.",
      "about.card2.title": "Performance Engineering",
      "about.card2.text":
        "Lighthouse scores are my benchmark. I build lightweight, responsive, and search-optimized applications that load quickly on any connection.",
      "about.card3.title": "Collaborative Scrum",
      "about.card3.text":
        "Extensive experience in agile, cross-functional Scrum teams, as well as direct-to-client advisory roles. I communicate transparently and deliver on time.",
      "about.card4.title": "Production Quality",
      "about.card4.text":
        "Clean, maintainable codebases utilizing Vue, Nuxt, React, and TypeScript. Robust tests and seamless developer handovers.",
      "projects.eyebrow": "Selected Work",
      "projects.title": "Enterprise Collaborations",
      "projects.lead":
        "Over the years, I have collaborated on mission-critical applications and high-traffic platforms for industry-leading financial and insurance institutions.",
      "projects.linkedin": "View corporate history on LinkedIn",
      "projects.client1.text":
        "Leading digital innovator in banking. Contributed to premium client-facing interfaces.",
      "projects.client1.tag": "Frontend Architecture",
      "projects.client2.text":
        "Major European insurance group. Built highly accessible and responsive calculator flows.",
      "projects.client2.tag": "UI Development",
      "projects.client3.text":
        "Customer-first personal banking portals focusing on speed and accessibility.",
      "projects.client3.tag": "Component Systems",
      "projects.client4.text":
        "Slovakia's largest health insurance provider. Developed robust portal solutions.",
      "projects.client4.tag": "Web Applications",
      "products.eyebrow": "Product Engineering",
      "products.title": "Things I'm Building",
      "products.lead":
        "I don't just write code for clients. I design, launch, and maintain independent products that solve real problems for developers and users globally.",
      "stack.eyebrow": "Capabilities",
      "stack.title": "The Technical Stack",
      "stack.lead":
        "I select the optimal tool for each problem. My core focus is high-performance, type-safe, and scalable frontend architectures.",
      "faq.eyebrow": "Clarifications",
      "faq.title": "Frequently Asked Questions",
      "faq.lead":
        "Transparent answers about my professional background, workflow, and how we can collaborate effectively.",
      "faq.q1": "How long have you been involved in programming?",
      "faq.a1":
        "I have over 10 years of programming experience, including more than 10 years of professional web development.",
      "faq.q2": "What is your core technology stack?",
      "faq.a2":
        "My primary stack centers on Vue.js, Nuxt, and TypeScript. I have solid experience with React, can build bespoke WordPress templates when required, and leverage Firebase for lightweight backend integration.",
      "faq.q3": "Are you a front-end developer?",
      "faq.a3":
        "While I'm skilled in frontend development, I primarily identify as a web developer who turns design concepts into production-ready templates and components. I enjoy preparing UI, wiring up logic, and collaborating on backend integration when the project needs it.",
      "faq.q4": "Is your pricing fixed?",
      "faq.a4":
        "No, pricing can be flexible, and I'm open to finding a compromise that works for both parties. Keep in mind that pricing reflects the hours invested in development and ongoing learning.",
      "faq.q5": "Do you provide graphic design services or web template design?",
      "faq.a5":
        "I primarily focus on development and coding, rather than graphic design. While I have foundational skills to create websites, I prefer to work with existing design concepts and take inspiration from platforms like Dribbble.",
      "faq.q6": "Can you assist with frontend bug fixes on existing websites?",
      "faq.a6":
        "Yes, I can help with frontend bug fixes. Feel free to leave a message detailing the issue, and I'll be happy to assist.",
      "contact.eyebrow": "Get in Touch",
      "contact.title":
        'Let\'s build something <span class="italic font-serif text-primary">exceptional</span> together.',
      "contact.lead":
        "Whether you need a senior frontend engineer to elevate your product team or expert guidance on design system implementation, let's connect.",
      "contact.email": "kolisek.david@gmail.com",
      "contact.linkedin": "Connect on LinkedIn",
      "contact.github": "GitHub",
      "contact.npm": "NPM Profile",
      "contact.jaspravim": "JaSpravím",
      "footer.rights": "All rights reserved.",
      "footer.tagline": "Designed & engineered with architectural precision.",
    },
    sk: {
      "meta.title": "Dávid Kolísek | Frontend Developer · Vue.js & React",
      "meta.description":
        "Frontend developer zo Slovenska so zameraním na Vue.js, React a TypeScript. Tvorím rýchle, responzívne weby a SPA — od firemných projektov po vlastné produkty.",
      "nav.about": "O mne",
      "nav.projects": "Vybrané projekty",
      "nav.products": "Produkty",
      "nav.faq": "FAQ",
      "nav.contact": "Kontakt",
      "nav.cta": "Poďme stavať",
      "nav.available": "Dostupný na spoluprácu",
      "hero.badge": "Senior Frontend Engineer & Product Builder",
      "hero.title":
        'Digitálne produkty s <span class="text-primary italic font-serif">architektonickou</span> presnosťou.',
      "hero.lead":
        "Zložité business požiadavky a ambiciózne design systémy premieňam na výkonné, prístupné a precízne webové aplikácie. Vue.js, React, TypeScript a silný dôraz na performance.",
      "hero.stat1.value": "10+ rokov",
      "hero.stat1.label": "Profesionálna prax",
      "hero.stat2.label": "Lighthouse first",
      "hero.stat3.label": "Spustených produktov",
      "hero.cta1": "Pozrieť projekty",
      "hero.cta2": "Filozofia práce",
      "hero.portrait.location": "So sídlom na Slovensku",
      "hero.portrait.note": "Spolupracujem globálne s prémiovými tímami",
      "about.eyebrow": "Filozofia",
      "about.title": "Nielen písanie kódu.",
      "about.lead":
        "Projekt považujem za hotový, keď funguje spoľahlivo pod záťažou, poskytuje férový zážitok pre všetkých a dá sa ľahko udržiavať pre ďalších vývojárov.",
      "about.card1.title": "Design systémy & UX",
      "about.card1.text":
        "Prepájam Figma design systémy s produkčnými frontend komponentmi. Prístupnosť (WCAG) a micro-interakcie beriem ako základ, nie dodatočný luxus.",
      "about.card2.title": "Performance engineering",
      "about.card2.text":
        "Lighthouse skóre je môj benchmark. Staviam ľahké, responzívne a SEO optimalizované aplikácie, ktoré sa načítajú rýchlo aj na pomalšom pripojení.",
      "about.card3.title": "Scrum & spolupráca",
      "about.card3.text":
        "Skúsenosti v agile, cross-funkčných Scrum tímoch aj v priamej komunikácii s klientom. Transparentne komunikujem a dodávam včas.",
      "about.card4.title": "Produkčná kvalita",
      "about.card4.text":
        "Čisté, udržiavateľné codebase vo Vue, Nuxt, React a TypeScript. Dôraz na testy a hladké odovzdanie projektu.",
      "projects.eyebrow": "Vybrané projekty",
      "projects.title": "Firemná spolupráca",
      "projects.lead":
        "Roky spolupracujem na kritických aplikáciách a vysokonávštevných platformách pre popredné finančné a poisťovacie inštitúcie.",
      "projects.linkedin": "Firemné projekty na LinkedIn",
      "projects.client1.text":
        "Popredná digitálna inovácia v bankovníctve. Príspevok k prémiovým klientskym rozhraniam.",
      "projects.client1.tag": "Frontend architektúra",
      "projects.client2.text":
        "Veľká európska poisťovňa. Vysoko prístupné a responzívne kalkulačky.",
      "projects.client2.tag": "UI development",
      "projects.client3.text":
        "Klientske bankové portály zamerané na rýchlosť a prístupnosť.",
      "projects.client3.tag": "Komponentové systémy",
      "projects.client4.text":
        "Najväčší zdravotný poisťovateľ na Slovensku. Robustné portálové riešenia.",
      "projects.client4.tag": "Webové aplikácie",
      "products.eyebrow": "Product engineering",
      "products.title": "Produkty, ktoré budujem",
      "products.lead":
        "Nepíšem kód len pre klientov. Navrhujem, spúšťam a udržiavam vlastné produkty, ktoré riešia reálne problémy vývojárov aj používateľov.",
      "stack.eyebrow": "Schopnosti",
      "stack.title": "Technický stack",
      "stack.lead":
        "Pre každý problém volím optimálny nástroj. Jadro mojej práce je výkonná, type-safe a škálovateľná frontend architektúra.",
      "faq.eyebrow": "Otázky",
      "faq.title": "Často kladené otázky",
      "faq.lead":
        "Transparentné odpovede o mojom zázemí, pracovnom procese a spolupráci.",
      "faq.q1": "Ako dlho sa venuješ programovaniu?",
      "faq.a1":
        "Mám viac ako 10 rokov skúseností s programovaním, vrátane viac ako 10 rokov profesionálnej webovej praxe.",
      "faq.q2": "Aký je tvoj hlavný technologický stack?",
      "faq.a2":
        "Jadro tvorí Vue.js, Nuxt a TypeScript. Mám solídne skúsenosti s Reactom, viem pripraviť WordPress šablóny a využívam Firebase pre ľahkú backend integráciu.",
      "faq.q3": "Si front-end developer?",
      "faq.a3":
        "Frontend ovládam dobre, no skôr sa vnímam ako web developer, ktorý mení dizajn na produkčné šablóny a komponenty. Rád pripravím UI, logiku aj spoluprácu na backend integrácii.",
      "faq.q4": "Je tvoja cena fixná?",
      "faq.a4":
        "Nie, cena môže byť flexibilná a vieme nájsť kompromis. Cena odráža odpracované hodiny aj neustále vzdelávanie.",
      "faq.q5": "Poskytuješ grafický dizajn alebo návrh web šablón?",
      "faq.a5":
        "Zameriavam sa primárne na development. Základy dizajnu mám, no radšej pracujem s existujúcimi konceptmi a inšpiráciou z platforiem ako Dribbble.",
      "faq.q6": "Vieš pomôcť s opravou frontend chýb na existujúcich weboch?",
      "faq.a6":
        "Áno, pomôžem s frontend bugfixmi. Napíš mi popis problému a rád sa pozriem na riešenie.",
      "contact.eyebrow": "Kontakt",
      "contact.title":
        'Poďme spolu postaviť niečo <span class="italic font-serif text-primary">výnimočné</span>.',
      "contact.lead":
        "Či hľadáš senior frontend engineera do tímu, alebo odbornú pomoc s design systémom — ozvi sa.",
      "contact.email": "kolisek.david@gmail.com",
      "contact.linkedin": "LinkedIn",
      "contact.github": "GitHub",
      "contact.npm": "NPM profil",
      "contact.jaspravim": "JaSpravím",
      "footer.rights": "Všetky práva vyhradené.",
      "footer.tagline": "Navrhnuté a postavené s architektonickou presnosťou.",
    },
  };

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && translations[stored]) return stored;
    const browser = (navigator.language || "en").slice(0, 2);
    return translations[browser] ? browser : "en";
  }

  function applyLang(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    const title = dict["meta.title"];
    const desc = dict["meta.description"];
    if (title) document.title = title;
    if (desc) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
      document.querySelector('meta[property="og:description"]')?.setAttribute("content", desc);
      document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", desc);
    }

    const select = document.getElementById("lang-select");
    if (select) select.value = lang;

    localStorage.setItem(STORAGE_KEY, lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    applyLang(lang);

    const select = document.getElementById("lang-select");
    if (select) {
      select.addEventListener("change", (e) => applyLang(e.target.value));
    }

    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  });

  window.portfolioI18n = { applyLang, getLang };
})();
