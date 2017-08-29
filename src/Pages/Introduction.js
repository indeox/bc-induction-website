import React, { Component } from "react";
import Parallax from "react-springy-parallax";
// Components
import Footer from '../Components/Footer.js';
import ProgressBar from '../Components/ProgressBar';
// Images
import history from '../Images/HistoryImages/history-landing-page.jpg';
import ghana from '../Images/ghana.jpg';
import SBU from '../Images/Portugal_00005.jpg';
import team from '../Images/team.jpg';

export default class Introduction extends Component {

  	render() {
    	return (
    		<Parallax pages={1.59}>
    			<ProgressBar 
    				continueLink={"#/History"}
					currentIndex={0}
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
	      		/>
	      		<br/><br/><br/><br/><br/>
	      		
	      		<div className="container-fluid bg-2 text-center">
				  	<h3 style={{fontSize: "35pt"}} className="margin">Welcome to the British Council Induction Journey</h3>
				  	<p style={{color: "#1abc9c", margin: "30px 120px", textAlign: "justify"}}>This process will give you 
				  	an overview of the information you will need to integrate into your new workplace.</p>
				  	<p style={{color: "#1abc9c", margin: "30px 120px", textAlign: "justify"}}>We'll start with an overview 
				  	of the History of the British Council, starting from our creation in 1934, to the current prjects we're
				  	 working on.</p>
				</div>

				<div className="columns">
					<ul className="price">
					    <li className="header">History</li>
					    <li className="grey">Learn about our history, from our origin, to today</li>
					    <img className="img-responsive" src={history} style={{height: "200px"}} alt='.' />
					    <li className="grey"></li>
					</ul>
				</div>

				<div className="columns">
				  	<ul className="price">
					    <li className="header" style={{backgroundColor:"#4CAF50"}}>Values and Behaviours</li>
					    <li className="grey">Learn about the values you'll need to quickly fit in</li>
					    <img className="img-responsive" src={ghana} alt='.' />
					    <li className="grey"></li>
				  	</ul>
				</div>

				<div className="columns">
				  	<ul className="price">
					    <li className="header">SBU's</li>
					    <li className="grey">Our Strategic Business Units (SBU's) current work</li>
					    <img className="img-responsive" src={SBU} alt='.' />
					    <li className="grey"></li>
					</ul>
				</div>

				<div className="columns">
				  	<ul className="price">
					    <li className="header" style={{backgroundColor:"#4CAF50"}}>Meet the Team</li>
					    <li className="grey">Learn information about your new team</li>
					    <img className="img-responsive" src={team} alt='.' />
					    <li className="grey"></li>
				  	</ul>
				</div>
				<Footer />
    		</Parallax>
    	);
    }
}