import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";

library.add(faCloudSun);

const Titles = props => {
  return (
    <div>
      <h3>The Weather App</h3>
      <FontAwesomeIcon icon="CloudSun" />
    </div>
  );
};
export default Titles;
