import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Loader from "../../components/Loader/Loader";
import Forecast from "../../components/Forecast/Forecast";
import { HomeSection } from "../Home/Home.styled";

const WeatherForCity = () => {
  const [forecast, setForecast] = useState([]);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { city } = useParams();

  useEffect(() => {
    if (!city) {
      return;
    }
    const controller = new AbortController();
    const cityQuery = city.slice(1);

    async function fetchForecastForCity() {
      try {
        setLoading(true);
        const resp = await api.fetchCityWeatherForDays(controller, cityQuery);
        if (!resp) {
          return;
        }
        const { address, days } = resp;
        setAddress(address);
        setForecast(days);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchForecastForCity();
    return () => {
      controller.abort();
    };
  }, [city]);

  return (
    <HomeSection>
      <h2>Weather forecast in {address}</h2>
      {forecast && <Forecast forecast={forecast} />}
      {loading && <Loader loading={loading} />}
      {error && <p>Sorry, something went wrong. Please, try to update page.</p>}
    </HomeSection>
  );
};

export default WeatherForCity;
