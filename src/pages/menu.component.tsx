import "./menu.styles.css";
import menuImage from "../assets/menu_1.jpg";
import drinksImage from "../assets/menu_2.jpg";

export const Menu = (): JSX.Element => {
  return (
    <div className="menu-container">
      <picture>
        <img src={menuImage} alt="menu" />
      </picture>
      <picture>
        <img src={drinksImage} alt="drinks" />
      </picture>
    </div>
  );
};
