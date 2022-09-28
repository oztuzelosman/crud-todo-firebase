// styles
import {useState} from 'react'
import "./Navbar.css";
import "./components/Search.js"
import Search from "./components/Search.js";
import Current from "./curr-weather/Current.js"
import { WEATHER_API_URL, WEATHER_API_KEY } from "./SearchApi.js";

export default function Navbar() {
  const [forecast, setForecast] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = (searchData)=>{
    const [lat, lon] = searchData.value.split(" ")

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );  
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  }


  return (
    <div className="navbar">
    <nav>
    
    <a href=" " className="brand">
    <h1>
      <span className='brand-todo'>Todo </span>
      <span className='brand-list'>List </span>
      <span className='brand-app'>App</span>
    </h1>
    </a>

    <div className='weather-section'> 
      <Search onSearchChange={handleOnSearchChange}/>
      { currentWeather && <Current data={currentWeather}/>}
    </div>

    <a href=" ">Weather Info</a>
    </nav>
    </div>
  );
}
