export const locales = ["en", "fr", "rw"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

const messages = {
  en: {
    brandLine: "KODEX — TECHNOLOGY & INNOVATION",
    nav: {
      aria: "Main navigation",
      services: "Services",
      work: "Work",
      innovation: "Innovation",
      about: "About",
      contact: "Contact",
    },
    footer: {
      copyright: "© 2026 KODEX. All rights reserved.",
    },
    home: {
      eyebrow: "Independent technology partner",
      headingFirst: "Technology that moves",
      headingSecond: "business forward.",
      description:
        "Digital products, software, and intelligent systems for ambitious businesses.",
      explore: "Explore our work",
      start: "Start a project",
      servicesEyebrow: "What we do",
      servicesHeading: "Built for what's next.",
      services: [
        ["Intelligent systems", "AI and automation built around your business."],
        ["Software engineering", "Digital products and platforms, made to scale."],
        ["Product design", "Thoughtful experiences that make complexity feel simple."],
      ],
      workEyebrow: "Selected work",
      workHeading: "Made to matter.",
      projects: [
        ["The Eternal Arc", "Digital experience"],
        ["Business Stock Tracker", "Business software"],
      ],
    },
    about: {
      title: "About KODEX",
      description:
        "KODEX is a digital technology company based in Rwanda, combining digital agency services with technology and innovation to build credible solutions for the modern world.",
      direction: "01 / Direction",
      vision: "Our Vision",
      visionText:
        "To become a leading technology company in Africa, known for building thoughtful, premium digital experiences.",
      principles: "02 / Principles",
      approach: "Our Approach",
      approachText:
        "We believe in quality over speed, restraint over clutter, and real solutions over empty promises. Every project is built with care, precision, and a focus on the people using it.",
    },
    services: {
      title: "Our Services",
      description:
        "We design and build digital experiences, software, and intelligent systems that help businesses solve problems and grow.",
      items: [
        "Website development",
        "Web application development",
        "Mobile application development",
        "Custom software and business systems",
        "UI/UX design",
        "Branding and digital design",
        "AI integrations and automation",
        "Chatbots and intelligent systems",
        "APIs and database solutions",
        "Cloud and hosting solutions",
        "E-commerce",
        "IoT and smart systems",
        "Data solutions",
        "Emerging technology",
      ],
    },
    work: {
      eyebrow: "Selected projects",
      title: "Our Work",
      description:
        "A selection of digital experiences and systems designed to move businesses forward.",
      project: "Project",
      technologies: "Technologies used",
      projects: [
        "An interactive 3D web experience built for KODEX's premium brand identity.",
        "A web application for local businesses to track inventory and sales.",
      ],
    },
    innovation: {
      title: "Innovation Lab",
      description:
        "Experiments, prototypes, and future technologies we are exploring at KODEX.",
      experiment: "EXPERIMENT",
      items: ["AI Agent Prototypes", "3D Web Experiences", "IoT Smart Systems"],
    },
    contact: {
      eyebrow: "Let's work together",
      title: "Start a Project",
      description: "Tell us about your idea. We'll get back to you within 24 hours.",
      name: "Name",
      yourName: "Your name",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Tell us a little about your project...",
      sending: "Sending...",
      send: "Send Message",
      success: "Success! Your message has been sent.",
      error: "We couldn’t send your message. Please try again.",
    },
  },
  fr: {
    brandLine: "KODEX — TECHNOLOGIE & INNOVATION",
    nav: {
      aria: "Navigation principale",
      services: "Services",
      work: "Réalisations",
      innovation: "Innovation",
      about: "À propos",
      contact: "Contact",
    },
    footer: {
      copyright: "© 2026 KODEX. Tous droits réservés.",
    },
    home: {
      eyebrow: "Partenaire technologique indépendant",
      headingFirst: "La technologie qui fait",
      headingSecond: "avancer les entreprises.",
      description:
        "Des produits numériques, des logiciels et des systèmes intelligents pour les entreprises ambitieuses.",
      explore: "Voir nos réalisations",
      start: "Lancer un projet",
      servicesEyebrow: "Nos activités",
      servicesHeading: "Prêts pour demain.",
      services: [
        ["Systèmes intelligents", "L’IA et l’automatisation au service de votre activité."],
        ["Ingénierie logicielle", "Des produits et plateformes numériques conçus pour évoluer."],
        ["Conception produit", "Des expériences réfléchies qui simplifient la complexité."],
      ],
      workEyebrow: "Projets sélectionnés",
      workHeading: "Des projets qui comptent.",
      projects: [
        ["The Eternal Arc", "Expérience numérique"],
        ["Business Stock Tracker", "Logiciel de gestion"],
      ],
    },
    about: {
      title: "À propos de KODEX",
      description:
        "KODEX est une entreprise technologique basée au Rwanda. Nous associons les services d’une agence numérique à la technologie et à l’innovation pour créer des solutions fiables adaptées au monde actuel.",
      direction: "01 / Direction",
      vision: "Notre vision",
      visionText:
        "Devenir une entreprise technologique de référence en Afrique, reconnue pour ses expériences numériques soignées et haut de gamme.",
      principles: "02 / Principes",
      approach: "Notre approche",
      approachText:
        "Nous privilégions la qualité à la vitesse, la simplicité à l’encombrement et les solutions concrètes aux promesses creuses. Chaque projet est réalisé avec soin, précision et attention aux personnes qui l’utilisent.",
    },
    services: {
      title: "Nos services",
      description:
        "Nous concevons et développons des expériences numériques, des logiciels et des systèmes intelligents qui aident les entreprises à résoudre leurs problèmes et à se développer.",
      items: [
        "Création de sites web",
        "Développement d’applications web",
        "Développement d’applications mobiles",
        "Logiciels et systèmes de gestion sur mesure",
        "Conception UI/UX",
        "Identité de marque et design numérique",
        "Intégrations IA et automatisation",
        "Chatbots et systèmes intelligents",
        "API et solutions de bases de données",
        "Solutions cloud et hébergement",
        "Commerce en ligne",
        "IoT et systèmes connectés",
        "Solutions de données",
        "Technologies émergentes",
      ],
    },
    work: {
      eyebrow: "Projets sélectionnés",
      title: "Nos réalisations",
      description:
        "Une sélection d’expériences numériques et de systèmes conçus pour faire avancer les entreprises.",
      project: "Projet",
      technologies: "Technologies utilisées",
      projects: [
        "Une expérience web 3D interactive créée pour l’identité de marque haut de gamme de KODEX.",
        "Une application web permettant aux entreprises locales de suivre leurs stocks et leurs ventes.",
      ],
    },
    innovation: {
      title: "Laboratoire d’innovation",
      description:
        "Les expériences, prototypes et technologies d’avenir explorés par KODEX.",
      experiment: "EXPÉRIENCE",
      items: ["Prototypes d’agents IA", "Expériences web 3D", "Systèmes IoT intelligents"],
    },
    contact: {
      eyebrow: "Travaillons ensemble",
      title: "Lancer un projet",
      description:
        "Parlez-nous de votre idée. Nous vous répondrons sous 24 heures.",
      name: "Nom",
      yourName: "Votre nom",
      email: "E-mail",
      message: "Message",
      messagePlaceholder: "Parlez-nous un peu de votre projet…",
      sending: "Envoi en cours…",
      send: "Envoyer le message",
      success: "Votre message a bien été envoyé.",
      error: "Envoi impossible. Veuillez réessayer.",
    },
  },
  rw: {
    brandLine: "KODEX — IKORANABUHANGA N’UDUSHYA",
    nav: {
      aria: "Ibikubiye muri menu",
      services: "Serivisi",
      work: "Imirimo",
      innovation: "Udushya",
      about: "Turi bande",
      contact: "Twandikire",
    },
    footer: {
      copyright: "© 2026 KODEX. Uburenganzira bwose burarinzwe.",
    },
    home: {
      eyebrow: "Umufatanyabikorwa wigenga mu ikoranabuhanga",
      headingFirst: "Ikoranabuhanga riteza",
      headingSecond: "ubucuruzi imbere.",
      description:
        "Dukora ibikoresho bya mudasobwa, porogaramu na sisitemu z’ubwenge bifasha ubucuruzi bwifuza gutera imbere.",
      explore: "Reba imirimo yacu",
      start: "Tangira umushinga",
      servicesEyebrow: "Ibyo dukora",
      servicesHeading: "Dutegura ejo hazaza.",
      services: [
        ["Sisitemu z’ubwenge", "Ubwenge buhangano n’ikoranabuhanga bikora imirimo mu buryo bwikora ku bucuruzi bwawe."],
        ["Gukora porogaramu", "Ibikoresho na sisitemu by’ikoranabuhanga bikura uko ubucuruzi bwawe butera imbere."],
        ["Igishushanyo mbonera", "Uburambe bworoshye gukoresha, bugabanya ibintu bigoye."],
      ],
      workEyebrow: "Imirimo twahisemo",
      workHeading: "Imirimo ifite akamaro.",
      projects: [
        ["The Eternal Arc", "Uburambe bw’ikoranabuhanga"],
        ["Business Stock Tracker", "Porogaramu y’ubucuruzi"],
      ],
    },
    about: {
      title: "KODEX ni iki?",
      description:
        "KODEX ni ikigo cy’ikoranabuhanga gikorera mu Rwanda. Duhuza serivisi zo gukora ibikoresho by’ikoranabuhanga n’udushya, tugakora ibisubizo byizewe bijyanye n’isi ya none.",
      direction: "01 / Icyerekezo",
      vision: "Icyerekezo cyacu",
      visionText:
        "Kuba ikigo cy’ikoranabuhanga gikomeye muri Afurika, kizwiho gukora ibikoresho by’ikoranabuhanga byiza kandi bitekerejweho.",
      principles: "02 / Amahame",
      approach: "Uburyo dukoramo",
      approachText:
        "Twemera ko ubuziranenge buruta umuvuduko, ko ibintu byoroheje biruta akajagari, kandi ko ibisubizo bifatika biruta amasezerano adafite ishingiro. Buri mushinga tuwukora twitaye ku bawukoresha.",
    },
    services: {
      title: "Serivisi zacu",
      description:
        "Dushushanya kandi tugakora ibikoresho by’ikoranabuhanga, porogaramu na sisitemu z’ubwenge bifasha ubucuruzi gukemura ibibazo no gutera imbere.",
      items: [
        "Gukora imbuga za internet",
        "Gukora porogaramu zo kuri internet",
        "Gukora porogaramu za telefone",
        "Porogaramu na sisitemu by’ubucuruzi byihariye",
        "Igishushanyo cya UI/UX",
        "Kwamamaza ikirango n’ibishushanyo bya digital",
        "Gushyiramo AI no gukora imirimo mu buryo bwikora",
        "Chatbots na sisitemu z’ubwenge",
        "API na sisitemu zibika amakuru",
        "Cloud no kwakira imbuga",
        "Ubucuruzi bwo kuri internet",
        "IoT na sisitemu z’ibikoresho bihujwe",
        "Ibisubizo by’amakuru",
        "Ikoranabuhanga rishya",
      ],
    },
    work: {
      eyebrow: "Imishinga twahisemo",
      title: "Imirimo yacu",
      description:
        "Dore bimwe mu bikoresho n’amasisitemu twakoze bifasha ubucuruzi gutera imbere.",
      project: "Umushinga",
      technologies: "Ikoranabuhanga ryakoreshejwe",
      projects: [
        "Uburambe bwa 3D kuri internet bwakozwe bujyanye n’ikirango cyihariye cya KODEX.",
        "Porogaramu ifasha ubucuruzi bwo mu gace gukurikirana ibicuruzwa n’ibyagurishijwe.",
      ],
    },
    innovation: {
      title: "Ahakorera udushya",
      description:
        "Igerageza, prototypes n’ikoranabuhanga ry’ejo hazaza KODEX iri gushakisha.",
      experiment: "IGERAGEZA",
      items: ["Igerageza rya AI Agent", "Uburambe bwa 3D kuri internet", "Sisitemu z’ubwenge za IoT"],
    },
    contact: {
      eyebrow: "Dukorane",
      title: "Tangira umushinga",
      description:
        "Tubwire igitekerezo cyawe. Turagusubiza mu gihe kitarenze amasaha 24.",
      name: "Amazina",
      yourName: "Andika amazina yawe",
      email: "Imeyili",
      message: "Ubutumwa",
      messagePlaceholder: "Tubwire muri make ibijyanye n’umushinga wawe...",
      sending: "Birimo koherezwa...",
      send: "Ohereza ubutumwa",
      success: "Ubutumwa bwawe bwoherejwe neza.",
      error: "Ubutumwa ntibwoherejwe. Ongera ugerageze.",
    },
  },
} as const;

export function getMessages(locale: Locale) {
  return messages[locale];
}

export function getLocaleFromPath(pathname: string): Locale {
  const firstPathSegment = pathname.split("/")[1];
  return firstPathSegment && isLocale(firstPathSegment) ? firstPathSegment : "en";
}
