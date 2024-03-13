import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../../api";
import Loader from "../../components/Loader/Loader";
import CitiesList from "../../components/CitiesList/CitiesList";
import SearchCityForm from "../../components/SearchCityForm/SearchCityForm";
import { HomeSection } from "./Home.styled";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [weatherList, setweatherList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get("city") ?? "";
  console.log(value);

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

    // useEffect(() => {
    //   if (value === ''){
    //     return
    //   }

    //   const controller = new AbortController();

    //   const fetchWeatherList = async () => {
    //     try {
    //       setLoading(true);
    //       const { locations } = await api.fetchWeatherForCities(controller);
    //       setweatherList([...locations]);
    //     } catch (error) {
    //       if (error.code !== "ERR_CANCELED") {
    //         setError(error.message);
    //       }
    //       setError(null);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
    //   fetchWeatherList();
    //   return () => {
    //     controller.abort();
    //   };
    // }, [value]);

  const onSubmit = (e) => {
    e.preventDefault();
    const newCity = e.target.elements.city.value.trim();
    if (newCity === "") {
      return toast.error(
        `Sorry, we can't submit empty request. Please, write what You want to search.`
      );
    }
    setSearchParams({ city: newCity });
    setweatherList([]);
    e.target.reset();
  };

  return (
    <HomeSection>
      <h2>Weather forecast in different cities</h2>
      <SearchCityForm onSubmit={onSubmit} />
      {weatherList && <CitiesList weatherList={weatherList} />}
      {loading && <Loader loading={loading} />}
      {error && <p>Sorry, something went wrong. Please, try to update page.</p>}
    </HomeSection>
  );
};

export default Home;
