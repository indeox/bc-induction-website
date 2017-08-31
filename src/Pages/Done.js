import React, { Component } from "react";
import Parallax from "react-springy-parallax";
// Components
import Footer from '../Components/Footer.js';
import ProgressBar from '../Components/ProgressBar';
// Images
import '../CSS/done.css';

export default class Done extends Component {

  	render() {
    	return (
    		<Parallax pages={1}>
    			<ProgressBar 
					currentIndex={7}
	      			stepLabels={[
	      				<a href='#/Introduction' style={{color: 'white'}}>Introduction</a>,
			            <a href='#/History' style={{color: 'white'}}>Our History</a>,
			            <a href='#/OurValues' style={{color: 'white'}}>Our Values</a>,
			            <a href='#/OurBehaviours' style={{color: 'white'}}>Our Behaviours</a>,
			            <a href='#/SBUs' style={{color: 'white'}}>Our SBU's</a>,
			            <a href='#/NeedToKnow' style={{color: 'white'}}>Key Information</a>,
			            <a href='#/Completion' style={{color: 'white'}}>Meet your Team</a>,
			            <a href='#/Done' style={{color: 'white'}}>Finish Up</a>
          			]}
          			test={false}
	      		/>
	      		<div className="container-fluid bg-2 text-center"></div>
	      		<div className="container-fluid bg-2 text-center"></div>
	      		<div className="container-fluid bg-2 text-center">
				  	<h3 style={{fontSize: "35pt"}} className="margin">Congratulations! You have completed your 
				  	British Council Induction...</h3>
				  	<p style={{color: "#1abc9c", margin: "30px 120px", textAlign: "justify"}}>You should now have a 
				  	good overview of our organisation to begin your first steps with us.</p>
				  	<p style={{color: "#1abc9c", margin: "30px 120px", textAlign: "justify"}}>If you need to refer 
				  	back to any points feel free to scroll back through the induction using the navigation bar
				  	or refer to your induction passport.</p>
				  	<h3 style={{color: "#1abc9c", margin: "30px 120px", textAlign: "justify"}}><b>Have a great first day
				  	and we look forward to meeting you!</b></h3>
				</div>
				<div className="container-fluid bg-2 text-center"></div>
	      		<div className="container-fluid bg-2 text-center"></div>
	      		<div className="container-fluid bg-2 text-center"></div>

				<Footer />
    		</Parallax>
    	);
    }
}