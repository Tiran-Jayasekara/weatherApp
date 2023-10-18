import axios from "axios";
import React from "react";

const WeatherService = () => {


  async function getWeatherData(lat , lon) {

    try {
      const data = await axios
        .get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=Metric&appid=7d876e4a53a29deee9c0eebc85e7fc76`).then((res) => res);
      
      if (data.status === 200) {
        return data;
      } else {
        console.log("false");
      }
    } catch (error) {
        console.log("Something wrong");
    }
  }
  return {getWeatherData};
};

export default WeatherService;
