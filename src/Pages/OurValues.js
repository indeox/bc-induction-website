import React, { Component } from "react";

import Accordian from "../Components/Accordian.js";
import Footer from '../Components/Footer';
import ProgressBar from "../Components/ProgressBar.js";

export default class OurValues extends Component {

    render() {
        return (
            <div>
            <ProgressBar
              continueLink={"#/OurBehaviours"}
              stepLabels={[
                "History Shite",
                "Value Shite",
                "Behaviour Shite",
                "SBU Shite",
                "Need-to-Know Shite"
              ]}
              currentIndex={1}
            />
            <Accordian
    		    //these are all a series of parallel arrays, as such the nth element of the Label, Description, and Background go together
                tabLabels={["val1", "val2", "val3", "val4", "val5"]}
                tabDescriptions={[
                    "descrip1",
                    "descrip2",
                    "descrip3",
                    "descrip4",
                    "descrip5"
                ]}
                tabBackgrounds={[
                    "url(http://lorempixel.com/600/600/nature/1)",
                    "url(http://lorempixel.com/600/600/nature/2)",
                    "url(http://lorempixel.com/600/600/nature/3)",
                    "url(http://lorempixel.com/600/600/nature/4)",
                    "url(http://lorempixel.com/600/600/nature/5)"
                ]}
    		    tabHeight={"1000px"}
                />
            </div>
        );
    }
}