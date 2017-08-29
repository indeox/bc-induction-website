import React, { Component } from "react";
import Parallax from "react-springy-parallax";
// Components
import Footer from '../Components/Footer.js';
import ProgressBar from '../Components/ProgressBar';
// Images

export default class Done extends Component {

  	render() {
    	return (
    		<Parallax pages={1}>
    			<ProgressBar 
					currentIndex={7}
	      			stepLabels={[
	      				<a href='#/Introduction'>Introduction</a>,
			            <a href='#/History'>Our History</a>,
			            <a href='#/OurValues'>Our Values</a>,
			            <a href='#/OurBehaviours'>Our Behaviours</a>,
			            <a href='#/SBUs'>Our SBU's</a>,
			            <a href='#/NeedToKnow'>Key Information</a>,
			            <a href='#/Completion'>Meet your Team</a>,
			            <a href='#/Done'>Finish Up</a>
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
				  	back to any points feel free to scroll back through the induction using the navigation bar
				  	or refer to your induction passport.</p>
				  	<h3 style={{color: "#1abc9c", margin: "30px 120px", textAlign: "justify"}}><b>Have a great first day
				  	and we look forward to meeting you!</b></h3>
				</div>
				<Footer />
    		</Parallax>
    	);
    }
}