import React, { Component } from "react";
import Parallax from "react-springy-parallax";

import Footer from '../Components/Footer.js';
import ProgressBar from "../Components/ProgressBar.js";
import PinnedMap from "../Components/PinnedMap.js";
import TwoPageTransition from "../Components/TwoPageTransition.js";

export default class OurBehaviours extends Component {
  	render() {
    	return (
	      	<div>
		        <Parallax ref="parallax" pages={1.2}>
		        	<ProgressBar 
		        		continueLink={"#/NeedToKnow"}
						    currentIndex={3}
				        stepLabels={[
				            "Our History",
				            "Our Values",
				            "Our Behaviours",
				            "Our SBU's",
				            "Key Information"
		      			]}
		        	/>
		          <Footer />
		        </Parallax>
	      	</div>
    	);
  	}
}
