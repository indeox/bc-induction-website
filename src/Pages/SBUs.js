import React, { Component } from "react";
import Parallax from 'react-springy-parallax';
import ProgressBar from "../Components/ProgressBar.js";
import HalfScroll from "../Components/HalfScroll.js";
import logo from "../Images/British-Council.jpg";

export default class OurBehaviours extends Component {
  render() {
    return (
      <div>
        <Parallax ref='parallax' pages={14}>
        <ProgressBar
          continueLink={"#/SBUs"}
          stepLabels={[
            "History Shite",
            "Value Shite",
            "Behaviour Shite",
            "SBU Shite",
            "Need-to-Know Shite"
          ]}
          currentIndex={2}
        />
        <HalfScroll
          //these are all a series of parallel arrays, as such the nth element of the Label, Description, and Background go together
          articleLabels={["head1", "head2", "head3", "head4", "head5", "head6", "head7"]}
          articleDescriptions={[
            "descrip1",
            "descrip2",
            "descrip3",
            "descrip4",
            "descrip5",
            "descrip6",
            "descrip7"
          ]}
          articleBackgrounds={[
            "http://lorempixel.com/600/600/nature/1",
            "http://lorempixel.com/600/600/nature/2",
            "http://lorempixel.com/600/600/nature/3",
            "http://lorempixel.com/600/600/nature/4",
            "http://lorempixel.com/600/600/nature/5",
            "http://lorempixel.com/600/600/nature/6",
            "http://lorempixel.com/600/600/nature/7"
          ]}
        />
        </Parallax>
      </div>
    );
  }
}
