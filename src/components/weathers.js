import React, { Component } from "react";
import Titles from "./weather/titles";
import Form from "./weather/form";
import Weather from "./weather/weather";

class Weathers extends Component {
  state = {
    temperature: undefined,
    feelslike: undefined,
    temperatureunit: undefined,
    updatetime: undefined,
    wxcondition: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault(); //to prevent reload

    const city = e.target.elements.city.value.toLowerCase();

    if (city) {
      let api_call = "";

      if (city == "toronto") {
        api_call = await fetch(
          `https://www.theweathernetwork.com/api/obsdata/caon0696/c?ref=rt`
        );
      } else if (city == "montreal") {
        api_call = await fetch(
          `https://www.meteomedia.com/api/obsdata/caqc0363/c?ref=rt`
        );
      } else {
        this.setState({
          temperature: "",
          feelslike: "",
          temperatureunit: "",
          updatetime: "",
          wxcondition: "",
          error: "We support only Toronto and Montreal, for now :)"
        });
      }

      if (api_call != "") {
        const response = await api_call.json();
        this.setState({
          temperature: response.temperature,
          feelslike: response.feels_like,
          temperatureunit: response.temperature_unit,
          updatetime: response.updatetime,
          wxcondition: response.wxcondition,
          error: ""
        });
      }
    } else {
      this.setState({
        temperature: "",
        feelslike: "",
        temperatureunit: "",
        updatetime: "",
        wxcondition: "",
        error: "Please enter the city..."
      });
    }
  };

  render() {
    return (
      <div>
        <Titles />
        <Form loadWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          feelslike={this.state.feelslike}
          temperatureunit={this.state.temperatureunit}
          updatetime={this.state.updatetime}
          wxcondition={this.state.wxcondition}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default Weathers;
