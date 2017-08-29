import React, { Component } from "react";
import Parallax from "react-springy-parallax";
// Components
import Footer from '../Components/Footer.js';
import ProgressBar from '../Components/ProgressBar';
// Images

export default class Introduction extends Component {

  	render() {
    	return (
    		<Parallax>
    			<ProgressBar 
    				continueLink={"#/History"}
					currentIndex={0}
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
	      		<br/><br/><br/><br/><br/>
	      		<div className="container-fluid bg-2 text-center">
				  	<p style={{color: "#1abc9c", margin: "30px 120px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
				  	dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
				  	ea commodo consequat.</p>
				</div>
    		</Parallax>
    	);
    }
}