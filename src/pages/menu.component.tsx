import "./menu.styles.css";
import menuImage from "../assets/menu_1.jpg";
import drinksImage from "../assets/menu_2.jpg";

export const Menu = (): JSX.Element => {
  return (
    <div className="menu-container">
      <img src={menuImage} alt="menu" />
      <img src={drinksImage} alt="drinks" />
    </div>
  );
};
