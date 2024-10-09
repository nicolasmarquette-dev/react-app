/* eslint-disable */
import "./home.styles.css";
import restaurantImage from "../assets/restaurant_large.jpg";
import hoursImage from "../assets/hours.jpg";

import LABELS, { LanguageKeys } from "../constants/labels";
import GoldenLogo from "../assets/golden-logo.webp";
import VintageLogo from "../assets/vintage-logo.png";
import EagleLogo from "../assets/eagle-logo.png";
import { Hours } from "../components/hours.component";

interface HomeProps {
  language: LanguageKeys;
}

export const Home = (props: HomeProps): JSX.Element => {
  return (
    <>
      <div className="home">
        <div className="image">
          <picture>
            <img src={restaurantImage} alt="restaurant" />
          </picture>
        </div>
        <div className="text-overlay">{LABELS[props.language].SLOGAN}</div>
        <div className="paragraph-list">
          <div>
            <img src={GoldenLogo} />
            <h1>{LABELS[props.language].TITLE_1}</h1>
            {LABELS[props.language].PARAGRAPH_1}
          </div>
          <div className="separator"></div>
          <div>
            <img src={VintageLogo} />
            <h1>{LABELS[props.language].TITLE_2}</h1>
            {LABELS[props.language].PARAGRAPH_2}
          </div>
          <div className="separator"></div>
          <div>
            <img src={EagleLogo} />
            <h1>{LABELS[props.language].TITLE_3}</h1>
            {LABELS[props.language].PARAGRAPH_3}
          </div>
        </div>
        <div className="image">
          <picture>
            <img src={hoursImage} alt="restaurant" />
          </picture>
        </div>
        <div className="hours-overlay">
          <Hours language={props.language} />
        </div>
      </div>
    </>
  );
};
