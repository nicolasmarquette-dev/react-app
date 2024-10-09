export type LanguageKeys = "en" | "fr";

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
    SLOGAN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor ex, venenatis id velit sed.",
    CONTACT: "Contact",
    SINCE: "Since 1982",
    OTHER: "Other",
    TITLE_1: "First title",
    PARAGRAPH_1:
      "Cras sit amet lobortis leo, ut auctor eros. In id ornare eros. Duis turpis elit, feugiat non tortor ac, finibus tincidunt tellus. Quisque ut massa in velit congue venenatis semper in ligula. Mauris euismod congue suscipit. Aenean efficitur elementum lacinia.",
    TITLE_2: "Second title",
    PARAGRAPH_2:
      "Finibus tincidunt tellus. Quisque ut massa in velit congue venenatis semper in ligula. Mauris euismod congue suscipit. Aenean efficitur elementum lacinia. Aliquam commodo orci nibh, et congue sapien pharetra sit amet. Vivamus efficitur orci sit amet iaculis pulvinar.",
    TITLE_3: "Third title",
    PARAGRAPH_3:
      "Cras sit amet lobortis leo, ut auctor eros. In id ornare eros. Duis turpis elit, feugiat non tortor ac, finibus tincidunt tellus. Quisque ut massa in velit congue venenatis semper in ligula. Mauris euismod congue suscipit. Aenean efficitur elementum lacinia. Aliquam commodo orci nibh, et congue sapien pharetra sit amet. Vivamus efficitur orci sit amet iaculis pulvinar.",
    HOURS: "Opening hours",
    HISTORY: "Our History",
  },
  fr: {
    LANGUAGE: "Langue",
    APPLY: "Postuler dans notre équipe",
    THE_RESTAURANT: "Le Restaurant",
    HOME: "Accueil",
    MENU: "Menu",
    SLOGAN: "Tout notre savoir faire dans votre assiette",
    CONTACT: "Nous contacter",
    SINCE: "Depuis 1982",
    OTHER: "Autre",
    TITLE_1: "Premier Titre",
    PARAGRAPH_1:
      "Cras sit amet lobortis leo, ut auctor eros. In id ornare eros. Duis turpis elit, feugiat non tortor ac, finibus tincidunt tellus. Quisque ut massa in velit congue venenatis semper in ligula. Mauris euismod congue suscipit. Aenean efficitur elementum lacinia.",
    TITLE_2: "Second titre",
    PARAGRAPH_2:
      "Finibus tincidunt tellus. Quisque ut massa in velit congue venenatis semper in ligula. Mauris euismod congue suscipit. Aenean efficitur elementum lacinia. Aliquam commodo orci nibh, et congue sapien pharetra sit amet. Vivamus efficitur orci sit amet iaculis pulvinar.",
    TITLE_3: "Troisième titre",
    PARAGRAPH_3:
      "Cras sit amet lobortis leo, ut auctor eros. In id ornare eros. Duis turpis elit, feugiat non tortor ac, finibus tincidunt tellus. Quisque ut massa in velit congue venenatis semper in ligula. Mauris euismod congue suscipit. Aenean efficitur elementum lacinia. Aliquam commodo orci nibh, et congue sapien pharetra sit amet. Vivamus efficitur orci sit amet iaculis pulvinar.",
    HOURS: "Horaires d'ouverture",
    HISTORY: "Notre histoire",
  },
};

export default LABELS;
