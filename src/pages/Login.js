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
    <div className="bg-slate-300 w-full">
      <div className="flex flex-col items-center justify-center pb-40 ">
        <div className="flex text-center text-6xl font-bold p-6 mt-20 ">
          <h1>Login</h1>
        </div>
        <div className="relative p-8">
          <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-blak-600 bg-opacity-600 backdrop-blur-el bg-white rounded-md ">
            UserName
          </p>
          <input
            placeholder="UserName"
            type="text"
            onChange={handleUsernameChange}
            className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-opacity-40 backdrop-blur-el bg-white border-gray-300 rounded-md"
          />
        </div>
        <div className="relative">
          <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-blak-600 bg-opacity-600 backdrop-blur-el bg-white rounded-md ">
            Password
          </p>
          <input
            placeholder="UserName"
            type="password"
            onChange={handlePasswordChange}
            className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-opacity-40 backdrop-blur-el bg-white border-gray-300 rounded-md"
          />
        </div>

        <button
          className="inline-flex w-60 items-center justify-center bg-black px-6 py-4 text-lg mt-10
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
