import { Input } from "antd";
import { useEffect, useState } from "react";
import Days from "../components/Days";
import WeatherService from "../service/WeatherService";

import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
// import wind from "../assets/wind.png";

const WeatherPage = () => {
  // eslint-disable-next-line
  useEffect(() => {
    getData();
    getForcastData();
    // eslint-disable-next-line
  },[]);

  const [lat, setLat] = useState(6.9329080948105535);
  const [lon, setLon] = useState(79.85731498520319);
  const [data, setData] = useState();
  const [forecastdata, setForecastData] = useState();
  const { getWeatherData, forecastService } = WeatherService();
  const [weatherIcon, setWeatherIcon] = useState();

  const getData = async () => {
    const weatherData = await getWeatherData(lat, lon);
    setData(weatherData.data);
    weatherImage(weatherData.data);
    console.log('weatherData Data:', weatherData);
    // console.log(weatherData.data);
  };

  const getForcastData = async () => {
    const forecastData = await forecastService(lat, lon);
    // console.log(forecastData.data);
    console.log('Forecast Data:', forecastData);
    setForecastData(forecastData.data);
  };

  const searchLatLon = (e) => {
    const [enteredLat, enteredLon] = e.split(",");
    if (enteredLon) {
      if (enteredLat) {
        setLat(enteredLat.trim());
        setLon(enteredLon.trim());
      } else {
        console.log("Error");
      }
    } else {
      console.log("Error");
    }
  };
  const searchButton = () => {
    getData();
    getForcastData();
  };

  const weatherImage = (wData) => {
    if (wData) {
      switch (wData.weather[0].icon) {
        case "01d":
        case "01n":
          setWeatherIcon(clear);
          break;

        case "02d":
        case "02n":
          setWeatherIcon(cloud);
          break;

        case "03d":
        case "03n":
          setWeatherIcon(drizzle);
          break;

        case "04d":
        case "04n":
          setWeatherIcon(drizzle);
          break;

        case "09d":
        case "09n":
          setWeatherIcon(rain);
          break;

        case "10d":
        case "10n":
          setWeatherIcon(rain);

          break;
        case "11d":
        case "11n":
          setWeatherIcon(rain);
          break;
        case "13d":
        case "13n":
          setWeatherIcon(snow);
          break;
        case "50d":
        case "50n":
          setWeatherIcon(humidity);
          break;

        default:
          break;
      }
    } else {
      console.log("Not Available");
    }
  };

  return (
    <div
      className="flex flex-col bg-white w-full h-full pb-40 justify-center items-center"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/02/66/38/15/240_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="pt-10 justify-center items-center ml-auto w-full mb-10 mr-20 md:px-20 px-4 rounded-xl">
        <Input.Search
          placeholder="Enter Longitude and Latitude"
          onChange={(e) => {
            searchLatLon(e.target.value);
          }}
          onSearch={() => {
            searchButton();
          }}
          allowClear
        />
      </div>
      <div className="flex flex-1 w-full  md:flex-row flex-col">
        <div className="flex flex-col md:ml-10 ml-0">
          <div className="flex flex-row h-auto w-auto md:px-10 px-4 py-4 bg-blue-200 bg-opacity-50 backdrop-filter backdrop-blur-xl  md:ml-10 md:mx-0 mx-2 mb-8 rounded-2xl justify-between">
            <div className="flex flex-col max-full mt-0 md:mr-10 mr-2 text-left justify-center">
              <h1 className="text-xl font-bold mt-4">
                {data ? data.name : ""}&nbsp;
              </h1>
              <div className="flex flex-col mt-2">
                <div className="w-full text-left">
                  <h1 className="text-4xl font-bold mt-8 mr-10">
                    {data ? data.main.temp : ""}C'
                  </h1>
                </div>

                <div className="w-20 mr-auto">
                  <img src={weatherIcon} alt="Weather Icon" />
                </div>
              </div>

              <h1 className="text-4xl font-bold mt-6">
                {data ? data.weather[0].main : ""}
              </h1>

              <h1 className="text-xl font-bold mt-2 mb-4">
                {data ? data.weather[0].description : ""}
              </h1>
            </div>
            <div className="flex flex-row w-full mb-auto mt-20 font-bold justify-end items-end">
              <div className="flex flex-col justify-center text-left mr-4">
                <h1 className="">{data ? data.main.humidity : ""}&nbsp;%</h1>
                <h1 className="">Humidity</h1>

                <h1 className="mt-10">
                  {data ? data.main.pressure : ""}&nbsp;hPa
                </h1>
                <h1 className="">Pressure</h1>
              </div>

              <div className="flex flex-col justify-center text-left">
                <h1 className="">{data ? data.wind.speed : ""}&nbsp; m/sec</h1>
                <h1 className="">Wind_Speed</h1>

                <h1 className="mt-10">{data ? data.clouds.all : ""}&nbsp; %</h1>
                <h1 className="">Cloudiness</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 w-full md:ml-20 mx-auto items-center justify-center">
          <div className="h-auto w-auto">
            {forecastdata && <Days forecastdata={forecastdata} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
