// import api from "./api";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../AppLayout/AppLayout";

const Home = lazy(() => import("../../pages/Home/Home"));
const WeatherForCity = lazy(() =>
  import("../../pages/WeatherForCity/WeatherForCity")
);

//raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Monochrome/snow.png - шлях до іконди прогнозу погоди

const App = () => {
  // api.fetchCityWeatherForToday();
  // api.fetchCityWeatherForDays();

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/:city" element={<WeatherForCity />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
