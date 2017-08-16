import React, { Component } from "react";
import Parallax from "react-springy-parallax";
import ProgressBar from "../Components/ProgressBar.js";
import PinnedMap from "../Components/PinnedMap.js";
import SwipeWrapper from "../Components/SwipeWrapper.js";
//import Info from "../Components/Info.js";
import logo from "../Images/British-Council.jpg";


export default class OurBehaviours extends Component {
  render() {
    return (
      <div>
        <Parallax ref="parallax" pages={1.2}>
          <SwipeWrapper />
        </Parallax>
      </div>
    );
  }
}
