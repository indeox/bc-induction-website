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
							currentIndex={4}
		          			stepLabels={[
					            "Our History",
					            "Our Values",
					            "Our Behaviours",
					            "Our SBU's",
					            "Key Information",
					            "Finish Up"
		          			]}
	          			/>
	          			<br /><br /><br /><br /><br /><br />
				        <header className="jumbotron hero-spacer">
				            <h2>Some need to know information</h2>
				            <hr></hr>
				            <p>Here you'll find all the necessary resources you need to quickly integrate into 
				            the British Council</p>
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
				        						<div id='container'>Check your E-Passport</div>
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
				        						<div id='container'>Search the Intranet</div>
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
					        					<div id='container'>EDI Information</div>
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
					        					<div id='container'>Code of Conduct</div>
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