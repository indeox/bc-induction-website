import React, { Component } from "react";
import Parallax from "react-springy-parallax";
// Components
import ProgressBar from '../Components/ProgressBar';
// Images
import logo from '../Images/British-Council.jpg';
import bee from '../Images/Bahrain_00138.jpg';
import mike from '../Images/Going_Global_Miami_00585.jpg';
import sheila from '../Images/Hong_Kong_00005.jpg';
import dave from '../Images/Hong_Kong_00016.jpg';

import building from '../Images/Spain_00092.jpg';
import department from '../Images/Dubai_00639.jpg';

export default class BCDigital extends Component {
  	
  	constructor() {
		super();
		this.state = {
			supervisor: "john@bc.org",
			cont_num: "01234 567890",
			liv_lib: "link@liv_lib",
			otherlinks: "Other stuff"
		}
	}

  	render() {
    	return (
    		<Parallax ref='parallax' pages={1.55}>
				<ProgressBar 
					currentIndex={5}
	      			stepLabels={[
			            "Your personal journey now begins"
	      			]}
	      			test={false}
	      		/>
	      		<br/><br/><br/><br/><br/>
	      		<div className="container text-center">
	      			<div className="well well-lg">    
					  	<div className="row">
					  		<h3>Welcome to BC Digital - Your New Team</h3>
					    	<div className="col-sm-3">
				      			<div className='row text-center'>
				        			<div className="panel-body">
				        				<div className="polaroid">
			        						<img src={mike} alt='#' width='100%'/>
			        						<div id='container'>
			        							<h5>Dave Scholtz</h5>
			        							<h6 className='text-justify'>Dave is a Brand and Marketing Strategist who partners with 
			        							CEOs, executives and solopreneurs to grow their personal and professional 
			        							brands, human-to-human.</h6>
			        						</div>
				        				</div>
				        			</div>
				        		</div>
					    	</div>
					    	<div className="col-sm-3">
					      		<div className='row text-center'>
				        			<div className="panel-body">
				        				<div className="polaroid">
			        						<img src={sheila} alt='#' width='100%'/>
			        						<div id='container'>
			        							<h5>Li Xee</h5>
			        							<h6 className='text-justify'>Li is a Brand and Marketing Strategist who partners with 
			        							CEOs, executives and solopreneurs to grow their personal and professional 
			        							brands, human-to-human.</h6>
			        						</div>
				        				</div>
				        			</div>
				        		</div>   
					    	</div>
					    	<div className="col-sm-3">
					      		<div className='row text-center'>
				        			<div className="panel-body">
				        				<div className="polaroid">
				        					<img src={dave} alt='#' width='100%'/>
				        					<div id='container'>
				        						<h5>Eddie Huang</h5>
				        						<h6 className='text-justify'>Eddie is a Brand and Marketing Strategist who partners with 
			        							CEOs, executives and solopreneurs to grow their personal and professional 
			        							brands, human-to-human.</h6>
				        					</div>
				        				</div>
				        			</div>
				        		</div>   
					    	</div>
					    	<div className="col-sm-3">
					      		<div className='row text-center'>
				        			<div className="panel-body">
				        				<div className="polaroid">
				        					<img src={bee} alt='#' width='100%' />
				        					<div id='container'>
				        						<h5>Mary Aqbul</h5>
				        						<h6 className='text-justify'>Mary is a Brand and Marketing Strategist who partners with 
			        							CEOs, executives and solopreneurs to grow their personal and professional 
			        							brands, human-to-human.</h6>
				        					</div>
				        				</div>
				        			</div>
				        		</div>   
					    	</div>
					  	</div>
					</div>
			    <div className="container text-center">
			    <div className="well well-lg">    
				  	<h3>Learn more about where you'll be working</h3>
				  	<br></br>
				  	<div className="row">
				    	<div className="col-sm-3">
				      		<h4>The Building</h4>
				      			<div className='row text-center'>
				        			<div className="panel-body">
				        				<img src={building} alt='#' width='100%' height='167.5px' />
				        			</div>
				        		</div>
				    	</div>
				    	<div className="col-sm-3">
				      		<h4>The Department</h4> 
				      		<div className='row text-center'>
			        			<div className="panel-body">
			        				<img src={department} alt='#' width='100%' />
			        			</div>
			        		</div>   
				    	</div>
				    	<div className="col-sm-3">
				      		<div className="well">
				       			<h4>Supervisor</h4>
				       			<p>{this.state.supervisor}</p>
				      		</div>
				      		<div className="well">
				       			<h4>Supervisor Number</h4>
				       			<p>{this.state.cont_num}</p>
				      		</div>
				    	</div>
				    	<div className="col-sm-3">
				      		<div className="well">
				       			<h4>Living Library</h4>
				       			<p>{this.state.liv_lib}</p>
				      		</div>
				      		<div className="well">
				      			<h4>Other links</h4>
				      			<p>{this.state.otherlinks}</p>
				      		</div>
				    	</div>  
				  	</div>
				</div>
				</div>
			</div>
			</Parallax>
    	);
  	}
}