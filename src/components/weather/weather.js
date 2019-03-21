import React from "react";

const Weather = props => {
  return (
    <div>
      {props.updatetime && (
        <p className="weather_key">
          Last updated:
          <span className="weather_value"> {props.updatetime}</span>
        </p>
      )}
      {props.wxcondition && (
        <p className="weather_key">
          Condition:
          <span className="weather_value"> {props.wxcondition}</span>
        </p>
      )}
      {props.temperature && (
        <p className="weather_key">
          Temperature:
          <span className="weather_value"> {props.temperature}</span>
        </p>
      )}
      {props.feelslike && (
        <p className="weather_key">
          Feels like:
          <span className="weather_value"> {props.feelslike}</span>
        </p>
      )}
      {props.temperatureunit && (
        <p className="weather_key">
          Temperature Unit are:
          <span className="weather_value"> {props.temperatureunit}</span>
        </p>
      )}
      {props.error && <p className="weather_error">{props.error}</p>}
    </div>
  );
};
export default Weather;
