import { NavLink } from "react-router-dom";

const CitiesList = ({ weatherList }) => {
  return (
    <ul>
      {weatherList.map((city) => {
        const tempMax = Math.round((city.days[0].tempmax - 32) / 1.8);
        const tempMin = Math.round((city.days[0].tempmin - 32) / 1.8);
        return (
          <li key={city.address}>
            <h3>{city.address}</h3>
            <img
              src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${city.days[0].icon}.png`}
              alt={city.days[0].icon}
            />
            <p>{city.days[0].conditions}</p>
            <p>
              {tempMin}&deg;C - {tempMax}&deg;C
            </p>
            <NavLink to={`/:${city.address}`}>See detailed forecast</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default CitiesList;
