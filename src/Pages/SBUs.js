import React, { Component } from "react";
import ProgressBar from "../Components/ProgressBar.js";
import logo from "../Images/British-Council.jpg";

export default class SBUs extends Component {
  render() {
    return (
      <div>
        <ProgressBar
          continueLink={"#/NeedToKnow"}
          stepLabels={[
            "History Shite",
            "Value Shite",
            "Behaviour Shite",
            "SBU Shite",
            "Need-to-Know Shite"
          ]}
          currentIndex={3}
        />
      </div>
    );
  }
}
