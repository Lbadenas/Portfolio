import {
  BellPlus,
  BookText,
  Briefcase,
  Brush,
  Code2,
  CodeSquare,
  Home,
  Inbox,
  Mail,
  PanelsTopLeft,
  Phone,
  UserRound,
  UsersRound,
  Wrench,
} from "lucide-react";

export const dataAboutMe = [
  {
    id: 1,
    name: "Experiencia",
    icon: <Briefcase />,
    description: "1 año desarrollando aplicaciones",
  },
  {
    id: 2,
    name: "Colaboraciones",
    icon: <UsersRound />,
    description: "Trabajo en equipo y proyectos académicos",
  },
  {
    id: 3,
    name: "Proyectos",
    icon: <Wrench />,
    description: "Apps personales y prácticas",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <Home size={20} />,
    link: "#home",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={20} />,
    link: "#about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={20} />,
    link: "#services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={20} />,
    link: "#portfolio",
  },
  {
    id: 5,
    title: "Home",
    icon: <Mail size={20} />,
    link: "#contact",
  },
];

export const dataSlider = [
  {
    id: 1,
    url: "/slider-1.jpg",
  },
  {
    id: 2,
    url: "/slider-2.jpg",
  },
  {
    id: 3,
    url: "/slider-3.jpg",
  },
  {
    id: 4,
    url: "/slider-4.jpg",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Sistema de Gestión de Turnos",
    image: "/image-1.jpg",
    urlGithub: "https://github.com/Lbadenas/M3-Turnos",
    urlDemo: "https://m3-turnos.vercel.app",
  },
  {
    id: 2,
    title: "Gestión de Pagos y Facturación ",
    image: "/image-2.jpg",
    urlGithub: "https://github.com/Lbadenas/Edufee",
    urlDemo: "https://edufee.vercel.app",
  },
  {
    id: 3,
    title: "Backend para Tienda Online",
    image: "/image-3.jpg",
    urlGithub:
      "https://github.com/pi-rym/PM4BE-Lbadenas/tree/main/back/ecommerce-lbadenas",
    urlDemo:
      "https://github.com/pi-rym/PM4BE-Lbadenas/tree/main/back/ecommerce-lbadenas",
  },
];

export const dataExperience = [
  {
    id: 1,
    title: "Desarrollo Frontend 💄",
    experience: [
      {
        name: "JavaScript",
        subtitle: "Experimentado",
        value: 80,
      },
      {
        name: "TypeScript",
        subtitle: "Intermedio",
        value: 70,
      },
      {
        name: "React",
        subtitle: "Intermedio",
        value: 70,
      },
      {
        name: "Next.js",
        subtitle: "Intermedio",
        value: 65,
      },
      {
        name: "Tailwind CSS",
        subtitle: "Intermedio",
        value: 65,
      },
      {
        name: "Bootstrap",
        subtitle: "Básico",
        value: 55,
      },
    ],
  },
  {
    id: 2,
    title: "Desarrollo Backend 🥷",
    experience: [
      {
        name: "Node.js",
        subtitle: "Experimentado",
        value: 80,
      },
      {
        name: "NestJS",
        subtitle: "Intermedio",
        value: 70,
      },
      {
        name: "Express",
        subtitle: "Intermedio",
        value: 70,
      },
      {
        name: "PostgreSQL",
        subtitle: "Intermedio",
        value: 65,
      },
      {
        name: "MongoDB",
        subtitle: "Intermedio",
        value: 60,
      },
    ],
  },
  {
    id: 3,
    title: "Herramientas y Metodología 🛠️",
    experience: [
      {
        name: "Git",
        subtitle: "Experimentado",
        value: 80,
      },
      {
        name: "Jira",
        subtitle: "Intermedio",
        value: 70,
      },
      {
        name: "Slack",
        subtitle: "Intermedio",
        value: 65,
      },
      {
        name: "Visual Studio Code",
        subtitle: "Experimentado",
        value: 80,
      },
      {
        name: "Scrum",
        subtitle: "Intermedio",
        value: 70,
      },
    ],
  },
  {
    id: 4,
    title: "Desarrollo Personal y Proyectos 💡",
    experience: [
      {
        name: "Desarrollo de Aplicaciones Full Stack",
        subtitle: "Intermedio",
        value: 75,
      },
      {
        name: "Proyectos Open Source",
        subtitle: "Intermedio",
        value: 65,
      },

      {
        name: "Pruebas Unitarias (Jest, Jasmine)",
        subtitle: "Intermedio",
        value: 65,
      },
    ],
  },
];

export const dataServices = [
  {
    id: 1,
    title: "Desarrollo Web",
    icon: <PanelsTopLeft />,
    features: [
      {
        name: "Desarrollo de sitios web personalizados",
      },
      {
        name: "Diseño y desarrollo responsive",
      },

      {
        name: "Desarrollo de aplicaciones web",
      },
      {
        name: "Gestión de contenido",
      },

      {
        name: "Mantenimiento y soporte continuo",
      },
    ],
  },
  {
    id: 2,
    title: "Creación de contenido",
    icon: <BellPlus />,
    features: [
      {
        name: "Redacción de contenido original y de calidad",
      },
      {
        name: "Creación de vídeos atractivos y dinámicos",
      },

      {
        name: "Edición profesional de textos y materiales visuales",
      },

      {
        name: "Producción de podcasts informativos y entretenidos",
      },
      {
        name: "Generación de infografías claras y visualmente atractivas",
      },
    ],
  },
  {
    id: 3,
    title: "UI/UX Design",
    icon: <Brush />,
    features: [
      {
        name: "Diseño intuitivo para una experiencia de usuario fluida",
      },
      {
        name: "Prototipado interactivo para visualizar la interfaz",
      },
      {
        name: "Investigación de usuarios para comprender necesidades y expectativas",
      },
      {
        name: "Optimización de la usabilidad para mejorar la accesibilidad",
      },
      {
        name: "Pruebas de usabilidad para evaluar la experiencia",
      },
      {
        name: "Diseño responsive para adaptarse a diferentes dispositivos",
      },
    ],
  },
];

export const dataContact = [
  {
    id: 1,
    title: "Teléfono",
    subtitle: "+54 1144209187",
    link: "tel:+34677666633",
    icon: <Phone />,
  },
  {
    id: 2,
    title: "Github",
    subtitle: "github.com/Lbadenas",
    link: "https://github.com/Lbadenas",
    icon: <Code2 />,
  },
  {
    id: 3,
    title: "Email",
    subtitle: "badenas101189@gmail.com",
    link: "mailto:badenas101189@gmail.com",
    icon: <Inbox />,
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile-1.jpeg",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile-2.jpeg",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile-3.jpeg",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile-3.jpeg",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile-2.jpeg",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile-3.jpeg",
  },
];
