import { Item, List, Link } from "./CitiesList.styled";

const CitiesList = ({ weatherList }) => {
  return (
    <List>
      {weatherList.map((city) => {
        const tempMax = Math.round((city.days[0].tempmax - 32) / 1.8);
        const tempMin = Math.round((city.days[0].tempmin - 32) / 1.8);
        return (
          <Item key={city.address}>
            <h3>{city.address}</h3>
            <img
              src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${city.days[0].icon}.png`}
              alt={city.days[0].icon}
            />
            <p>{city.days[0].conditions}</p>
            <p>
              {tempMin}&deg;C - {tempMax}&deg;C
            </p>
            <Link to={`/:${city.address}`}>See detailed forecast</Link>
          </Item>
        );
      })}
    </List>
  );
};

export default CitiesList;
