import Parallax from 'react-springy-parallax';
import React, { Component } from "react";
// Components
import Accordian from "../Components/Accordian.js";
import Footer from '../Components/Footer.js';
import ProgressBar from "../Components/ProgressBar.js";
// Images
import A from '../Images/classroom.jpg';
import B from '../Images/write.jpg';
import C from '../Images/smile.jpg';
import D from '../Images/suits.jpg';
import E from '../Images/team.jpg';
import F from '../Images/token.jpg';

export default class OurBehaviours extends Component {
    render() {
        return (
            <div>
                <Parallax pages={1}>
                    <ProgressBar
                        continueLink={"#/SBUs"}
                        currentIndex={3}
                        stepLabels={[
                            "Introduction",
                            "Our History",
                            "Our Values",
                            "Our Behaviours",
                            "Our SBU's",
                            "Key Information",
                            "Meet your Team",
                            "Done"
                        ]}
                    />
                    <Accordian
            		    //these are all a series of parallel arrays, as such the nth element of the Label, Description, and Background go together
                        tabLabels={[
                            "One",
                            "Two",
                            "Three",
                            "Four",
                            "Five",
                            "Six"
                        ]}
                        tabDescriptions={[
                            "Connecting with others.",
                            "Shaping the future.",
                            "Making it happen.",
                            "Being accountable.",
                            "Creating shared purpose.",
                            "Working together."
                        ]}
                        // Use this for image conversion http://jpillora.com/base64-encoder
                        tabBackgrounds={[
                            A,
                            B,
                            C,
                            D,
                            E,
                            F
                        ]}
            		    tabHeight={"823px"} /*when tested in board room this was the right size*/
                    />
                    <Footer />
                </Parallax>
            </div>
        );
    }
}
