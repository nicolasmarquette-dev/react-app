import { LanguageKeys } from "../constants/labels";
import "./language-selector.styles.css";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
interface LanguageSelectorProps {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageKeys>>;
}
export const LanguageSelector = (props: LanguageSelectorProps): JSX.Element => {
  const LANGUAGES = ["fr", "en"];

  const getLanguageLabel = (language: string) => {
    switch (language) {
      case "en":
        return "English";
      case "fr":
        return "Français";
      default:
        return "";
    }
  };

  return (
    <Select
      value={props.language}
      onChange={(e: SelectChangeEvent<string>) => {
        props.setLanguage(e.target.value as LanguageKeys);
        localStorage.setItem("language", e.target.value);
      }}
      sx={{
        color: "white",
        ".MuiSelect-icon": {
          color: "white",
        },
        minWidth: "120px", // Largeur minimale fixe pour éviter le décalage
        width: "auto", // Largeur qui s'adapte sans être inférieure
      }}
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 200, // Limite la hauteur du menu
          },
        },
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left",
        },
      }}
    >
      {LANGUAGES.map((lang) => (
        <MenuItem
          key={lang}
          value={lang}
          sx={{
            minWidth: "120px", // Largeur minimale des items
          }}
        >
          {getLanguageLabel(lang)}
        </MenuItem>
      ))}
    </Select>
  );
};
