import React, { useEffect, useState } from 'react'
import "../scss/styles/cityWeather.scss";
// import SunriseSunset from '../components/SunriseSunset';
// import Details from '../components/Details';
// import Forecast from '../components/Forecast';
import { formatToLocalTime, getFormattedWeather, iconUrlFromCode } from '../services/api'
// import sunrise from "../sunrise.png";
// import sunset from "../sunset.png";
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
import Spinner from '../components/Spinner';
import Error404 from './Error404';

const CityWeather = () => {
  const [unit, setUnit] = useState("metric");
  const [weather, setWeather] = useState();

  useEffect(() => {
    const query = window.location.pathname.substring(9);
    const fetchWeather = async () => {
      const data = await getFormattedWeather({ q: query, units: unit });
      setWeather(data)
    }
    fetchWeather();

  }, [unit])

  if (!weather) {
    return <Spinner />;
  }
  if (weather?.temp === undefined) {
    return <Error404 />;
  }

  return (
    <div className="weatherPage">
      <div className="cityWeather">
        <div className="left">
          <LeftSide weather={weather} iconUrlFromCode={iconUrlFromCode} formatToLocalTime={formatToLocalTime} unit={unit} setUnit={setUnit} />
        </div>
        <div className="right">
          <RightSide weather={weather} iconUrlFromCode={iconUrlFromCode} formatToLocalTime={formatToLocalTime} unit={unit} setUnit={setUnit} />
        </div>
      </div>
    </div>
  )
}

export default CityWeather;
