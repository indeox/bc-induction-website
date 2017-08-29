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
					    <img className="img-responsive" src={history} style={{height: "200px"}}/>
					    <li className="grey"></li>
					</ul>
				</div>

				<div className="columns">
				  	<ul className="price">
					    <li className="header" style={{backgroundColor:"#4CAF50"}}>Values and Behaviours</li>
					    <li className="grey">Learn about the values you'll need to quickly fit in</li>
					    <img className="img-responsive" src={ghana} />
					    <li className="grey"></li>
				  	</ul>
				</div>

				<div className="columns">
				  	<ul className="price">
					    <li className="header">SBU's</li>
					    <li className="grey">Our Strategic Business Units (SBU's) current work</li>
					    <img className="img-responsive" src={SBU} />
					    <li className="grey"></li>
					</ul>
				</div>

				<div className="columns">
				  	<ul className="price">
					    <li className="header" style={{backgroundColor:"#4CAF50"}}>Meet the Team</li>
					    <li className="grey">Learn information about your new team</li>
					    <img className="img-responsive" src={team} />
					    <li className="grey"></li>
				  	</ul>
				</div>
    		</Parallax>
    	);
    }
}