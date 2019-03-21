import React from "react";
const Form = props => {
  return (
    <form onSubmit={props.loadWeather}>
      <input type="text" name="city" placeholder="City..." />
      <br />
      <br />
      <button>Get Weather</button>
    </form>
  );
};
export default Form;
