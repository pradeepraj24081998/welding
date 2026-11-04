export interface TranslationSchema {
  nav: {
    home: string;
    services: string;
    projects: string;
    whyUs: string;
    process: string;
    contact: string;
    callNow: string;
    whatsapp: string;
  };
  hero: {
    badge: string;
    badgeSubtitle: string;
    title1: string;
    titleHighlight: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    feature1: string;
    feature2: string;
    feature3: string;
    directCall: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    getQuote: string;
    callForDetails: string;
    recommended: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    allTab: string;
    authenticBadge: string;
    viewDetails: string;
  };
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    directCallTitle: string;
    primaryPhone: string;
    secondaryPhone: string;
    thirdPhone: string;
    locationTitle: string;
    hoursTitle: string;
    hoursDesc: string;
    whatsappChat: string;
    quickMsgTitle: string;
    formName: string;
    formPhone: string;
    formService: string;
    formMessage: string;
    sendWhatsAppBtn: string;
    callDirectBtn: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    serviceList: string;
    contactInfo: string;
    rights: string;
    locationNote: string;
  };
  floating: {
    whatsappTooltip: string;
    callTooltip: string;
  };
}

export const TRANSLATIONS: Record<"ta" | "en", TranslationSchema> = {
  ta: {
    nav: {
      home: "முகப்பு",
      services: "சேவைகள்",
      projects: "வேலைகள்",
      whyUs: "ஏன் நாங்கள்?",
      process: "செய்முறை",
      contact: "தொடர்பு",
      callNow: "அழைக்க",
      whatsapp: "வாட்ஸ்அப்"
    },
    hero: {
      badge: "துறையூர் | திருச்சிராப்பள்ளி",
      badgeSubtitle: "உயர்தர வெல்டிங் & SS ஃபேப்ரிகேஷன்",
      title1: "துல்லியமான வேலைப்பாடு",
      titleHighlight: "உறுதியான வெல்டிங்",
      title2: "நீடித்த தரம்",
      subtitle:
        "வீடுகள், வணிக வளாகங்கள் மற்றும் தொழிற்சாலைகளுக்கு தேவையான ஸ்டெயின்லெஸ் ஸ்டீல் (SS) ரெயிலிங், கேட், கிரில் மற்றும் ரூஃபிங் ஷெட் வேலைகள் சிறந்த முறையில் செய்து தரப்படும்.",
      ctaPrimary: "வாட்ஸ்அப்பில் விலை கேட்க",
      ctaSecondary: "நேரடி அழைப்பு",
      feature1: "SS 304 / 316 கிரேடு தரமான ஸ்டீல்",
      feature2: "CNC லேசர் கட்டிங் டிசைன்கள்",
      feature3: "நேரடி பட்டறை விலை & உடனடி சர்வீஸ்",
      directCall: "உடனடி தொடர்புக்கு:"
    },
    services: {
      badge: "எங்களின் சேவைகள்",
      title: "பலதரப்பட்ட வெல்டிங் & ஃபேப்ரிகேஷன்",
      subtitle: "உங்களின் தேவைக்கேற்ப அளவெடுத்து, நேர்த்தியாக வடிவமைத்து தருகிறோம்.",
      getQuote: "விலை விசாரிக்க",
      callForDetails: "அழைக்க",
      recommended: "பரிந்துரைக்கப்படும் தரம்"
    },
    projects: {
      badge: "எமது தயாரிப்புகள்",
      title: "நாங்கள் செய்த சிறந்த வேலைப்பாடுகள்",
      subtitle: "எங்கள் பட்டறையில் உருவான மற்றும் வாடிக்கையாளர் இடங்களில் பொருத்தப்பட்ட நிஜமான தயாரிப்புகள்.",
      allTab: "அனைத்தும்",
      authenticBadge: "நேரடி வேலைப்பாடு",
      viewDetails: "விவரம் பார்க்க"
    },
    whyUs: {
      badge: "எங்கள் சிறப்பு",
      title: "ஏன் லோகேஸ்வரன் வெல்டிங்கை தேர்ந்தெடுக்க வேண்டும்?",
      subtitle: "இடைத்தரகர் இன்றி நேரடி பட்டறை விலை மற்றும் நம்பகமான உழைப்பு.",
      items: [
        {
          title: "உயர்தர SS & MS மூலப்பொருட்கள்",
          desc: "துருப்பிடிக்காத SS 304 / 316 கிரேடு ஸ்டீல் மற்றும் உறுதியான தடிமனான MS குழாய்கள் மட்டுமே பயன்படுத்துகிறோம்."
        },
        {
          title: "நேரடி பட்டறை நியாயமான விலை",
          desc: "எந்த இடைத்தரகரும் இன்றி, தரத்திற்கு ஏற்ற மிகச் சரியான, வெளிப்படையான விலை நிர்ணயம்."
        },
        {
          title: "அனுபவம் வாய்ந்த வெல்டர்கள்",
          desc: "TIG, MIG மற்றும் ஆர்க் வெல்டிங்கில் கைதேர்ந்த தொழில்நுட்ப கலைஞர்களால் துல்லியமான பினிஷிங்."
        },
        {
          title: "சரியான நேரத்தில் துரித டெலிவரி",
          desc: "சொன்ன நாளில் அளவீடு செய்து, தயாரித்து, உங்களது இடத்தில் பாதுகாப்பாக பொருத்தித் தருகிறோம்."
        }
      ]
    },
    process: {
      badge: "எளிதான 3 படிகள்",
      title: "எங்களின் வேலை முறை",
      subtitle: "தொடர்பு முதல் பொருத்துதல் வரை மிக எளிமையான வழிமுறை.",
      steps: [
        {
          num: "01",
          title: "நேரடி அளவீடு & ஆலோசனை",
          desc: "உங்கள் இடத்திற்கே வந்து துல்லியமாக அளவெடுத்து சிறந்த மாடல் டிசைன்களை காட்டுகிறோம்."
        },
        {
          num: "02",
          title: "பட்டறையில் தயாரிப்பு",
          desc: "அதிநவீன வெல்டிங் & கட்டிங் கருவிகள் கொண்டு உறுதியாகவும் நேர்த்தியாகவும் உருவாக்குகிறோம்."
        },
        {
          num: "03",
          title: "இடத்தில் பொருத்துதல்",
          desc: "பாதுகாப்பான போல்டிங்/ஆங்கரிங் முறையில் முழு பினிஷிங்குடன் பொருத்தி தருகிறோம்."
        }
      ]
    },
    contact: {
      badge: "தொடர்பு கொள்ள",
      title: "உங்கள் வெல்டிங் தேவைக்கு உடனே அழையுங்கள்",
      subtitle: "இலவச ஆலோசனை மற்றும் சரியான விலை விவரம் அறிய எங்களை தொடர்பு கொள்ளவும்.",
      directCallTitle: "நேரடி அழைப்பு எண்கள்:",
      primaryPhone: "+91 91503 75567 (முதன்மை & வாட்ஸ்அப்)",
      secondaryPhone: "+91 90952 40008 (நேரடி விசாரணை)",
      thirdPhone: "+91 99650 11126 (பட்டறை தொடர்பு)",
      locationTitle: "பட்டறை முகவரி:",
      hoursTitle: "வேலை நேரம்:",
      hoursDesc: "திங்கள் – சனி: காலை 8:30 – இரவு 8:00 | ஞாயிறு: முன்பதிவுபடி",
      whatsappChat: "வாட்ஸ்அப்பில் சாட் செய்ய",
      quickMsgTitle: "விரைவு வாட்ஸ்அப் மெசேஜ் அனுப்புங்கள்",
      formName: "உங்கள் பெயர்",
      formPhone: "மொபைல் எண்",
      formService: "தேவையான சேவை",
      formMessage: "உங்கள் தேவை (அளவு / விவரம்)",
      sendWhatsAppBtn: "வாட்ஸ்அப்பில் அனுப்பவும்",
      callDirectBtn: "உடனே போன் செய்ய"
    },
    footer: {
      tagline: "துறையூர் மற்றும் சுற்றுவட்டார பகுதிகளில் சிறந்த வெல்டிங் மற்றும் ஸ்டெயின்லெஸ் ஸ்டீல் தயாரிப்புகள்.",
      quickLinks: "முக்கிய இணைப்புகள்",
      serviceList: "சேவைகள் பட்டியல்",
      contactInfo: "தொடர்பு விவரம்",
      rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      locationNote: "துறையூர், திருச்சி மாவட்டம், தமிழ்நாடு."
    },
    floating: {
      whatsappTooltip: "வாட்ஸ்அப்பில் பேச",
      callTooltip: "உடனே அழைக்க"
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      whyUs: "Why Us",
      process: "Process",
      contact: "Contact",
      callNow: "Call Now",
      whatsapp: "WhatsApp"
    },
    hero: {
      badge: "THURAIYUR | TIRUCHIRAPPALLI",
      badgeSubtitle: "Premium Welding & SS Fabrication",
      title1: "Precision In",
      titleHighlight: "Every Weld.",
      title2: "Strength In Every Detail.",
      subtitle:
        "High-grade Stainless Steel (SS) railings, custom metal gates, security grills, laser-cut screens, and roofing sheds for residential and commercial spaces.",
      ctaPrimary: "Get Quote on WhatsApp",
      ctaSecondary: "Call Directly",
      feature1: "Grade 304 / 316 Stainless Steel",
      feature2: "CNC Laser-Cut Metal Art",
      feature3: "Direct Workshop Rates & Fast Delivery",
      directCall: "Direct Assistance:"
    },
    services: {
      badge: "OUR SERVICES",
      title: "Comprehensive Welding & Fabrication",
      subtitle: "Custom-built to exact dimensions with uncompromising durability and clean finish.",
      getQuote: "Get Quote",
      callForDetails: "Call",
      recommended: "Recommended Grade"
    },
    projects: {
      badge: "PORTFOLIO",
      title: "Featured Works & Installations",
      subtitle: "Actual fabricated projects and workshop craftsmanship across Thuraiyur & Trichy.",
      allTab: "All Works",
      authenticBadge: "Actual Project",
      viewDetails: "View Details"
    },
    whyUs: {
      badge: "ADVANTAGES",
      title: "Why Choose Logeshwaran Welding?",
      subtitle: "Transparent workshop pricing, master craftsmanship, and long-lasting strength.",
      items: [
        {
          title: "Grade 304 & 316 Stainless Steel",
          desc: "We use only tested, genuine stainless steel and heavy-gauge mild steel pipes for 100% rust safety."
        },
        {
          title: "Direct Workshop Pricing",
          desc: "Fair, transparent pricing with zero middleman commissions or hidden expenses."
        },
        {
          title: "Experienced Master Welders",
          desc: "Expert TIG, MIG, and ARC welding ensuring seamless joints, smooth grinding, and mirror buffing."
        },
        {
          title: "Timely On-Site Installation",
          desc: "Committed delivery timelines with rigid floor-anchoring and hassle-free site setup."
        }
      ]
    },
    process: {
      badge: "HOW WE WORK",
      title: "Simple 3-Step Process",
      subtitle: "From inquiry to precise installation, smooth and straightforward.",
      steps: [
        {
          num: "01",
          title: "Site Measurement & Design",
          desc: "We visit your location, take exact measurements, and recommend the best designs and metal gauges."
        },
        {
          num: "02",
          title: "Precision Workshop Fabrication",
          desc: "Fabricated with precision cutting, welding, anti-rust coating, and high-gloss buffing."
        },
        {
          num: "03",
          title: "Final Site Installation",
          desc: "Delivered and rigidly installed on-site with clean finishing and load-tested stability."
        }
      ]
    },
    contact: {
      badge: "GET IN TOUCH",
      title: "Ready to Discuss Your Project?",
      subtitle: "Call us directly or send a message for instant quotes and site visits.",
      directCallTitle: "Direct Phone Numbers:",
      primaryPhone: "+91 91503 75567 (Primary & WhatsApp)",
      secondaryPhone: "+91 90952 40008 (Direct Inquiry)",
      thirdPhone: "+91 99650 11126 (Workshop Support)",
      locationTitle: "Workshop Location:",
      hoursTitle: "Working Hours:",
      hoursDesc: "Monday – Saturday: 8:30 AM – 8:00 PM | Sunday: On Appointment",
      whatsappChat: "Chat on WhatsApp",
      quickMsgTitle: "Quick WhatsApp Message",
      formName: "Your Name",
      formPhone: "Phone Number",
      formService: "Required Service",
      formMessage: "Message / Project Size",
      sendWhatsAppBtn: "Send via WhatsApp",
      callDirectBtn: "Call Now"
    },
    footer: {
      tagline: "Premier Welding & Stainless Steel Fabrication Workshop serving Thuraiyur, Trichy & surrounding areas.",
      quickLinks: "Quick Links",
      serviceList: "Our Services",
      contactInfo: "Contact Details",
      rights: "All rights reserved.",
      locationNote: "Thuraiyur, Tiruchirappalli District, Tamil Nadu."
    },
    floating: {
      whatsappTooltip: "Chat on WhatsApp",
      callTooltip: "Call Directly"
    }
  }
};

