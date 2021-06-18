import { useState } from "react";
import GlobalStyle from "../src/assets/GlobalStyle";
import axios from "axios";
import Router from "./Router";
import WeatherContext from "./contexts/context";

function App() {
  const [temp, setTemp] = useState([]);
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");

  const getCity = async () => {
    try {
      const temp = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&lang=fr&appid=98b7465353d383f3d0f3bc4a284a48ae`
      );
      setCity(temp.data.name);
      setTemp(temp.data.main.temp);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        temp,
        setTemp,
        city,
        setCity,
        input,
        setInput,
        loading,
        setLoading,
        getCity,
      }}
    >
      <GlobalStyle />
      <Router />
    </WeatherContext.Provider>
  );
}

export default App;
