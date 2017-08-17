import React, { Component } from "react";
import Parallax from "react-springy-parallax";

import ProgressBar from "../Components/ProgressBar.js";
import PinnedMap from "../Components/PinnedMap.js";
import SwipeWrapper from "../Components/SwipeWrapper.js";

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
		          	<SwipeWrapper />
		        </Parallax>
	      	</div>
    	);
  	}
}
