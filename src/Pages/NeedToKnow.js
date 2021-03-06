import Parallax from 'react-springy-parallax';
import React, { Component } from 'react';
// Components
import Footer from '../Components/Footer.js';
import ProgressBar from '../Components/ProgressBar';
// Images
import logo from '../Images/Portugal_00005.jpg';
import edi from '../Images/Stepping_Stone_00145.jpg';
import intranet from '../Images/Spain_02178.jpg';
import passport from '../Images/India_00984.jpg';

export default class NeedToKnow extends Component {

	render() {
		return (
			<div id='tuscany'>
				<Parallax ref='parallax' pages={1}>
					<div className="container">
						<ProgressBar 
							continueLink={"#/Completion"}
							currentIndex={5}
		          			stepLabels={[
					            <a href='#/Introduction' style={{color: 'white'}}>Introduction</a>,
					            <a href='#/History' style={{color: 'white'}}>Our History</a>,
					            <a href='#/OurValues' style={{color: 'white'}}>Our Values</a>,
					            <a href='#/OurBehaviours' style={{color: 'white'}}>Our Behaviours</a>,
					            <a href='#/SBUs' style={{color: 'white'}}>Our SBU's</a>,
					            <a href='#/NeedToKnow' style={{color: 'white'}}>Key Information</a>,
					            "Meet your Team",
					            "Finish Up"
		          			]}
	          			/>
	          			<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
				        <header className="jumbotron hero-spacer">
				            <h2>Some Need to Know Information <span className="glyphicon glyphicon-hand-down" aria-hidden="true"></span></h2>
				            <hr></hr>
				            <p>Here you'll find all the necessary resources you need to quickly integrate into 
				            the British Council.</p>
				        </header>
				    </div>
					
				    <div className="container text-center">    
					  	<div className="row">
					    	<div className="col-sm-3">
				      			<div className='row text-center'>
				        			<div className="panel-body">
				        				<div className="polaroid">
				        					<a href='https://github.com/chrismphilp/bc-induction-website/raw/master/src/Images/Passport.pdf' rel="noopener noreferrer">
				        						<img src={passport} alt='#' width='100%' />
				        						<div id='container' style={{fontSize: '15.5pt'}}>Check your E-Passport</div>
				        					</a>
				        				</div>
				        			</div>
				        		</div>
					    	</div>
					    	<div className="col-sm-3">
					      		<div className='row text-center'>
				        			<div className="panel-body">
				        				<div className="polaroid">
				        					<a href='http://roam2.britishcouncil.org' target="_blank" rel="noopener noreferrer">
				        						<img src={intranet} alt='#' width='100%' />
				        						<div id='container' style={{fontSize: '15.5pt'}}>Search the Intranet</div>
				        					</a>
				        				</div>
				        			</div>
				        		</div>   
					    	</div>
					    	<div className="col-sm-3">
					      		<div className='row text-center'>
				        			<div className="panel-body">
				        				<div className="polaroid">
				        					<a href='https://www.britishcouncil.org/organisation/how-we-work/equality-diversity-inclusion' target="_blank" rel="noopener noreferrer">
					        					<img src={edi} alt='#' width='100%' />
					        					<div id='container' style={{fontSize: '15.5pt'}}> <abbr title="Equality, Diversity, and Inclusion">EDI</abbr> Information<br/><br/></div>
					        				</a>
				        				</div>
				        			</div>
				        		</div>   
					    	</div>
					    	<div className="col-sm-3">
					      		<div className='row text-center'>
				        			<div className="panel-body">
				        				<div className="polaroid">
				        					<a href='https://www.britishcouncil.org/sites/default/files/code_of_conduct_may_2016.pdf' target="_blank" rel="noopener noreferrer">
					        					<img src={logo} alt='#' width='100%' />
					        					<div id='container' style={{fontSize: '15.5pt'}}>Code of Conduct<br/><br/></div>
					        				</a>
				        				</div>
				        			</div>
				        		</div>   
					    	</div>
					  	</div>
					</div>
					<br/>
					<Footer/>
				</Parallax>
			</div>
		);
	}
}