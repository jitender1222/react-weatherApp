import React, { useEffect, useState } from "react";
const Weathercard = ({ tempInfo }) => {
  const [weatherm, setweatherm] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setweatherm("wi-day-cloudy");
          break;
        case "Haze":
          setweatherm("wi-fog");
          break;
        case "Clear":
          setweatherm("wi-day-sunny");
          break;
          case "Rain":
            setweatherm("wi-day-rain");
            break;
        default:
          setweatherm("wi-day-sunny");
          break;
      }
    }
  },[weathermood]);
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timestr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="arc">
        <div className="inside-arc">
          <i className={`wi ${weatherm} first-icon`}></i>
        </div>
        <div className="Temp">
          {temp}
          <div className="status">
            {weathermood}
            <p className="para">
              {name},{country}
            </p>
          </div>
          <div className="date">{new Date().toLocaleString()}</div>
        </div>
        <div className="last-sec">
          <div className="icon">
            <i className="wi wi-day-sunny"></i>
            <div className="section">
              {timestr}
              <p>sunset</p>
            </div>
          </div>
          <div className="icon-2">
            <i className="wi wi-rain"></i>
            <div className="section">
              {pressure}
              <p>pressure</p>
            </div>
          </div>
          <div className="icon-3">
            <i className="wi wi-humidity"></i>
            <div className="section">
              {humidity}
              <p>humidity</p>
            </div>
          </div>

          <div className="icon-4">
            <i className="wi wi-strong-wind"></i>
            <div className="section">
              {speed}
              <p>speed</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;
