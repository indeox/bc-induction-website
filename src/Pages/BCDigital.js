import React, { Component } from "react";
import Parallax from "react-springy-parallax";

import ProgressBar from '../Components/ProgressBar';

export default class BCDigital extends Component {
  	
  	render() {
    	return (
			<ProgressBar 
				currentIndex={5}
      			stepLabels={[
		            "Our History",
		            "Our Values",
		            "Our Behaviours",
		            "Our SBU's",
		            "Key Information",
		            "Finish Up"
      			]}
      			test={false}
      		/>
    	);
  	}
}