import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    if (username === "admin") {
      if (password === "admin") {
        console.log("Login Success");
        nav("/weather");
      } else {
        console.log("Password is Wrong");
      }
    } else {
      console.log("UserName is Wrong");
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div
      className="flex flex-col bg-white w-full h-screen pb-20 justify-center items-center"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/02/66/38/15/240_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center bg-slate-100 bg-opacity-50 backdrop-filter backdrop-blur-xl md:p-8 md:m-0 m-4 rounded-2xl">
        <div className="flex text-center text-4xl font-bold p-4 md:mt-2 mt-8 ">
          <h1>LOGIN</h1>
        </div>
        <div className="p-6 py-6 ">
          <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-blak-600 bg-opacity-600 backdrop-blur-el bg-white rounded-md ">
            UserName
          </p>
          <input
            placeholder="UserName"
            type="text"
            onChange={handleUsernameChange}
            className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 px-20 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-opacity-40 backdrop-blur-el bg-white border-gray-300 rounded-md"
          />
        </div>
        <div className="p-6">
          <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-blak-600 bg-opacity-600 backdrop-blur-el bg-white rounded-md ">
            Password
          </p>
          <input
            placeholder="password"
            type="password"
            onChange={handlePasswordChange}
            className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 px-20 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-opacity-40 backdrop-blur-el bg-white border-gray-300 rounded-md"
          />
        </div>

        <button
          className="inline-flex w-auto px-20 items-center justify-center bg-black py-2 text-lg mt-0 rounded-3xl mb-12
                     text-white  uppercase  rounded-mdf"
          onClick={() => {
            login();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
