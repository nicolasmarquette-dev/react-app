import "./home.styles.css";
import restaurantImage from "../assets/restaurant_large.jpg";
import restaurantMediumImage from "../assets/restaurant_medium.jpg";
import restaurantSmallImage from "../assets/restaurant_small.jpg";
import LABELS from "../constants/labels";
import GoldenLogo from "../assets/golden-logo.webp";
import VintageLogo from "../assets/vintage-logo.png";
import EagleLogo from "../assets/eagle-logo.png";

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
            <img src={GoldenLogo} />
            <h1>{LABELS.en.TITLE_1}</h1>
            {LABELS.en.PARAGRAPH_1}
          </div>
          <div className="separator"></div>
          <div>
            <img src={VintageLogo} />
            <h1>{LABELS.en.TITLE_2}</h1>
            {LABELS.en.PARAGRAPH_2}
          </div>
          <div className="separator"></div>
          <div>
            <img src={EagleLogo} />
            <h1>{LABELS.en.TITLE_3}</h1>
            {LABELS.en.PARAGRAPH_3}
          </div>
        </div>
      </div>
    </>
  );
};
