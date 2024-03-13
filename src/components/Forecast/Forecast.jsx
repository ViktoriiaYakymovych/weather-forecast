import {List, Item}from '../CitiesList/CitiesList.styled'

const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Forecast = ({ forecast }) => {
  return (
    <List>
      {forecast.map((day) => {
        const date = new Date(day.datetimeEpoch * 1000);
        const currentDayIndex = date.getDay();
        const currentDay = DAYS_OF_WEEK[currentDayIndex];

        let uv = "";
        if (day.uvindex <= 2) {
          uv = "Low";
        } else if (day.uvindex > 2 && day.uvindex <= 5) {
          uv = "Medium";
        } else if (day.uvindex > 5 && day.uvindex <= 7) {
          uv = "High";
        } else if (day.uvindex > 7 && day.uvindex <= 10) {
          uv = "Very high";
        } else {
          uv = "Extremely high";
        }

        return (
          <Item key={day.datetime}>
            <div>
              <div>
                <p>{currentDay}</p>
                <p>{day.datetime}</p>
              </div>
              <div>
                <p>{day.conditions}</p>
                <img
                  src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/${day.icon}.png`}
                  alt={day.icon}
                />
              </div>
              <p>
                {day.tempmax}&deg;C / {day.tempmin}&deg;C
              </p>
            </div>
            <div>
              <p>{day.description}</p>
              <p>Feels like: {day.feelslike}&deg;C</p>
              <p>
                UV Index: {day.uvindex} {uv}
              </p>
              <p>Windspeed: {day.windspeed} km/h</p>
            </div>
          </Item>
        );
      })}
    </List>
  );
};

export default Forecast;
