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
    		<Parallax pages={1.25}>
    			<ProgressBar 
    				continueLink={"#/History"}
					currentIndex={0}
	      			stepLabels={[
	      				<a href='#/Introduction' style={{color: 'white'}}>Introduction</a>,
			            "Our History",
			            "Our Values",
			            "Our Behaviours",
			            "Our SBU's",
			            "Key Information",
			            "Meet your Team",
			            "Finish Up"
          			]}
	      		/>
	      		<br/><br/><br/><br/><br/>
	      		
	      		<div className="container-fluid bg-2 text-center">
				  	<h3 style={{fontSize: "35pt", textAlign: "justify"}} className="margin">&nbsp;&nbsp;Welcome to Your British Council Induction Journey</h3>
				  	<p style={{color: "#1abc9c", margin: "25px 25px", textAlign: "justify"}}>This process will give you 
				  	an overview of the information you will need to integrate into your new workplace.</p>
				  	<p style={{color: "#1abc9c", margin: "25px 25px", textAlign: "justify"}}>We'll start with an overview 
				  	of the History of the British Council, starting from our creation in 1934, to the current prjects we're
				  	 working on. We'll then give you an overview of the values and behaviours of our organisation, which
				  	 you'll probably have an idea of already. Moving on, we'll give you a better idea of how we work globally, 
				  	 and how the Strategic Business Units link together. Finally, we'll give you details about the team you'll
				  	 be working with in the near future.</p>
				  	 <h3 style={{fontSize: "35pt", textAlign: "left"}}>&nbsp;&nbsp;British Council Aims</h3>
				  	<p style={{color: "#1abc9c", margin: "25px 25px", textAlign: "justify"}}>Our overall aims are. To maintain active interest in and support the work of the British Council, to 
				  	further its aims and to promote its better knowledge among the public. To encourage the interests of its 
				  	members where appropriate, particularly in the areas of education, the arts and community service.</p>
				</div>

				<div className="columns">
					<ul className="price">
					    <li className="header"><span className="glyphicon glyphicon-blackboard" aria-hidden="true"></span> History</li>
					    <li className="grey">Learn about our history, from our origin, to today</li>
					    <img className="img-responsive" src={history} alt='.' style={{height: "325px"}} />
					    <li className="grey"></li>
					</ul>
				</div>

				<div className="columns">
				  	<ul className="price">
					    <li className="header" style={{backgroundColor:"#4CAF50"}}>
					    	<span className="glyphicon glyphicon-globe" aria-hidden="true"></span> Values & Behaviours
					    </li>
					    <li className="grey">Learn about the values you'll need to quickly fit in</li>
					    <img className="img-responsive" src={ghana} alt='.' style={{height: "325px"}} />
					    <li className="grey"></li>
				  	</ul>
				</div>

				<div className="columns">
				  	<ul className="price">
					    <li className="header"><span className="glyphicon glyphicon-king" aria-hidden="true"></span> SBU's</li>
					    <li className="grey">Our Strategic Business Units (SBU's) current work</li>
					    <img className="img-responsive" src={SBU} alt='.' style={{height: "325px"}} />
					    <li className="grey"></li>
					</ul>
				</div>

				<div className="columns">
				  	<ul className="price">
					    <li className="header" style={{backgroundColor:"#4CAF50"}}>
					    	<span className="glyphicon glyphicon-heart" aria-hidden="true"></span> Meet the Team
					    </li>
					    <li className="grey">Learn information about your new team that you'll be moving into</li>
					    <img className="img-responsive" src={team} alt='.' style={{height: "325px"}} />
					    <li className="grey"></li>
				  	</ul>
				</div>
				<Footer />
    		</Parallax>
    	);
    }
}