import Parallax from 'react-springy-parallax';
import React, { Component } from 'react';

import Footer from '../Components/Footer';
import ProgressBar from '../Components/ProgressBar';

import logo from '../Images/Portugal_00005.jpg';
import edi from '../Images/Stepping_Stone_00145.jpg';
import intranet from '../Images/Spain_02178.jpg';
import passport from '../Images/India_00984.jpg';

export default class About extends Component {

	render() {
		return (
			<div>
				<Parallax ref='parallax' pages={1}>
					<div className="container">
						<ProgressBar 
						continueLink={"#/SBUs"}
	          			stepLabels={[
				            "History Shite",
				            "Value Shite",
				            "Behaviour Shite",
				            "SBU Shite",
				            "Need-to-Know Shite"
	          			]}/>
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
				        					<a href='/'>
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
				        					<a href='/'>
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
				        					<a href='/'>
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
				        					<a href='/'>
					        					<img src={logo} alt='#' width='100%' />
					        					<div id='container'>Code of Conduct</div>
					        				</a>
				        				</div>
				        			</div>
				        		</div>   
					    	</div>
					  	</div>
					</div>
					<br /><br />
				</Parallax>
			</div>
		);
	}
}