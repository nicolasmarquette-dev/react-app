export type LanguageKeys = "en" | "fr" | "es";

export type LabelsType = {
  [key in LanguageKeys]: {
    LANGUAGE: string;
    APPLY: string;
    THE_RESTAURANT: string;
    HOME: string;
    MENU: string;
    SLOGAN: string;
    CONTACT: string;
    SINCE: string;
    OTHER: string;
    TITLE_1: string;
    PARAGRAPH_1: string;
    TITLE_2: string;
    PARAGRAPH_2: string;
    TITLE_3: string;
    PARAGRAPH_3: string;
    HOURS: string;
    HISTORY: string;
  };
};

const LABELS: LabelsType = {
  en: {
    LANGUAGE: "Language",
    APPLY: "Apply to our teams",
    THE_RESTAURANT: "The Restaurant",
    HOME: "Home",
    MENU: "Menu",
    SLOGAN: "Savor authenticity, celebrate every moment.",
    CONTACT: "Contact",
    SINCE: "Since 1982",
    OTHER: "Other",
    TITLE_1: "Authentic and Flavorful Cuisine",
    PARAGRAPH_1:
      "Our restaurant stands out for its homemade dishes, crafted with fresh, local ingredients to ensure authentic flavors in every bite. Our chefs take pride in blending tradition and creativity to offer you an unforgettable dining experience.",
    TITLE_2: "Warm and Attentive Service",
    PARAGRAPH_2:
      "The well-being of our guests is our top priority. Our team welcomes you with a smile and ensures that every visit is a pleasant one. Whether you're dining with family, friends, or for business, we are committed to making your experience memorable.",
    TITLE_3: "A Cozy and Refined Atmosphere",
    PARAGRAPH_3:
      "Immerse yourself in a warm and elegant ambiance, perfect for relaxation. Our carefully designed decor, combining comfort and sophistication, makes our restaurant the ideal place to enjoy a delicious meal in a delightful setting.",
    HOURS: "Opening hours",
    HISTORY: "Our History",
  },
  fr: {
    LANGUAGE: "Langue",
    APPLY: "Postuler dans notre équipe",
    THE_RESTAURANT: "Le Restaurant",
    HOME: "Accueil",
    MENU: "Menu",
    SLOGAN: "Savourer l'authenticité, célébrer chaque moment.",
    CONTACT: "Nous contacter",
    SINCE: "Depuis 1982",
    OTHER: "Autre",
    TITLE_1: "Une cuisine authentique et savoureuse",
    PARAGRAPH_1:
      "Notre restaurant se distingue par une cuisine faite maison, utilisant des ingrédients frais et locaux pour garantir des saveurs authentiques à chaque bouchée. Nos chefs mettent un point d'honneur à allier tradition et créativité pour vous offrir une expérience culinaire inoubliable.",
    TITLE_2: "Un service chaleureux et attentionné",
    PARAGRAPH_2:
      "Le bien-être de nos clients est notre priorité. Notre équipe vous accueille avec le sourire et veille à ce que chaque visite soit un moment agréable. Que ce soit pour un repas en famille, entre amis ou un dîner d'affaires, nous nous engageons à rendre votre expérience mémorable.",
    TITLE_3: "Un cadre convivial et raffiné",
    PARAGRAPH_3:
      "Plongez dans une ambiance à la fois chaleureuse et élégante, propice à la détente. Notre décoration soignée, mariant confort et raffinement, fait de notre restaurant le lieu idéal pour se retrouver et savourer un délicieux repas dans un cadre agréable.",
    HOURS: "Horaires d'ouverture",
    HISTORY: "Notre histoire",
  },
  es: {
    LANGUAGE: "Idioma",
    APPLY: "Únete a nuestro equipo",
    THE_RESTAURANT: "El Restaurante",
    HOME: "Inicio",
    MENU: "Menú",
    SLOGAN: "Disfruta de la autenticidad, celebra cada momento.",
    CONTACT: "Contacto",
    SINCE: "Desde 1982",
    OTHER: "Otro",
    TITLE_1: "Cocina Auténtica y Sabrosa",
    PARAGRAPH_1:
      "Nuestro restaurante se destaca por sus platos caseros, elaborados con ingredientes frescos y locales para garantizar sabores auténticos en cada bocado. Nuestros chefs se enorgullecen de combinar tradición y creatividad para ofrecerte una experiencia gastronómica inolvidable.",
    TITLE_2: "Servicio Cálido y Atento",
    PARAGRAPH_2:
      "El bienestar de nuestros huéspedes es nuestra principal prioridad. Nuestro equipo te recibe con una sonrisa y se asegura de que cada visita sea agradable. Ya sea que cene con familia, amigos o por negocios, estamos comprometidos a hacer que tu experiencia sea memorable.",
    TITLE_3: "Un Ambiente Acogedor y Refinado",
    PARAGRAPH_3:
      "Sumérgete en un ambiente cálido y elegante, perfecto para la relajación. Nuestra decoración cuidadosamente diseñada, que combina comodidad y sofisticación, hace de nuestro restaurante el lugar ideal para disfrutar de una deliciosa comida en un entorno encantador.",
    HOURS: "Horarios de apertura",
    HISTORY: "Nuestra Historia",
  },
};

export default LABELS;
