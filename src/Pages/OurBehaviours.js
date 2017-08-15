import React, { Component } from "react";

import Accordian from "../Components/Accordian.js";
import ProgressBar from "../Components/ProgressBar.js";

export default class OurBehaviours extends Component {
    render() {
        return (
            <div>
                <ProgressBar
                    continueLink={"#/SBUs"}
                    currentIndex={2}
                    stepLabels={[
                        "Our History",
                        "Our Values",
                        "Our Behaviours",
                        "Our SBU's",
                        "Key Information"
                    ]}
                />
                <Accordian
        		    //these are all a series of parallel arrays, as such the nth element of the Label, Description, and Background go together
                    tabLabels={["beh1", "beh2", "beh3", "beh4", "beh5", "beh6"]}
                    tabDescriptions={[
                        "descrip1",
                        "descrip2",
                        "descrip3",
                        "descrip4",
                        "descrip5",
                        "descrip6"
                    ]}
                    tabBackgrounds={[
                        "url(http://lorempixel.com/600/600/nature/1)",
                        "url(http://lorempixel.com/600/600/nature/2)",
                        "url(http://lorempixel.com/600/600/nature/3)",
                        "url(http://lorempixel.com/600/600/nature/4)",
                        "url(http://lorempixel.com/600/600/nature/5)",
                        "url(http://lorempixel.com/600/600/nature/6)"
                    ]}
        		      tabHeight={"800px"}
                />
            </div>
        );
    }
}
