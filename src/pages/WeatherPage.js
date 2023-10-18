import { Input } from "antd";
import React, { useEffect, useState } from "react";
import Days from "../components/Days";
import WeatherService from "../service/WeatherService";

import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import wind from "../assets/wind.png";

const WeatherPage = () => {
  // const lat = 6.9329080948105535;
  // const lon = ;
  const [lat, setLat] = useState(6.9329080948105535);
  const [lon, setLon] = useState(79.85731498520319);
  const [data, setData] = useState();
  const { getWeatherData } = WeatherService();
  const [weatherIcon, setWeatherIcon] = useState();

  const getData = async () => {
    const weatherData = await getWeatherData(lat, lon);
    setData(weatherData.data);
    weatherImage(weatherData.data);
  };

  const searchLatLon = (e) => {
    const [enteredLat, enteredLon] = e.split(",");
    if (enteredLon) {
      if (enteredLat) {
        setLat(enteredLat.trim());
        setLon(enteredLon.trim());
        console.log(enteredLat.trim());
        console.log(enteredLon.trim());
      } else {
        console.log("Error");
      }
    } else {
      console.log("Error");
    }
  };
  const searchButton = () => {
    console.log("searchButtonClick");
    getData();
  };

  const weatherImage = (wData) => {
    if (wData) {
      console.log(wData);
      switch (wData.list[0].weather[0].icon) {
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

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <div
      className=" bg-white w-full h-screen"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/02/66/38/15/240_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="pt-20 justify-center items-center ml-auto w-80 mb-10 mr-20">
        <Input.Search
          placeholder="Search..."
          onChange={(e) => {
            searchLatLon(e.target.value);
          }}
          onSearch={() => {
            searchButton();
          }}
          allowClear
          
        />
      </div>
      <div className="flex">
        <div className="flex flex-auto">
          <div className="h-auto w-auto px-40 py-8 bg-blue-200 bg-opacity-50 backdrop-filter backdrop-blur-xl justify-center items-center mx-auto m-0 mb-8 rounded-2xl">
            <div className="flex flex-col justify-center items-center mt-4">
              <h1 className="text-2xl font-bold mt-4">
                Today&nbsp;&nbsp;
                {data && data.city ? data.city.name : ""}&nbsp; Weather
              </h1>
              <h1 className="text-6xl font-bold mt-8">
                {data && data.list ? data.list[0].main.temp : ""} C'
              </h1>

              <img src={weatherIcon} alt="Weather Icon" />

              <h1 className="text-6xl font-bold mt-8">
                {data && data.list ? data.list[0].weather[0].main : ""}
              </h1>

              <h1 className="text-2xl font-bold mt-8">
                {data && data.list ? data.list[0].weather[0].description : ""}
              </h1>
            </div>
            <div className="flex flex-row justify-between mb-auto mt-20 font-bold">
              <div className="flex flex-col justify-center text-center">
                <h1 className="">
                  {data && data.list ? data.list[0].main.humidity : ""}&nbsp;%
                </h1>
                <h1 className="">Humidity</h1>

                <h1 className="mt-10">
                  {data && data.list ? data.list[0].main.pressure : ""}&nbsp;hPa
                </h1>
                <h1 className="">Pressure</h1>
              </div>

              <div className="flex flex-col justify-center text-center">
                <h1 className="">
                  {data && data.list ? data.list[0].wind.speed : ""}&nbsp; m/sec
                </h1>
                <h1 className="">Wind Speed</h1>

                <h1 className="mt-10">
                  {data && data.list ? data.list[0].clouds.all : ""}&nbsp; %
                </h1>
                <h1 className="">Cloudiness</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-auto w-32 mr-20 ">
          <div className="flex flex-col h-80 w-auto bg-blue-400 bg-opacity-50 backdrop-filter backdrop-blur-xl justify-center items-center mx-auto m-4 rounded-2xl px-6">
            {/* {data &&
              data.list.map((item, index) => (
                <Days date={item.dt} celsius={item.main.temp} key={index} />
              ))} */}

            <div className="mx-auto items-center mt-auto text-center justify-center mb-4">
              <button className="black_btn text-center justify-center mt-4">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
