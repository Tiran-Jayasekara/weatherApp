import axios from "axios";

const WeatherService = () => {
  async function getWeatherData(lat, lon) {
    try {
      const data = await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=Metric&appid=b648bacc374f94f4f57cb5ec6ccee5e7`
        )
        .then((res) => res);

      if (data.status === 200) {
        return data;
      } else {
        console.log("false");
      }
    } catch (error) {
      console.log("Something wrong");
    }
  }

  async function forecastService(lat, lon) {
    try {
      const data = await axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=Metric&appid=b648bacc374f94f4f57cb5ec6ccee5e7`
        )
        .then((res) => res);

      if (data.status === 200) {
        return data;
      } else {
        console.log("false");
      }
    } catch (error) {
      console.log("Something wrong");
    }
  }

  return { getWeatherData, forecastService };
};

export default WeatherService;
