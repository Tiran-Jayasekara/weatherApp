import { Input } from "antd";
import React, { useState } from "react";
import Days from "../components/Days";

const WeatherPage = () => {
  const [data, setData] = useState([
    {
      date: "Tommorow",
      celsius: "24C'",
    },
    {
      date: "day after Tommorow",
      celsius: "26C'",
    },
    {
      date: "day after Tommorow",
      celsius: "27C'",
    },
  ]);

  return (
    <div
      className=" bg-white w-full h-screen"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/02/66/38/15/240_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="pt-10 justify-center items-center ml-auto w-80 mb-10 mr-20">
        <Input.Search placeholder="Search..." onChange={() => {}} allowClear />
      </div>
      <div className="flex">
        <div className="flex flex-auto">
          <div className="h-auto w-auto px-40 py-10 bg-blue-200 bg-opacity-50 backdrop-filter backdrop-blur-xl justify-center items-center mx-auto m-4 rounded-2xl">
            <div className="flex flex-col justify-center items-center mt-4">
              <h1 className="text-2xl font-bold mt-4">Today Colombo Weather</h1>
              <h1 className="text-6xl font-bold mt-8">24C'</h1>
            </div>
            <div className="flex flex-row justify-between mb-auto mt-20 font-bold">
              <div className="flex flex-col justify-center text-center">
                <h1 className="">25</h1>
                <h1 className="">Humidity</h1>
              </div>

              <div className="flex flex-col justify-center text-center">
                <h1 className="">25Kmp/H</h1>
                <h1 className="">Wind Speed</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-auto w-32 mr-20 ">
          <div className="flex flex-col h-auto w-auto bg-blue-400 bg-opacity-50 backdrop-filter backdrop-blur-xl justify-center items-center mx-auto m-4 rounded-2xl px-6">
           
              {data.map((item) => (
                <Days date={item.date} celsius={item.celsius} />
              ))}
            
            <div className="mx-auto items-center text-center justify-center">
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
