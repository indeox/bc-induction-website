import React, { Component } from "react";
import Parallax from "react-springy-parallax";
// Components
import Footer from '../Components/Footer.js';
import ProgressBar from '../Components/ProgressBar';
// Images

export default class Done extends Component {

  	render() {
    	return (
    		<Parallax>
    			<ProgressBar 
					currentIndex={7}
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
          			test={false}
	      		/>
	      		<br/><br/><br/><br/>
	      		
	      		<div className="container-fluid bg-2 text-center">
				  	<h3 style={{fontSize: "35pt"}} className="margin">Congratulations! You have now completed your 
				  	British Council Induction...</h3>
				  	<p style={{color: "#1abc9c", margin: "30px 120px", textAlign: "justify"}}>You should now have a 
				  	good overview of our organisation to begin your first steps with us.</p>
				  	<p style={{color: "#1abc9c", margin: "30px 120px", textAlign: "justify"}}>If you need to refer 
				  	back to any points feel free to scroll back through the induction or refer to your induction
				  	passport.</p>
				  	<h3 style={{color: "#1abc9c", margin: "30px 120px", textAlign: "justify"}}><u>Have a great first day
				  	and we look forward to meeting you!</u></h3>
				</div>

    		</Parallax>
    	);
    }
}