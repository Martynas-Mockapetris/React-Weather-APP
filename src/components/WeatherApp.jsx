import sunny from '../assets/img/sunny.png';
import cloudy from '../assets/img/cloudy.png';
import rainy from '../assets/img/rainy.png';
import snowy from '../assets/img/snowy.png';

const WeatherApp = () => {
  return (
    <div className="container">
      <div className="weather-app">
        <div className="search">
          <div className="search-top">
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">Vilnius</div>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Enter Location" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="weather">
          <img src={sunny} alt="sunny" />
          <div className="weather-type">Clear</div>
          <div className="temp">28°C</div>
        </div>
        <div className="weather-date">
          <p>Wed, 28 Oct</p>
        </div>
        <div className="weather-data">
          <div className="humidity">
            <div className="data-name">Humidity</div>
            <i className="fa-solid fa-droplet"></i>
            <div className="data">48%</div>
          </div>
          <div className="wind">
            <div className="data-name">Wind</div>
            <i className="fa-solid fa-wind"></i>
            <div className="data">4 km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
