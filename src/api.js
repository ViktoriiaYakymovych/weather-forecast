import axios from "axios";

axios.defaults.baseURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services";
const API_KEY = "E4W5RGXKFH3UTAD62NKRRA3L3";

const fetchWeatherForCities = async (
  controller,
  cities = "London%2CUK%7CParis%2CFrance%7CTokyo%2CJapan"
) => {
  try {
    const { data } = await axios.get(
      `/timelinemulti?key=${API_KEY}&locations=${cities}`,
      { signal: controller.signal }
    );
    return data;
  } catch (error) {
    if (error.code !== "ERR_CANCELED") {
      console.log(error.message);
    }
  }
};

const fetchCityWeatherForToday = async (controller, city = "Berlin") => {
  try {
    const { data } = await axios.get(
      `/timeline/${city}/today?unitGroup=metric&include=days
&key=${API_KEY}&contentType=json`,
      { signal: controller.signal }
    );
    console.log(data);
    return data;
  } catch (error) {
    if (error.code !== "ERR_CANCELED") {
      console.log(error.message);
    }
  }
};

const fetchCityWeatherForDays = async (controller, city = "Berlin") => {
  try {
    const { data } = await axios.get(
      `/timeline/${city}/next7days?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`,
      { signal: controller.signal }
    );
    return data;
  } catch (error) {
    if (error.code !== "ERR_CANCELED") {
      console.log(error.message);
    }
  }
};

const api = {
  fetchWeatherForCities,
  fetchCityWeatherForDays,
  fetchCityWeatherForToday,
};

export default api;

/* request FROM DATE TO DATE for the city:
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[city]/[date1]/[date2]?unitGroup=metric&amp;include=days&amp;key=YOUR_API_KEY&amp;contentType=json

for example:
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK/2020-10-01/2020-12-31?key=YOUR_API_KEY 
*/

/*
request for today's weather in the city:
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[city]/today?unitGroup=metric&amp;include=days
&amp;key=YOUR_API_KEY&amp;contentType=json


*/
