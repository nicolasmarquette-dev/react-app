import "./home.styles.css";
import restaurantImage from "../assets/restaurant_large.jpg";
import restaurantMediumImage from "../assets/restaurant_medium.jpg";
import restaurantSmallImage from "../assets/restaurant_small.jpg";
import LABELS from "../constants/labels";

export const Home = (): JSX.Element => {
  return (
    <>
      <div className="co">
        <div className="image">
          <picture>
            <source media="(max-width: 600px)" srcSet={restaurantSmallImage} />
            <source
              media="(max-width: 1200px)"
              srcSet={restaurantMediumImage}
            />
            <source media="(min-width: 1201px)" srcSet={restaurantImage} />
            <img src={restaurantImage} alt="restaurant" />
          </picture>
        </div>
        <div className="text-overlay">{LABELS.en.SLOGAN}</div>
        <div className="paragraph-list">
          <div>
            <h1>{LABELS.en.TITLE_1}</h1>
            {LABELS.en.PARAGRAPH_1}
          </div>
          <div className="separator"></div>
          <div>
            <h1>{LABELS.en.TITLE_2}</h1>
            {LABELS.en.PARAGRAPH_2}
          </div>
          <div className="separator"></div>
          <div>
            <h1>{LABELS.en.TITLE_3}</h1>
            {LABELS.en.PARAGRAPH_3}
          </div>
        </div>
      </div>
    </>
  );
};
