import { useEffect, useState } from "react";

import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import humidity from "../assets/humidity.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
// import wind from "../assets/wind.png";

const ForecastDay = ({ day, index }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [weatherIcon, setWeatherIcon] = useState();

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  useEffect(() => {
    weatherImage();
  });
  const weatherImage = () => {
    if (day) {
      switch (day.entries[0].weather[0].icon) {
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
    <div className="flex flex-col w-auto md:p-4 p-2 bg-slate-200 bg-opacity-50 backdrop-filter rounded-xl md:m-4 m-1 justify-between cursor-pointer">
      <div className="md:text-xl text-xs font-bold text-center mb-2">
        {day.dayName}
      </div>
      <div className="flex flex-row justify-between md:p-2 p-0 ">
        <div className="md:mr-6 mr-0 text-xm">
          {isHidden ? (
            <div className="flex flex-row justify-between w-full md:text-sm text-xs ">
              <div className="md:mr-2 mr-0 text-center font-bold md:mx-2 mx-0">
                <h1>Weather</h1>
                {day.entries[0].weather[0].main}
              </div>
              <div className="mr-2 text-center font-bold mx-2 w-10">
                <img src={weatherIcon} alt="Weather Icon" />
              </div>

              <div className="ml-2 text-center font-bold mx-2">
                <h1>Temp</h1>
                {day.entries[0].main.temp}
              </div>
            </div>
          ) : (
            ""
          )}

          {!isHidden && (
            <div className="md:mx-2 mx-2 text-xs">
              <p className="text-center font-bold">Time</p>
              {day.entries.map((data) => (
                <div key={data.dt} className="flex flex-col">
                  {data.dt_txt.split(" ")[1]}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="felx flex-col justify-center items-center text-center text-xm">
          {!isHidden && (
            <div className="md:mr-8 mr-2 text-xs">
              <p className="text-center font-bold">Weather</p>
              {day.entries.map((data) => (
                <div key={data.dt} className="flex flex-col">
                  {data.weather[0].main}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="felx flex-col justify-center items-center text-center text-xs">
          {!isHidden && (
            <div className="md:mr-6 mr-2">
              <p className="text-center font-bold">Tem</p>
              {day.entries.map((data) => (
                <div key={data.dt} className="flex flex-col">
                  {data.main.temp}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <button className="black_btn mt-2" onClick={toggleVisibility}>
        {isHidden ? "See All" : "Hide"}
      </button>
    </div>
  );
};

export default ForecastDay;
