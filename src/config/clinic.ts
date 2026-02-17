export const clinic = {
  name: "Kantéa Fisioterapia",
  logo: "/images/logo.png",
  tagline: "Fisioterapia personalizada en Valladolid",
  description: "Kantéa Fisioterapia es tu clínica de confianza en Valladolid, Álava, especializada en recuperación de lesiones deportivas, fracturas y cirugías. Dirigida por Diego, profesional con valoración de 5 estrellas, ofrecemos tratamientos personalizados combinando terapia manual, punción seca, tecnología Indiba y ejercicios pautados. Cada sesión está planificada según tus objetivos y necesidades específicas para lograr tu máxima recuperación.",
  colors: {
    primary: "#2d4227",
    secondary: "#203727",
    accent: "#203727",
    neutral: "#eef0ee"
  },
  phone: "634 27 11 03",
  whatsapp: "+34634271103",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "C. Empecinado, 11, 47003 Valladolid, España",
    city: "Valladolid",
    province: "Álava",
    postalCode: "47003",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=4882059254564652326&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Kant%C3%A9a%20Fisioterapia%20%4041.6569%2C-4.72149&z=16&output=embed",
  coordinates: {
    lat: 41.6569,
    lng: -4.72149
  },
  schedule: [
    {
      days: "lunes - viernes",
      hours: "9:00–14:00, 17:00–21:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 8,
    url: "https://maps.google.com/?cid=4882059254564652326&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Irene Campos",
        rating: 5,
        text: "Tras una fractura de pelvis me puse en manos de Diego para lograr recuperar al máximo mi forma física. Después de una exhaustiva valoración, comencé con el tratamiento, en el que cada sesión ha sido planificada en base a mis objetivos y necesidades. El abordaje integral de la terapia manual, la Indiba y los ejercicios pautados ha sido clave para mi progreso.\nMuy agradecida por la atención recibida, su profesionalidad y el trato cercano durante todo el proceso.",
        date: "Hace 3 meses"
      },
      {
        author: "J C",
        rating: 5,
        text: "Diego es el mejor. Muy profesional, atento y explica todo clarísimo. No se anda con rodeos ni intenta engañarte con tratamientos que no te solucionan el problema. Además te ofrece un trato personalizado dependiendo de qué necesites aconsejándote con todo, prevención, tratamiento clínico, tratamiento si estás haciendo algún tipo de entrenamiento etc. Recomendable al 100%.",
        date: "Hace 7 meses"
      },
      {
        author: "Jose Gonzalez",
        rating: 5,
        text: "Después de meses buscando solución a mi tendinitis de rodilla, Diego acertó con el tratamiento alternando masajes y punción seca. A los pocos días estaba corriendo como antes. Muy recomendable.",
        date: "Hace 2 semanas"
      },
      {
        author: "paula lopez",
        rating: 5,
        text: "Despues de una operación de rodilla me puse en las manos de Diego para la recuperación, es un gran profesional y me ha ayudado a mejorar cada semana con paciencia y mimo.",
        date: "Hace 2 meses"
      },
      {
        author: "Lara",
        rating: 5,
        text: "Gran profesional,diego es tío muy agradable.",
        date: "Hace 8 meses"
      }
    ]
  },
  services: [
    {
      id: "terapia-manual",
      name: "Terapia Manual",
      description: "Técnicas manuales especializadas que forman parte del abordaje integral de cada tratamiento. Aplicamos métodos avanzados para aliviar el dolor, mejorar la movilidad articular y acelerar tu proceso de recuperación. Cada sesión se adapta a tu evolución y necesidades específicas.",
      benefits: [
        "Alivio efectivo del dolor muscular y articular",
        "Mejora de la movilidad y flexibilidad",
        "Complemento ideal con otras técnicas de recuperación"
      ],
      icon: "Hand"
    },
    {
      id: "puncion-seca",
      name: "Punción Seca",
      description: "Tratamiento especializado para eliminar puntos gatillo y contracturas musculares. Técnica probada con excelentes resultados en tendinitis y dolor crónico. Alternamos esta técnica con masajes para lograr una recuperación completa y duradera.",
      benefits: [
        "Eliminación efectiva de contracturas musculares",
        "Solución para tendinitis crónicas",
        "Resultados visibles en pocos días"
      ],
      icon: "Target"
    },
    {
      id: "indiba",
      name: "Tecnología Indiba",
      description: "Tecnología de vanguardia que aplicamos como parte del tratamiento integral. La Indiba acelera la recuperación de tejidos, reduce la inflamación y favorece la regeneración celular. Especialmente efectiva en recuperaciones postquirúrgicas y fracturas.",
      benefits: [
        "Acelera la regeneración de tejidos",
        "Reduce inflamación y edemas",
        "Potencia los resultados del tratamiento manual"
      ],
      icon: "Zap"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Tratamiento especializado para deportistas que buscan volver a su máximo rendimiento. Te aconsejamos sobre prevención, tratamiento clínico y pautas específicas según el tipo de entrenamiento que realices. Enfoque personalizado para cada disciplina deportiva.",
      benefits: [
        "Recuperación completa para volver a entrenar",
        "Prevención de futuras lesiones deportivas",
        "Asesoramiento adaptado a tu deporte"
      ],
      icon: "Dumbbell"
    },
    {
      id: "rehabilitacion-postquirurgica",
      name: "Rehabilitación Postquirúrgica",
      description: "Programas de recuperación tras cirugías de rodilla, pelvis y otras intervenciones. Seguimiento semanal con paciencia y atención personalizada para que mejores progresivamente. Combinamos diferentes técnicas para lograr tu recuperación completa.",
      benefits: [
        "Seguimiento semanal de tu evolución",
        "Recuperación progresiva y segura",
        "Vuelta a tu actividad normal"
      ],
      icon: "Activity"
    },
    {
      id: "recuperacion-fracturas",
      name: "Recuperación de Fracturas",
      description: "Tratamiento especializado tras fracturas óseas para recuperar al máximo tu forma física. Realizamos una valoración exhaustiva inicial y planificamos cada sesión en base a tus objetivos. Abordaje integral con ejercicios pautados específicos para tu caso.",
      benefits: [
        "Recuperación máxima de tu forma física",
        "Plan personalizado según tu fractura",
        "Ejercicios pautados para tu progreso"
      ],
      icon: "Heart"
    },
    {
      id: "tratamiento-tendinitis",
      name: "Tratamiento de Tendinitis",
      description: "Solución efectiva para tendinitis crónicas que no han respondido a otros tratamientos. Alternamos masajes y punción seca para abordar el problema de raíz. Resultados comprobados en pocos días para que vuelvas a tu actividad sin dolor.",
      benefits: [
        "Solución cuando otros tratamientos no funcionan",
        "Enfoque directo al origen del problema",
        "Resultados en pocos días de tratamiento"
      ],
      icon: "Target"
    },
    {
      id: "ejercicios-pautados",
      name: "Ejercicios Personalizados",
      description: "Cada sesión incluye ejercicios específicamente pautados para tu caso. No aplicamos rutinas genéricas: cada ejercicio está diseñado según tu lesión, objetivos y progreso. Te enseñamos a realizarlos correctamente para maximizar tu recuperación.",
      benefits: [
        "Ejercicios adaptados a tu lesión específica",
        "Aprendes a cuidarte de forma autónoma",
        "Aceleran tu proceso de recuperación"
      ],
      icon: "Activity"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta",
      description: "Llámanos al 634 27 11 03 o envíanos un WhatsApp para solicitar tu cita. Te atenderemos de forma cercana y resolveremos tus dudas iniciales sobre tu caso."
    },
    {
      step: 2,
      title: "Valoración Exhaustiva",
      description: "Realizamos una evaluación completa de tu estado físico, lesión o cirugía. Te explicamos todo con claridad, sin rodeos, y diseñamos un plan de tratamiento personalizado basado en tus objetivos y necesidades reales."
    },
    {
      step: 3,
      title: "Tratamiento Integral",
      description: "Cada sesión está planificada específicamente para ti, combinando terapia manual, tecnología Indiba, punción seca y ejercicios pautados según tu evolución. Abordaje completo adaptado a tu progreso semanal."
    },
    {
      step: 4,
      title: "Seguimiento y Recuperación",
      description: "Acompañamiento continuo con paciencia y mimo durante todo tu proceso. Ajustamos el tratamiento según tu respuesta y te asesoramos en prevención para que vuelvas a tu actividad con total confianza."
    }
  ],
  whyUs: [
    {
      title: "Valoración 5★ en Google",
      description: "Nuestros 8 pacientes nos han valorado con 5 estrellas en Google. Destacan nuestra profesionalidad, trato cercano y resultados efectivos en recuperaciones complejas. La confianza de quienes ya se han recuperado con nosotros es nuestra mejor carta de presentación.",
      icon: "Award"
    },
    {
      title: "Tratamiento Sin Rodeos",
      description: "Te explicamos todo con claridad y no intentamos engañarte con tratamientos que no solucionan el problema. Vamos directo al origen de tu lesión con técnicas que realmente funcionan. Honestidad y transparencia en cada sesión.",
      icon: "CheckCircle"
    },
    {
      title: "Abordaje Integral Personalizado",
      description: "Cada sesión está planificada específicamente para ti, combinando terapia manual, tecnología Indiba, punción seca y ejercicios pautados según tu evolución. No aplicamos protocolos genéricos: tu tratamiento se adapta a tus objetivos y necesidades reales.",
      icon: "Target"
    },
    {
      title: "Especialistas en Casos Complejos",
      description: "Experiencia comprobada en recuperación de fracturas, rehabilitación postquirúrgica y tendinitis crónicas que no han respondido a otros tratamientos. Si llevas meses buscando solución, podemos ayudarte con un enfoque diferente y efectivo.",
      icon: "Heart"
    }
  ],
  team: [
    {
      name: "Diego",
      role: "Fisioterapeuta",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Kantéa Fisioterapia nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "Kantéa Fisioterapia - Imagen 1"
    },
    {
      src: "/images/hero.webp",
      alt: "Kantéa Fisioterapia - Imagen 2"
    }
  ],
  faq: [
    {
      question: "¿Qué tratamientos ofrece Kantéa Fisioterapia?",
      answer: "En Kantéa Fisioterapia ofrecemos un abordaje integral que combina terapia manual, tecnología Indiba, punción seca y ejercicios personalizados. Nos especializamos en recuperación postquirúrgica, fracturas, tendinitis crónicas y lesiones deportivas. Cada tratamiento se planifica según tus necesidades específicas y objetivos de recuperación."
    },
    {
      question: "¿Cómo puedo solicitar una cita?",
      answer: "Puedes solicitar tu cita llamando al 634 27 11 03 o enviando un WhatsApp al mismo número. Te atenderemos de forma cercana y programaremos tu valoración inicial en el horario que mejor te convenga. Resolveremos todas tus dudas antes de la primera sesión."
    },
    {
      question: "¿Cuántas sesiones necesitaré para recuperarme?",
      answer: "El número de sesiones depende de tu lesión, cirugía o fractura específica. En la valoración exhaustiva inicial te explicaremos con claridad el plan de tratamiento estimado. Algunos pacientes con tendinitis notan mejora en pocos días, mientras que recuperaciones postquirúrgicas requieren un seguimiento semanal más prolongado. Siempre adaptamos el tratamiento a tu evolución real."
    },
    {
      question: "¿Qué es la tecnología Indiba y para qué sirve?",
      answer: "La Indiba es una tecnología avanzada que utilizamos en Kantéa Fisioterapia como parte del tratamiento integral. Acelera la regeneración de tejidos, reduce la inflamación y favorece la recuperación celular. Es especialmente efectiva en fracturas, recuperaciones postquirúrgicas y lesiones deportivas, potenciando los resultados de la terapia manual y ejercicios pautados."
    },
    {
      question: "¿La punción seca es efectiva para las tendinitis?",
      answer: "Sí, la punción seca ha demostrado excelentes resultados en el tratamiento de tendinitis crónicas. En Kantéa Fisioterapia alternamos punción seca con masajes para abordar el problema de raíz, no solo los síntomas. Muchos pacientes que llevaban meses buscando solución encuentran mejora significativa en pocos días de tratamiento con esta técnica."
    },
    {
      question: "¿Atienden lesiones deportivas y deportistas en activo?",
      answer: "Sí, la fisioterapia deportiva es una de nuestras especialidades en Kantéa Fisioterapia. Ofrecemos tratamiento personalizado dependiendo del tipo de entrenamiento que realices, asesorándote en prevención, tratamiento clínico y pautas específicas para tu deporte. El objetivo es que vuelvas a correr, entrenar o competir como antes de la lesión."
    },
    {
      question: "¿Realizan seguimiento tras cirugías de rodilla o pelvis?",
      answer: "Sí, en Kantéa Fisioterapia nos especializamos en rehabilitación postquirúrgica con seguimiento semanal. Tras una operación de rodilla, pelvis u otras cirugías, diseñamos un programa de recuperación progresiva con paciencia y mimo. Combinamos diferentes técnicas para que mejores cada semana hasta recuperar completamente tu funcionalidad y forma física."
    },
    {
      question: "¿Por qué elegir Kantéa Fisioterapia en Valladolid?",
      answer: "Kantéa Fisioterapia cuenta con una valoración de 5 estrellas en Google basada en 8 reseñas de pacientes reales. Nuestros pacientes destacan la profesionalidad, el trato cercano, la claridad en las explicaciones y los resultados efectivos. No aplicamos tratamientos genéricos: cada sesión está planificada según tus objetivos específicos, sin rodeos ni engaños, solo soluciones reales a tu problema."
    }
  ],
  seo: {
    titleTemplate: "%s | Kantéa Fisioterapia",
    defaultTitle: "Kantéa Fisioterapia Valladolid | Recuperación y Lesiones",
    defaultDescription: "Fisioterapia especializada en Valladolid. Recuperación de fracturas, cirugías y lesiones deportivas. Terapia manual, Indiba y punción seca. Valoración 5★. Llama al 634 27 11 03",
    keywords: [
      "fisioterapia Valladolid",
      "Kantéa Fisioterapia",
      "fisioterapeuta Valladolid Álava",
      "punción seca Valladolid",
      "rehabilitación postquirúrgica Valladolid",
      "fisioterapia deportiva Valladolid",
      "Indiba Valladolid",
      "tratamiento tendinitis Valladolid",
      "recuperación fracturas Valladolid",
      "fisioterapia lesiones deportivas",
      "clínica fisioterapia Valladolid",
      "Diego fisioterapeuta Valladolid"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Kantéa Fisioterapia",
    cif: "",
    registeredAddress: "C. Empecinado, 11, 47003 Valladolid, España, Valladolid, Álava"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Valladolid"
  ],
  heroDescription: "En Kantéa Fisioterapia te ofrecemos un abordaje integral para tu recuperación. Combinamos terapia manual avanzada, tecnología Indiba, punción seca y ejercicios personalizados para que recuperes tu forma física tras lesiones deportivas, fracturas o cirugías. Tratamiento profesional con trato cercano en cada sesión.",
  specialty: "Recuperación de lesiones",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para recuperar tu forma física?",
  ctaDescription: "Solicita tu valoración exhaustiva inicial y comienza tu tratamiento personalizado. Te explicaremos todo con claridad y diseñaremos un plan adaptado a tus objetivos.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
