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
                            <a href='#/Introduction' style={{color: 'white'}}>Introduction</a>,
                            <a href='#/History' style={{color: 'white'}}>Our History</a>,
                            <a href='#/OurValues' style={{color: 'white'}}>Our Values</a>,
                            <a href='#/OurBehaviours' style={{color: 'white'}}>Our Behaviours</a>,
                            "Our SBU's",
                            "Key Information",
                            "Meet your Team",
                            "Finish Up"
                        ]}
                    />
                    <Accordian
            		    //these are all a series of parallel arrays, as such the nth element of the Label, Description, and Background go together
                        tabLabels={[
                            "Connecting with Others",
                            "Shaping the Future",
                            "Making it Happen",
                            "Being accountable",
                            "Creating Shared Purpose",
                            "Working Together"
                        ]}
                        tabDescriptions={[
                            // Connecting
                            <ul>
                                <li>- We find common ground and build relationships and connections to support<br/> British Council goals. </li>
                                <li>- Building trust with others, by paying attention to their concerns and needs,<br/> and showing 
                                that we understand their interests.</li>
                                <li>- We achieve understanding and trust in a culturally sensitive way.</li>
                            </ul>,
                            // Shaping
                            <ul>
                                <li>- We achieve better business, innovation and growth by using our professionalism,<br/>
                                knowledge and expertise to create a clear focus on what we want to achieve.</li>
                                <li>- We spot opportunities, plan appropriately and create innovative solutions that <br/>
                                recognise ambiguity and deliver business benefit.</li>
                            </ul>,
                            // Making
                            <ul>
                                <li>- We deliver excellent results and achieve challenging goals.</li>
                                <li>- We do this by setting clear and demanding objectives to deliver what is required.</li>
                                <li>- We stay focused on measurable outcomes, while building longer-term capability.</li>
                            </ul>,
                            // Accountable
                            <ul>
                                <li>- We show accountability and commitment to the British Council and demonstrate resilience and 
                                determination.</li>
                                <li>- We hold ourselves and others responsible for delivering goals in line with the shared purpose 
                                of the British Council. </li>
                                <li>- We give and accept constructive feedback to maximise our performance.</li>
                            </ul>,
                            // Shared Purpose
                            <ul>
                                <li>- We gain the active support of other people so they are fully engaged and motivated to contribute.</li>
                                <li>- We do this by communicating our purpose in a way that everyone can understand.</li>
                                <li>- We help everyone understand the part they play, so that our aims are clear to all.</li>
                            </ul>,
                            // Working 
                            <ul>
                                <li>- We know that we will achieve more with other people than we can do separately, by sharing goals and 
                                resources to add more value, we work towards common goals with others.</li>
                                <li>- We do this by agreeing ways of sharing success.</li>
                                <li>- We generate mutual support, shared benefits and promote interdependence.</li>
                            </ul>
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
