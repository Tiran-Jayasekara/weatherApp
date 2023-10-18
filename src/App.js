import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import WeatherPage from "./pages/WeatherPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/weather" element={<WeatherPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
