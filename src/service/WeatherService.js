import axios from "axios";

const WeatherService = () => {
  async function getWeatherData(lat, lon) {
    try {
      const data = await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=Metric&appid=7d876e4a53a29deee9c0eebc85e7fc76`
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
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=Metric&appid=7297e3a0e53c94f18dd547f8df9167eb`
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
