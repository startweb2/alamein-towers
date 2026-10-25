(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  /* ------------------------------------------------------------------------ */
  /* BILINGUAL TRANSLATION DICTIONARY (EN / AR)                               */
  /* ------------------------------------------------------------------------ */
  const translations = {
    en: {
      brand_title: "ALAMEIN",
      brand_sub: "TOWERS",
      brand_ar: "أبراج العلمين",
      nav_home: "Home",
      nav_about: "About",
      nav_residences: "Residences",
      nav_amenities: "Amenities",
      nav_floorplans: "Floor Plans",
      nav_gallery: "Gallery",
      nav_location: "Location",
      nav_contact: "Contact",
      btn_book_tour: "Book a Tour",
      scroll_cue: "SCROLL TO DISCOVER",

      // Chapter 1
      c1_eyebrow: "EXCLUSIVE SEAFRONT LIVING",
      c1_title_l1: "A New Standard",
      c1_title_l2_pre: "of Coastal",
      c1_title_l2_gold: "Luxury",
      c1_desc: "Experience exclusive seafront living in New Alamein, where panoramic sea views, architectural elegance, and premium residences come together in perfect harmony.",
      btn_explore: "Explore Residences",
      btn_view_floorplans: "View Floor Plans",
      c1_h1_title: "New Alamein, Egypt",
      c1_h1_sub: "PRIME LOCATION",
      c1_h2_title: "Panoramic Sea Views",
      c1_h2_sub: "BREATHTAKING HORIZONS",
      c1_h3_title: "Luxury Waterfront Living",
      c1_h3_sub: "A REFINED LIFESTYLE",

      // Chapter 2
      c2_eyebrow: "A LIFE BY THE MEDITERRANEAN",
      c2_title_l1: "Your Home",
      c2_title_l2: "Closer to the Sea",
      c2_desc: "Step inside a world of elegance, where modern design meets breathtaking sea views. Discover thoughtfully designed living spaces, refined interiors, and a coastal lifestyle inspired by the beauty of New Alamein.",
      btn_watch_experience: "Watch The Experience",
      c2_f1_l1: "Panoramic",
      c2_f1_l2: "Sea Views",
      c2_f2_l1: "Luxury",
      c2_f2_l2: "Interiors",
      c2_f3_l1: "Coastal",
      c2_f3_l2: "Lifestyle",

      // Chapter 3
      c3_eyebrow: "RESIDENCES",
      c3_title_l1: "Designed for",
      c3_title_l2: "a Higher Standard",
      c3_desc: "A collection of premium apartments with modern layouts, expansive terraces, and stunning sea views, crafted to match your lifestyle.",
      c3_s1_val: "1-4 Bedrooms",
      c3_s1_sub: "Flexible Spaces",
      c3_s2_val: "Spacious Layouts",
      c3_s2_sub: "Open Flow Concept",
      c3_s3_val: "Private Terraces",
      c3_s3_sub: "Direct Sea View",
      c3_s4_val: "Premium Finishes",
      c3_s4_sub: "Italian Marble & Glass",
      thumb_living: "Living",
      thumb_terrace: "Terrace",
      thumb_suite: "Suite",
      thumb_panorama: "Panorama",

      // Chapter 4
      c4_eyebrow: "WORLD-CLASS AMENITIES",
      c4_title_l1: "A Complete",
      c4_title_l2_pre: "Coastal",
      c4_title_l2_gold: "Lifestyle",
      c4_desc: "Enjoy a wide range of amenities designed for your comfort, wellness, and entertainment.",
      btn_discover_amenities: "Discover Amenities",
      am_pools: "Infinity Pools",
      am_pools_sub: "Temperature Controlled",
      am_beach: "Private Beach Access",
      am_beach_sub: "1.2 km Crystal Coast",
      am_wellness: "Fitness & Wellness",
      am_wellness_sub: "Spa & Luxury Gym",
      am_dining: "Fine Dining",
      am_dining_sub: "Signature Waterfront",
      am_retail: "Retail & Leisure",
      am_retail_sub: "Designer Boutiques",
      am_parks: "Green Spaces",
      am_parks_sub: "Botanical Gardens",

      // Floor Plans Section
      fp_eyebrow: "FLOOR PLANS",
      fp_title_l1: "Smart Layouts",
      fp_title_l2: "Exceptional Views",
      fp_desc: "Choose from a variety of floor plans designed to maximize space, light, and sea views, crafted for a modern and sophisticated lifestyle.",
      btn_view_all_plans: "View All Floor Plans",
      fp_f_living: "Spacious Living Area",
      fp_f_sea: "Panoramic Sea Views",
      fp_f_design: "Modern Design",
      fp_tab_1bed: "1 Bedroom",
      fp_tab_2bed: "2 Bedrooms",
      fp_tab_3bed: "3 Bedrooms",
      fp_tab_4bed: "4 Bedrooms",
      specs_total_area: "Total Area",
      room_living: "Living Room",
      room_bedroom: "Bedroom",
      room_kitchen: "Kitchen",
      room_bathroom: "Bathroom",
      room_balcony: "Balcony View",

      // Gallery
      gal_eyebrow: "GALLERY",
      gal_title_l1: "A Glimpse",
      gal_title_l2: "of the Experience",
      gal_desc: "Explore stunning views, elegant interiors, and the vibrant lifestyle at Alamein Towers.",
      gal_filter_all: "All Views",
      gal_filter_ext: "Exterior",
      gal_filter_int: "Interiors",
      gal_filter_views: "Sea Horizons",
      gal_c1: "Tower Architecture at Sunset",
      gal_c2: "Seafront Living Room",
      gal_c3: "Master Penthouse Suite",
      gal_c4: "Sunset Resort Lagoon",
      gal_tag_ext: "Exterior",
      gal_tag_int: "Interior",
      gal_tag_view: "Sea View",

      // Location
      loc_eyebrow: "LOCATION",
      loc_title_l1: "In the Heart of",
      loc_title_l2: "New Alamein",
      loc_desc: "A prime location on the Mediterranean North Coast. Click any destination card below to highlight transit time and connection routes.",
      loc_zone: "Zone A - Direct Beachfront",
      loc_c1_title: "Direct Beachfront Location",
      loc_c1_dist: "0 min walk (Direct Access)",
      loc_c2_title: "Alamein Marina & Promenade",
      loc_c2_dist: "5 mins drive",
      loc_c3_title: "Alamein International Airport",
      loc_c3_dist: "15 mins drive",
      loc_c4_title: "Easy Access from Cairo",
      loc_c4_dist: "2 hours via Dabaa Corridor",

      // New Luxury Footer (Exact Match to Design Reference)
      fn_eyebrow: "STAY CONNECTED",
      fn_title_l1: "Exceptional homes,",
      fn_title_l2: "extraordinary living.",
      fn_desc: "Be the first to receive exclusive property updates, luxury insights and off-market opportunities in New Alamein.",
      btn_subscribe: "Subscribe",
      fn_privacy: "We respect your privacy.",
      ph_newsletter_email: "Enter your email",
      newsletter_success: "✓ Thank you for subscribing. You're on the exclusive VIP list.",
      footer_brand_desc: "Redefining coastal living through iconic architecture, world-class amenities and an unparalleled Mediterranean lifestyle in New Alamein.",
      f_col_explore: "EXPLORE",
      f_col_about: "ABOUT",
      f_col_resources: "RESOURCES",
      f_col_contact: "CONTACT",
      f_link_residences: "Residences",
      f_link_floorplans: "Floor Plans",
      f_link_amenities: "Amenities",
      f_link_location: "Location",
      f_link_gallery: "Gallery",
      f_link_updates: "Latest Updates",
      f_link_story: "Our Story",
      f_link_masterplan: "Master Plan",
      f_link_sustainability: "Sustainability",
      f_link_team: "Our Team",
      f_link_careers: "Careers",
      f_link_press: "Press & Media",
      f_link_brochures: "Brochures",
      f_link_payments: "Payment Plans",
      f_link_guide: "Buying Guide",
      f_link_investor: "Investor Information",
      f_link_faq: "FAQ",
      f_link_terms: "Terms & Conditions",
      f_contact_loc_l1: "New Alamein, Matrouh",
      f_contact_loc_l2: "Egypt",
      f_contact_hours: "Sun - Thu: 9:00 AM - 6:00 PM",
      fbb_copyright: "© 2025 ALAMEIN TOWERS. All rights reserved.",
      fbb_privacy: "Privacy Policy",
      fbb_terms: "Terms of Use",
      fbb_cookie: "Cookie Policy",

      // Modals
      modal_b_eyebrow: "EXCLUSIVE ACCESS",
      modal_b_title: "Schedule a Private Viewing",
      modal_b_sub: "Experience the towers in person or receive a personalized digital walkthrough with our luxury property advisors.",
      f_name: "Full Name",
      f_phone: "Phone / WhatsApp",
      f_email: "Email Address",
      f_unit: "Interested In",
      f_date: "Preferred Date",
      opt_1bed: "1 Bedroom (85 - 120 m²)",
      opt_2bed: "2 Bedroom Luxury Suite (135 - 180 m²)",
      opt_3bed: "3 Bedroom Residence (210 - 275 m²)",
      opt_4bed: "4 Bedroom Royal Penthouse (320 - 450 m²)",
      btn_confirm_booking: "Confirm Viewing Request",
      booking_success_msg: "Thank you. Our luxury advisor will contact you shortly to confirm your private viewing.",
      cinema_tag: "CINEMATIC WALKTHROUGH",
      cinema_title: "Alamein Towers - Penthouse Experience"
    },
    ar: {
      brand_title: "أبراج",
      brand_sub: "العلمين",
      brand_ar: "إطلالة ساحلية فاخرة",
      nav_home: "الرئيسية",
      nav_about: "عن المشروع",
      nav_residences: "الوحدات السكنية",
      nav_amenities: "المرافق والخدمات",
      nav_floorplans: "المخططات",
      nav_gallery: "معرض الصور",
      nav_location: "الموقع الجغرافي",
      nav_contact: "تواصل معنا",
      btn_book_tour: "احجز جولة خاصة",
      scroll_cue: "مرر للأسفل للاستكشاف",

      // Chapter 1
      c1_eyebrow: "حياة ساحلية حصرية",
      c1_title_l1: "معيار استثنائي",
      c1_title_l2_pre: "للفخامة",
      c1_title_l2_gold: "الساحلية",
      c1_desc: "عش تجربة السكن الحصري على الواجهة البحرية في العلمين الجديدة، حيث تلتقي الإطلالات البانورامية على البحر مع الأناقة المعمارية والوحدات الفاخرة في تناغم لا مثيل له.",
      btn_explore: "استكشف الوحدات السكنية",
      btn_view_floorplans: "عرض المخططات المعمارية",
      c1_h1_title: "العلمين الجديدة، مصر",
      c1_h1_sub: "موقع استراتيجي ساحلي",
      c1_h2_title: "إطلالات بحرية بانورامية",
      c1_h2_sub: "آفاق خلابة لا نهائية",
      c1_h3_title: "حياة مائية فاخرة",
      c1_h3_sub: "أسلوب معيشة راقٍ",

      // Chapter 2
      c2_eyebrow: "حياة راقية على شاطئ المتوسط",
      c2_title_l1: "منزلك الأقرب",
      c2_title_l2: "إلى أمواج البحر",
      c2_desc: "انطلق داخل عالم من الرقي، حيث يلتقي التصميم العصري مع سحر البحر المتوسط. اكتشف مساحات معيشية صممت بعناية، وتشطيبات راقية مستوحاة من بهاء العلمين الجديدة.",
      btn_watch_experience: "شاهد التجربة السينمائية",
      c2_f1_l1: "إطلالات بحرية",
      c2_f1_l2: "بانورامية",
      c2_f2_l1: "تصاميم داخلية",
      c2_f2_l2: "فندقية فاخرة",
      c2_f3_l1: "أسلوب حياة",
      c2_f3_l2: "ساحلي استثنائي",

      // Chapter 3
      c3_eyebrow: "الوحدات السكنية",
      c3_title_l1: "صممت لتفوق",
      c3_title_l2: "أعلى معايير الرفاهية",
      c3_desc: "مجموعة مختارة من الشقق والبنتهاوس الفاخر بمساحات متنوعة وتراسات واسعة تمنحك إطلالة مباشرة لا تنقطع على الأفق الساحلي.",
      c3_s1_val: "1 - 4 غرف نوم",
      c3_s1_sub: "مساحات معيشية مرنة",
      c3_s2_val: "مخططات واسعة",
      c3_s2_sub: "تصميم مفتوح حديث",
      c3_s3_val: "تراسات خاصة",
      c3_s3_sub: "إطلالة مباشرة على البحر",
      c3_s4_val: "تشطيبات إيطالية فاخرة",
      c3_s4_sub: "رخام وزجاج مقاوم",
      thumb_living: "الصالون",
      thumb_terrace: "الشرفة",
      thumb_suite: "الجناح",
      thumb_panorama: "البانوراما",

      // Chapter 4
      c4_eyebrow: "مرافق وخدمات عالمية متكاملة",
      c4_title_l1: "أسلوب حياة",
      c4_title_l2_pre: "ساحلي",
      c4_title_l2_gold: "متكامل",
      c4_desc: "مجموعة متكاملة من المرافق والخدمات العالمية المصممة لراحتك ورفاهيتك وصحتك البدنية والذهنية على مدار العام.",
      btn_discover_amenities: "اكتشف جميع المرافق",
      am_pools: "حمامات سباحة إنفينيتي",
      am_pools_sub: "تحكم بحرارة المياه",
      am_beach: "شاطئ رملي خاص",
      am_beach_sub: "1.2 كم شاطئ نقي",
      am_wellness: "نادي صحي وسبا عالمي",
      am_wellness_sub: "جيم حديث ومساج",
      am_dining: "مطاعم وكافيهات راقية",
      am_dining_sub: "إطلالة شاطئية حصرية",
      am_retail: "منطقة تسوق وممشى",
      am_retail_sub: "أرقى الماركات العالمية",
      am_parks: "مساحات وحدائق خضراء",
      am_parks_sub: "حدائق استوائية ونوافير",

      // Floor Plans Section
      fp_eyebrow: "المخططات الهندسية",
      fp_title_l1: "تصاميم ذكية",
      fp_title_l2: "بإطلالات استثنائية",
      fp_desc: "اختر من بين مجموعة مدروسة من المخططات الهندسية المصممة لتعظيم الإضاءة الطبيعية واستغلال المساحات، لتواكب أرقى أساليب الحياة العصرية.",
      btn_view_all_plans: "عرض جميع المخططات",
      fp_f_living: "مساحات معيشية رحبة",
      fp_f_sea: "إطلالات بحرية بانورامية",
      fp_f_design: "تصميم عصري متطور",
      fp_tab_1bed: "غرفة نوم واحدة",
      fp_tab_2bed: "غرفتان نوم",
      fp_tab_3bed: "3 غرف نوم",
      fp_tab_4bed: "4 غرف نوم",
      specs_total_area: "المساحة الإجمالية",
      room_living: "صالون المعيشة",
      room_bedroom: "غرفة النوم",
      room_kitchen: "المطبخ العصري",
      room_bathroom: "الحمام الفندقي",
      room_balcony: "إطلالة الشرفة",

      // Gallery
      gal_eyebrow: "معرض الصور",
      gal_title_l1: "لمحة حية",
      gal_title_l2: "من التجربة الساحلية",
      gal_desc: "استكشف الإطلالات الساحرة، والتصاميم الداخلية الفخمة، ونمط الحياة النابض بالحيوية في أبراج العلمين.",
      gal_filter_all: "جميع الصور",
      gal_filter_ext: "التصميم الخارجي",
      gal_filter_int: "المساحات الداخلية",
      gal_filter_views: "آفاق البحر",
      gal_c1: "التصميم المعماري للأبراج وقت الغروب",
      gal_c2: "صالون المعيشة البانورامي المطل على البحر",
      gal_c3: "جناح النوم الرئيسي بإطلالة مباشرة",
      gal_c4: "بحيرة المنتجع والأفق الساحلي",
      gal_tag_ext: "خارجي",
      gal_tag_int: "داخلي",
      gal_tag_view: "إطلالة بحرية",

      // Location
      loc_eyebrow: "الموقع الجغرافي",
      loc_title_l1: "في قلب مدينة",
      loc_title_l2: "العلمين الجديدة",
      loc_desc: "موقع استراتيجي على ساحل البحر الأبيض المتوسط. اضغط على أي بطاقة لمعرفة أوقات الانتقال والمسارات المباشرة.",
      loc_zone: "المنطقة الأولى - صف أول على البحر مباشرة",
      loc_c1_title: "واجهة شاطئية مباشرة",
      loc_c1_dist: "0 دقيقة (خروج مباشر للبحر)",
      loc_c2_title: "مارينا العلمين والممشى السياحي",
      loc_c2_dist: "5 دقائق بالسيارة",
      loc_c3_title: "مطار العلمين الدولي",
      loc_c3_dist: "15 دقيقة بالسيارة",
      loc_c4_title: "سهولة الوصول من القاهرة",
      loc_c4_dist: "ساعتان فقط عبر محور الضبعة",

      // New Luxury Footer (Arabic RTL)
      fn_eyebrow: "ابقَ على تواصل",
      fn_title_l1: "منازل استثنائية،",
      fn_title_l2: "حياة لا مثيل لها.",
      fn_desc: "كن أول من يتلقى أحدث المستجدات العقارية، الرؤى الفاخرة والفرص الاستثمارية الحصرية في العلمين الجديدة.",
      btn_subscribe: "اشترك الآن",
      fn_privacy: "نحن نحترم خصوصيتك التامة.",
      ph_newsletter_email: "أدخل بريدك الإلكتروني",
      newsletter_success: "✓ شكراً لاشتراكك. أنت الآن مسجل في قائمة كبار الشخصيات الحصرية.",
      footer_brand_desc: "إعادة صياغة مفهوم الحياة الساحلية من خلال عمارة أيقونية ومرافق عالمية وأسلوب حياة متوسطي لا يُضاهى في العلمين الجديدة.",
      f_col_explore: "استكشف",
      f_col_about: "عن المشروع",
      f_col_resources: "المصادر",
      f_col_contact: "اتصل بنا",
      f_link_residences: "الوحدات السكنية",
      f_link_floorplans: "مخططات الشقق",
      f_link_amenities: "المرافق والخدمات",
      f_link_location: "الموقع الجغرافي",
      f_link_gallery: "معرض الصور",
      f_link_updates: "آخر التحديثات",
      f_link_story: "قصتنا",
      f_link_masterplan: "المخطط العام",
      f_link_sustainability: "الاستدامة والبيئة",
      f_link_team: "فريق العمل",
      f_link_careers: "الوظائف",
      f_link_press: "الصحافة والإعلام",
      f_link_brochures: "الكتيبات التعريفية",
      f_link_payments: "خطط السداد",
      f_link_guide: "دليل الشراء",
      f_link_investor: "معلومات المستثمرين",
      f_link_faq: "الأسئلة الشائعة",
      f_link_terms: "الشروط والأحكام",
      f_contact_loc_l1: "العلمين الجديدة، مطروح",
      f_contact_loc_l2: "جمهورية مصر العربية",
      f_contact_hours: "الأحد - الخميس: 9:00 ص - 6:00 م",
      fbb_copyright: "© 2025 أبراج العلمين. جميع الحقوق محفوظة.",
      fbb_privacy: "سياسة الخصوصية",
      fbb_terms: "شروط الاستخدام",
      fbb_cookie: "سياسة الكوكيز",

      // Modals
      modal_b_eyebrow: "دعوة حصرية",
      modal_b_title: "احجز جولة معاينة خاصة",
      modal_b_sub: "اكتشف الأبراج بنفسك أو احصل على جولة رقمية مخصصة يقدمها لك مستشارونا العقاريون الفاخرون.",
      f_name: "الاسم الكامل",
      f_phone: "رقم الهاتف / واتساب",
      f_email: "البريد الإلكتروني",
      f_unit: "الوحدة المفضلة",
      f_date: "الموعد المقترح للزيارة",
      opt_1bed: "غرفة نوم واحدة (85 - 120 م²)",
      opt_2bed: "جناح فاخر غرفتان (135 - 180 م²)",
      opt_3bed: "شقة ساحلية 3 غرف (210 - 275 م²)",
      opt_4bed: "رويال بنتهاوس 4 غرف (320 - 450 م²)",
      btn_confirm_booking: "تأكيد طلب المعاينة",
      booking_success_msg: "شكراً لك. سيقوم مستشارنا العقاري بالتواصل معك خلال دقائق لتأكيد موعد معاينتك الخاصة.",
      cinema_tag: "جولة سينمائية متكاملة",
      cinema_title: "أبراج العلمين - تجربة البنتهاوس الساحلي"
    }
  };

  let currentLang = localStorage.getItem('alamein_lang') || 'ar';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('alamein_lang', lang);
    const html = document.documentElement;

    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const indicator = document.getElementById('lang-indicator');
    if (indicator) {
      indicator.textContent = lang === 'ar' ? 'English' : 'العربية';
    }

    const mIndicator = document.getElementById('m-lang-indicator');
    if (mIndicator) {
      mIndicator.textContent = lang === 'ar' ? 'English' : 'العربية';
    }

    const footerLangText = document.getElementById('footer-lang-text');
    if (footerLangText) {
      footerLangText.textContent = lang === 'ar' ? 'العربية' : 'English';
    }

    const dict = translations[lang] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    updateFloorPlanSpecs(currentUnit);
  }

  /* ------------------------------------------------------------------------ */
  /* IMAGE SEQUENCE SETUP & CANVAS RENDERING                                  */
  /* ------------------------------------------------------------------------ */
  const FRAME_COUNT = 210;
  const FOLDER_PATH = 'ezgif-26abb239274a1d7d-jpg';
  const FILE_PREFIX = 'ezgif-frame-';
  const FILE_EXT = '.jpg';

  const canvas = document.getElementById('sequence-canvas');
  const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });

  const navbar = document.getElementById('navbar');
  const scrollyContainer = document.getElementById('scrolly-container');
  const stepItems = document.querySelectorAll('.step-item');
  const stepLineFill = document.getElementById('step-line-fill');

  const chapterOverlays = [
    document.getElementById('chapter-1'),
    document.getElementById('chapter-2'),
    document.getElementById('chapter-3'),
    document.getElementById('chapter-4')
  ];

  const images = new Array(FRAME_COUNT);
  const loadedFlags = new Array(FRAME_COUNT).fill(false);

  let targetFrame = 0;
  let currentFrame = 0;
  let lastDrawnIndex = -1;
  let naturalWidth = 1920;
  let naturalHeight = 1080;

  function getFrameUrl(index) {
    const padded = String(index + 1).padStart(3, '0');
    return `${FOLDER_PATH}/${FILE_PREFIX}${padded}${FILE_EXT}`;
  }

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    const renderWidth = Math.round(displayWidth * dpr);
    const renderHeight = Math.round(displayHeight * dpr);

    if (canvas.width !== renderWidth || canvas.height !== renderHeight) {
      canvas.width = renderWidth;
      canvas.height = renderHeight;
      lastDrawnIndex = -1;
      drawFrame(Math.round(currentFrame));
    }
  }

  function drawFrame(frameIndex) {
    const clampedIndex = Math.max(0, Math.min(FRAME_COUNT - 1, frameIndex));

    let activeImage = null;
    let actualIndex = clampedIndex;

    if (loadedFlags[clampedIndex] && images[clampedIndex]) {
      activeImage = images[clampedIndex];
    } else {
      for (let offset = 1; offset < FRAME_COUNT; offset++) {
        const prev = clampedIndex - offset;
        if (prev >= 0 && loadedFlags[prev] && images[prev]) {
          activeImage = images[prev];
          actualIndex = prev;
          break;
        }
        const next = clampedIndex + offset;
        if (next < FRAME_COUNT && loadedFlags[next] && images[next]) {
          activeImage = images[next];
          actualIndex = next;
          break;
        }
      }
    }

    if (!activeImage) return;
    if (actualIndex === lastDrawnIndex && !canvas._needsRedraw) return;

    canvas._needsRedraw = false;
    lastDrawnIndex = actualIndex;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = activeImage.naturalWidth || naturalWidth;
    const ih = activeImage.naturalHeight || naturalHeight;

    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = (ch - sh) / 2;

    ctx.drawImage(activeImage, sx, sy, sw, sh);
  }

  /* ------------------------------------------------------------------------ */
  /* TRAPEZOIDAL SOLID PLATEAU FUNCTION (Solves transparency/flicker)         */
  /* Stays 100% solid and crisp during dwell time across ~40 frames each!    */
  /* ------------------------------------------------------------------------ */
  function getTrapezoidOpacity(progress, enterStart, enterEnd, exitStart, exitEnd) {
    if (progress < enterStart) return 0;
    if (progress < enterEnd) {
      const t = (progress - enterStart) / (enterEnd - enterStart);
      return t * t * (3 - 2 * t); // Smoothstep in
    }
    if (progress <= exitStart) {
      return 1.0; // SOLID PLATEAU - 100% OPAQUE
    }
    if (progress < exitEnd) {
      const t = (progress - exitStart) / (exitEnd - exitStart);
      return 1.0 - (t * t * (3 - 2 * t)); // Smoothstep out
    }
    return 0;
  }

  function updateChapters(progress) {
    // Windows with generous solid plateaus:
    // Ch1: Solid 1.0 from 0.00 to 0.17, fades out by 0.24
    // Ch2: Fades in 0.20-0.26, Solid 1.0 from 0.26 to 0.44, fades out by 0.50
    // Ch3: Fades in 0.46-0.52, Solid 1.0 from 0.52 to 0.70, fades out by 0.76
    // Ch4: Fades in 0.72-0.78, Solid 1.0 from 0.78 to 0.98
    const windows = [
      [-0.1, 0.0, 0.17, 0.24],
      [0.20, 0.26, 0.44, 0.50],
      [0.46, 0.52, 0.70, 0.76],
      [0.72, 0.78, 0.98, 1.05]
    ];

    let activeIdx = 0;
    if (progress >= 0.23 && progress < 0.48) activeIdx = 1;
    else if (progress >= 0.48 && progress < 0.74) activeIdx = 2;
    else if (progress >= 0.74) activeIdx = 3;

    // Step Rail Dynamic Line Fill
    if (stepLineFill) {
      stepLineFill.style.height = `${(progress * 100).toFixed(1)}%`;
    }

    // Step Item Highlight
    stepItems.forEach((item, idx) => {
      if (idx === activeIdx) {
        if (!item.classList.contains('active')) {
          item.classList.add('active');
          if (!item.querySelector('.step-circle')) {
            const circle = document.createElement('span');
            circle.className = 'step-circle';
            item.prepend(circle);
          }
        }
      } else {
        item.classList.remove('active');
        const circle = item.querySelector('.step-circle');
        if (circle) circle.remove();
      }
    });

    // Update Overlays with Solid Plateau
    chapterOverlays.forEach((overlay, idx) => {
      if (!overlay) return;
      const w = windows[idx];
      const opacity = getTrapezoidOpacity(progress, w[0], w[1], w[2], w[3]);

      // Subtle parallax translateY only when entering/exiting (zero when solid!)
      let translateY = 0;
      if (opacity < 0.99) {
        if (progress < w[1]) {
          translateY = (1 - opacity) * 20; // Slide up on entry
        } else if (progress > w[2]) {
          translateY = -(1 - opacity) * 20; // Slide up on exit
        }
      }

      overlay.style.opacity = opacity.toFixed(3);
      overlay.style.transform = `translateY(${translateY.toFixed(1)}px)`;
      overlay.style.pointerEvents = opacity > 0.4 ? 'auto' : 'none';

      if (opacity > 0.02) {
        overlay.classList.add('active');
      } else {
        overlay.classList.remove('active');
      }
    });

    const rightCue = document.getElementById('right-scroll-cue');
    if (rightCue) {
      rightCue.style.opacity = Math.max(0, 1 - progress * 4.5).toFixed(2);
    }
  }

  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollyHeight = scrollyContainer.offsetHeight;
    const maxScrolly = Math.max(1, scrollyHeight - window.innerHeight);

    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (scrollY <= maxScrolly) {
      const progress = Math.max(0, Math.min(1, scrollY / maxScrolly));
      targetFrame = progress * (FRAME_COUNT - 1);
      updateChapters(progress);
    } else {
      targetFrame = FRAME_COUNT - 1;
      updateChapters(1.0);
    }
  }

  function animate() {
    const diff = targetFrame - currentFrame;
    if (Math.abs(diff) > 0.0005) {
      currentFrame += diff * 0.12;
    } else {
      currentFrame = targetFrame;
    }

    const frameToRender = Math.round(currentFrame);
    drawFrame(frameToRender);
    requestAnimationFrame(animate);
  }

  function preloadImages() {
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    images[0] = firstImg;

    firstImg.onload = () => {
      loadedFlags[0] = true;
      naturalWidth = firstImg.naturalWidth || 1920;
      naturalHeight = firstImg.naturalHeight || 1080;
      canvas._needsRedraw = true;
      drawFrame(0);
    };

    for (let i = 1; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      images[i] = img;

      img.onload = () => {
        loadedFlags[i] = true;
        if (Math.round(currentFrame) === i) {
          canvas._needsRedraw = true;
          drawFrame(i);
        }
      };

      if ('decode' in img) {
        img.decode().catch(() => {});
      }
    }
  }

  /* ------------------------------------------------------------------------ */
  /* 3D FLOOR PLAN STUDIO DATA & INTERACTIVITY (MATCHING IMAGE 2 EXACTLY)      */
  /* ------------------------------------------------------------------------ */
  let currentUnit = '1bed';

  const unitDatabase = {
    '1bed': {
      title_en: '1 Bedroom Apartment',
      title_ar: 'شقة فاخرة - غرفة نوم واحدة',
      area_en: '85 – 120 m²',
      area_ar: '85 – 120 م²',
      beds_en: '1 Bedroom',
      beds_ar: '1 غرفة نوم ماستر',
      baths_en: '1 Bathroom',
      baths_ar: '1 حمام فندقي',
      living_en: 'Spacious Living Area',
      living_ar: 'صالون معيشة واسع',
      balcony_en: 'Sea View Balcony',
      balcony_ar: 'شرفة بإطلالة بحرية',
      img: 'assets/floorplans/unit-1bed-hd.png',
      tag_en: '1 Bedroom Cutaway Model',
      tag_ar: 'مجسم ثلاثي الأبعاد - غرفة نوم واحدة'
    },
    '2bed': {
      title_en: '2 Bedrooms Apartment',
      title_ar: 'شقة فاخرة - غرفتان نوم',
      area_en: '135 – 180 m²',
      area_ar: '135 – 180 م²',
      beds_en: '2 Bedrooms En-suite',
      beds_ar: '2 غرف نوم ماستر بحمام',
      baths_en: '2.5 Bathrooms',
      baths_ar: '2.5 حمام رخامي إيطالي',
      living_en: 'Grand Living & Dining Salon',
      living_ar: 'صالون كبير ومنطقة طعام',
      balcony_en: 'Wrap-around Sea Balcony',
      balcony_ar: 'شرفة بانورامية مزدوجة',
      img: 'assets/floorplans/unit-2bed-hd.png',
      tag_en: '2 Bedrooms Cutaway Model',
      tag_ar: 'مجسم ثلاثي الأبعاد - غرفتان نوم'
    },
    '3bed': {
      title_en: '3 Bedrooms Apartment',
      title_ar: 'شقة فاخرة - 3 غرف نوم',
      area_en: '210 – 275 m²',
      area_ar: '210 – 275 م²',
      beds_en: '3 Bedrooms + Maid Room',
      beds_ar: '3 غرف نوم + غرفة مساعدة',
      baths_en: '3.5 Bathrooms',
      baths_ar: '3.5 حمام فاخر',
      living_en: 'Panoramic Ocean Salon',
      living_ar: 'صالون واسع مطل على المحيط',
      balcony_en: 'Expansive 36m² Sky Terrace',
      balcony_ar: 'تراس بانورامي واسع 36 م²',
      img: 'assets/floorplans/unit-3bed-hd.png',
      tag_en: '3 Bedrooms Cutaway Model',
      tag_ar: 'مجسم ثلاثي الأبعاد - 3 غرف نوم'
    },
    '4bed': {
      title_en: '4 Bedrooms Apartment',
      title_ar: 'رويال بنتهاوس - 4 غرف نوم',
      area_en: '320 – 450 m²',
      area_ar: '320 – 450 م²',
      beds_en: '4 Royal En-suites + Sky Lounge',
      beds_ar: '4 أجنحة ملكية + سكاي لاونج',
      baths_en: '5 Bathrooms + Jacuzzi',
      baths_ar: '5 حمامات + جاكوزي خاص',
      living_en: 'Presidential Double-Height Salon',
      living_ar: 'صالون رئاسي بارتفاع مزدوج',
      balcony_en: '360° Infinite Sky Deck',
      balcony_ar: 'شرفة سطحية 360 درجة',
      img: 'assets/floorplans/unit-4bed-hd.png',
      tag_en: '4 Bedrooms Royal Penthouse',
      tag_ar: 'مجسم البنتهاوس الملكي - 4 غرف'
    }
  };

  function updateFloorPlanSpecs(unitKey) {
    currentUnit = unitKey;
    const data = unitDatabase[unitKey] || unitDatabase['1bed'];

    const unitTitle = document.getElementById('unit-title');
    const unitArea = document.getElementById('unit-area');
    const specBeds = document.getElementById('spec-beds');
    const specBaths = document.getElementById('spec-baths');
    const specLiving = document.getElementById('spec-living');
    const specBalcony = document.getElementById('spec-balcony');
    const fpImg = document.getElementById('fp-3d-render-img');
    const fpTag = document.getElementById('fp-tag-text');

    if (unitTitle) unitTitle.textContent = currentLang === 'ar' ? data.title_ar : data.title_en;
    if (unitArea) unitArea.textContent = currentLang === 'ar' ? data.area_ar : data.area_en;
    if (specBeds) specBeds.textContent = currentLang === 'ar' ? data.beds_ar : data.beds_en;
    if (specBaths) specBaths.textContent = currentLang === 'ar' ? data.baths_ar : data.baths_en;
    if (specLiving) specLiving.textContent = currentLang === 'ar' ? data.living_ar : data.living_en;
    if (specBalcony) specBalcony.textContent = currentLang === 'ar' ? data.balcony_ar : data.balcony_en;
    if (fpTag) fpTag.textContent = currentLang === 'ar' ? data.tag_ar : data.tag_en;

    if (fpImg) {
      fpImg.style.opacity = '0';
      fpImg.style.transform = 'scale(0.96)';
      setTimeout(() => {
        fpImg.src = data.img;
        fpImg.onload = () => {
          fpImg.style.opacity = '1';
          fpImg.style.transform = 'scale(1)';
        };
      }, 150);
    }
  }

  /* ------------------------------------------------------------------------ */
  /* INTERACTIVE MODALS & EVENT HANDLERS                                      */
  /* ------------------------------------------------------------------------ */
  function setupModals() {
    // 1. Booking Modal
    const modalBooking = document.getElementById('modal-booking');
    const bookingBackdrop = document.getElementById('modal-booking-backdrop');
    const bookingClose = document.getElementById('modal-booking-close');

    const openBooking = () => {
      if (modalBooking) modalBooking.classList.add('active');
    };

    const closeBooking = () => {
      if (modalBooking) modalBooking.classList.remove('active');
    };

    document.querySelectorAll('#btn-open-booking, #btn-footer-book, #btn-request-plan').forEach(btn => {
      btn.addEventListener('click', openBooking);
    });

    if (bookingClose) bookingClose.addEventListener('click', closeBooking);
    if (bookingBackdrop) bookingBackdrop.addEventListener('click', closeBooking);

    const bookingForm = document.getElementById('booking-form');
    const successMsg = document.getElementById('booking-success');
    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (successMsg) {
          successMsg.style.display = 'flex';
          setTimeout(() => {
            successMsg.style.display = 'none';
            closeBooking();
            bookingForm.reset();
          }, 3200);
        }
      });
    }

    // 2. Cinema Video Modal
    const modalVideo = document.getElementById('modal-video');
    const videoBackdrop = document.getElementById('modal-video-backdrop');
    const videoClose = document.getElementById('modal-video-close');
    const btnWatch = document.getElementById('btn-watch-experience');

    const openVideo = () => {
      if (modalVideo) modalVideo.classList.add('active');
    };

    const closeVideo = () => {
      if (modalVideo) modalVideo.classList.remove('active');
    };

    if (btnWatch) btnWatch.addEventListener('click', openVideo);
    if (videoClose) videoClose.addEventListener('click', closeVideo);
    if (videoBackdrop) videoBackdrop.addEventListener('click', closeVideo);

    const cinemaPlay = document.getElementById('cinema-play-pause');
    const cinemaBar = document.getElementById('cinema-progress-bar');
    const cinemaTime = document.getElementById('cinema-time');
    let isPlaying = false;
    let videoPercent = 35;
    let videoInterval = null;

    if (cinemaPlay) {
      cinemaPlay.addEventListener('click', () => {
        isPlaying = !isPlaying;
        cinemaPlay.innerHTML = isPlaying ? '&#10074;&#10074;' : '&#9658;';

        if (isPlaying) {
          videoInterval = setInterval(() => {
            videoPercent = (videoPercent + 1) % 100;
            if (cinemaBar) cinemaBar.style.width = `${videoPercent}%`;
            const sec = Math.round((videoPercent / 100) * 135);
            const m = String(Math.floor(sec / 60)).padStart(2, '0');
            const s = String(sec % 60).padStart(2, '0');
            if (cinemaTime) cinemaTime.textContent = `${m}:${s} / 02:15`;
          }, 200);
        } else {
          clearInterval(videoInterval);
        }
      });
    }

    // 3. Gallery Lightbox
    const modalLightbox = document.getElementById('modal-lightbox');
    const lightboxBackdrop = document.getElementById('modal-lightbox-backdrop');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    let currentGalleryIndex = 0;
    const galleryCards = Array.from(document.querySelectorAll('.gallery-card, .room-photo-card'));

    function openLightbox(idx) {
      currentGalleryIndex = idx;
      const card = galleryCards[idx];
      if (!card) return;
      const src = card.getAttribute('data-src');
      let caption = '';
      if (card.hasAttribute('data-caption-ar')) {
        caption = currentLang === 'ar' ? card.getAttribute('data-caption-ar') : card.getAttribute('data-caption-en');
      } else {
        caption = currentLang === 'ar' ? card.getAttribute('data-room-ar') : card.getAttribute('data-room-name');
      }

      if (lightboxImg) lightboxImg.src = src;
      if (lightboxCaption) lightboxCaption.textContent = caption;
      if (modalLightbox) modalLightbox.classList.add('active');
    }

    function closeLightbox() {
      if (modalLightbox) modalLightbox.classList.remove('active');
    }

    galleryCards.forEach((card, idx) => {
      card.addEventListener('click', () => openLightbox(idx));
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', () => {
        currentGalleryIndex = (currentGalleryIndex - 1 + galleryCards.length) % galleryCards.length;
        openLightbox(currentGalleryIndex);
      });
    }

    if (lightboxNext) {
      lightboxNext.addEventListener('click', () => {
        currentGalleryIndex = (currentGalleryIndex + 1) % galleryCards.length;
        openLightbox(currentGalleryIndex);
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeBooking();
        closeVideo();
        closeLightbox();
      }
    });
  }

  /* ------------------------------------------------------------------------ */
  /* SETUP ALL INTERACTIVE BUTTONS & TAB TRIGGERS                             */
  /* ------------------------------------------------------------------------ */
  function setupInteractiveElements() {
    const scrollyHeight = scrollyContainer.offsetHeight;
    const maxScrolly = Math.max(1, scrollyHeight - window.innerHeight);

    // Language Toggle Button
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const nextLang = currentLang === 'ar' ? 'en' : 'ar';
        setLanguage(nextLang);
      });
    }

    // Left Step Rail Clicks
    stepItems.forEach(item => {
      item.addEventListener('click', () => {
        const step = parseInt(item.getAttribute('data-step'), 10);
        const chapterTargets = [0.08, 0.35, 0.61, 0.88];
        const targetScroll = maxScrolly * chapterTargets[step - 1];
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      });
    });

    // Jump Buttons
    document.querySelectorAll('[data-jump-to]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const step = parseInt(btn.getAttribute('data-jump-to'), 10);
        const chapterTargets = [0.08, 0.35, 0.61, 0.88];
        const targetScroll = maxScrolly * chapterTargets[step - 1];
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      });
    });

    // Floor Plan Tabs Switcher
    const fpTabs = document.querySelectorAll('.fp-tab');
    fpTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        fpTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const unit = tab.getAttribute('data-unit');
        updateFloorPlanSpecs(unit);
      });
    });

    // Gallery Category Filter Tabs
    const filterBtns = document.querySelectorAll('.gal-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-filter');

        document.querySelectorAll('.gallery-card').forEach(card => {
          if (cat === 'all' || card.getAttribute('data-category') === cat) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Interactive Location Route Lines
    const locCards = document.querySelectorAll('.loc-hl-card');
    const activeRoute = document.getElementById('map-active-route');

    const routeCoordinates = {
      beach: 'M315,175 L315,165',
      marina: 'M315,175 Q380,185 450,195',
      airport: 'M315,175 Q220,210 140,240',
      cairo: 'M315,175 Q280,270 280,360'
    };

    locCards.forEach(card => {
      card.addEventListener('click', () => {
        locCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const dest = card.getAttribute('data-dest');

        if (activeRoute && routeCoordinates[dest]) {
          activeRoute.setAttribute('d', routeCoordinates[dest]);
          activeRoute.style.opacity = '1';
        }
      });
    });

    // Chapter 3 Mini Gallery Thumbnails
    document.querySelectorAll('.thumb-card[data-frame-jump]').forEach(thumb => {
      thumb.addEventListener('click', () => {
        document.querySelectorAll('.thumb-card').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        const target = parseInt(thumb.getAttribute('data-frame-jump'), 10);
        targetFrame = target;
      });
    });

    // Mobile Drawer Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    const mobileDrawerClose = document.getElementById('m-drawer-close');
    const mobileDrawerBackdrop = document.getElementById('m-drawer-backdrop');
    const mBtnBook = document.getElementById('m-btn-book');
    const mLangBtn = document.getElementById('m-lang-btn');

    function openMobileDrawer() {
      if (mobileDrawer) {
        mobileDrawer.classList.add('active');
        mobileDrawer.setAttribute('aria-hidden', 'false');
        if (mobileMenuToggle) mobileMenuToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeMobileDrawer() {
      if (mobileDrawer) {
        mobileDrawer.classList.remove('active');
        mobileDrawer.setAttribute('aria-hidden', 'true');
        if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
        document.body.style.overflow = '';
      }
    }

    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', () => {
        if (mobileDrawer && mobileDrawer.classList.contains('active')) {
          closeMobileDrawer();
        } else {
          openMobileDrawer();
        }
      });
    }
    if (mobileDrawerClose) {
      mobileDrawerClose.addEventListener('click', closeMobileDrawer);
    }
    if (mobileDrawerBackdrop) {
      mobileDrawerBackdrop.addEventListener('click', closeMobileDrawer);
    }
    document.querySelectorAll('.m-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });
    if (mBtnBook) {
      mBtnBook.addEventListener('click', () => {
        closeMobileDrawer();
        const modalBooking = document.getElementById('modal-booking');
        if (modalBooking) modalBooking.classList.add('active');
      });
    }
    if (mLangBtn) {
      mLangBtn.addEventListener('click', () => {
        setLanguage(currentLang === 'ar' ? 'en' : 'ar');
      });
    }

    // Footer Language Toggle
    const footerLangToggle = document.getElementById('footer-lang-toggle');
    if (footerLangToggle) {
      footerLangToggle.addEventListener('click', () => {
        setLanguage(currentLang === 'ar' ? 'en' : 'ar');
      });
    }

    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterSuccess = document.getElementById('newsletter-success');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('newsletter-email');
        if (emailInput && emailInput.value) {
          newsletterForm.style.display = 'none';
          if (newsletterSuccess) newsletterSuccess.style.display = 'block';
        }
      });
    }

    // Modal Trigger Buttons in Footer (Brochure, Guide, FAQ, etc.)
    document.querySelectorAll('.btn-trigger-modal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const modalBooking = document.getElementById('modal-booking');
        if (modalBooking) modalBooking.classList.add('active');
      });
    });
  }

  /* ------------------------------------------------------------------------ */
  /* INITIALIZATION                                                           */
  /* ------------------------------------------------------------------------ */
  function init() {
    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    resizeCanvas();
    preloadImages();
    setupInteractiveElements();
    setupModals();
    setLanguage(currentLang);
    onScroll();

    currentFrame = targetFrame;
    requestAnimationFrame(animate);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
