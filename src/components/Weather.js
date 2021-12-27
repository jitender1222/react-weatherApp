import React, { useEffect, useState } from "react";
import "./css/style.css";
import Weathercard from "./Weathercard";
const Weather = () => {
  const [searchinfo, setsearchinfo] = useState("delhi");
  const [tempInfo,settempInfo]=useState("");
  const changeInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchinfo}&units=metric&appid=d15c1d923d610ce3c1fea8b5502d36c7`;

      let res = await fetch(url);
      let data = await res.json();
      const { temp,humidity,pressure }=data.main;
      const {main:weathermood}=data.weather[0];
      const {name}=data;
      const {speed}=data.wind;
      const {country,sunset}=data.sys; 

      const mynewweatherInfo={
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      settempInfo(mynewweatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    changeInfo();
  }, []);
  return (
    <>
      <div className="box">
        <div className="box-info">
          <input
            type="search"
            placeholder="search.."
            className="inp"
            value={searchinfo}
            onChange={(e) => {
              setsearchinfo(e.target.value);
            }}
          ></input>
          <button
            type="text"
            placeholder="search"
            className="btn"
            onClick={changeInfo}
          >
            Search
          </button>
        </div>
      </div>
      <Weathercard tempInfo={tempInfo}/>
    </>
  );
};
export default Weather;

//c29282adf5a6b8701844d447e4b71786

//api.openweathermap.org/data/2.5/weather?q={city name}&appid=c29282adf5a6b8701844d447e4b71786

//https://api.openweathermap.org/data/2.5/weather?q=pune&appid=d15c1d923d610ce3c1fea8b5502d36c7