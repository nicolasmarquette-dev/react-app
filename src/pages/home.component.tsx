import "./home.styles.css";
import restaurantImage from "../assets/restaurant.jpg";
import restaurantMediumImage from "../assets/restaurant_medium.jpg";
import restaurantSmallImage from "../assets/restaurant_small.jpg";

export const Home = (): JSX.Element => {
  return (
    <div>
      <div className="image">
        <picture>
          <source media="(max-width: 600px)" srcSet={restaurantSmallImage} />
          <source media="(max-width: 1200px)" srcSet={restaurantMediumImage} />
          <source media="(min-width: 1201px)" srcSet={restaurantImage} />
          <img src={restaurantImage} alt="restaurant" />
        </picture>
      </div>
    </div>
  );
};
