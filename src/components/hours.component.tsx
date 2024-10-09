import LABELS, { LanguageKeys } from "../constants/labels";
import "./hours.styles.css";

interface HoursProps {
  language: LanguageKeys;
}

export const Hours = (props: HoursProps): JSX.Element => {
  const restaurantHours = {
    Monday: "09:00 AM - 08:00 PM",
    Tuesday: "09:00 AM - 08:00 PM",
    Wednesday: "09:00 AM - 08:00 PM",
    Thursday: "09:00 AM - 10:00 PM",
    Friday: "09:00 AM - 11:00 PM",
    Saturday: "10:00 AM - 11:00 PM",
    Sunday: "Closed",
  };

  return (
    <div className="restaurant-hours">
      <h2>{LABELS[props.language].HOURS}</h2>
      <ul>
        {Object.entries(restaurantHours).map(([day, hours]) => (
          <li key={day}>
            <strong>{day}: </strong>
            {hours}
          </li>
        ))}
      </ul>
    </div>
  );
};
