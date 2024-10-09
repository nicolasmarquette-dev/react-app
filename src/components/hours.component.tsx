import LABELS from "../constants/labels";
import "./hours.styles.css";

export const Hours = (): JSX.Element => {
  const restaurantHours = {
    Monday: "9:00 AM - 8:00 PM",
    Tuesday: "9:00 AM - 8:00 PM",
    Wednesday: "9:00 AM - 8:00 PM",
    Thursday: "9:00 AM - 10:00 PM",
    Friday: "9:00 AM - 11:00 PM",
    Saturday: "10:00 AM - 11:00 PM",
    Sunday: "Closed",
  };

  return (
    <div className="restaurant-hours">
      <h2>{LABELS.en.HOURS}</h2>
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
