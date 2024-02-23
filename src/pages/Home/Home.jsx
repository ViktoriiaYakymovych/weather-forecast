import { useState, useEffect } from "react";
import api from "../../api";
import Loader from "../../components/Loader/Loader";
import CitiesList from "../../components/CitiesList/CitiesList";
import SearchCityForm from "../../components/SearchCityForm/SearchCityForm";
// import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [weatherList, setweatherList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchWeatherList = async () => {
      try {
        setLoading(true);
        const { locations } = await api.fetchWeatherForCities(controller);
        setweatherList([...locations]);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(error.message);
        }
        setError(null);
      } finally {
        setLoading(false);
      }
    };
    fetchWeatherList();
    return () => {
      controller.abort();
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <h2>Weather forecast in different cities</h2>
      <SearchCityForm onSubmit={onSubmit} />
      {weatherList && <CitiesList weatherList={weatherList} />}
      {loading && <Loader loading={loading} />}
      {error && <p>Sorry, something went wrong. Please, try to update page.</p>}
    </section>
  );
};

export default Home;
