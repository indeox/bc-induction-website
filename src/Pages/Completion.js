import Parallax from 'react-springy-parallax';
import React, { Component } from 'react';

import Footer from '../Components/Footer.js';
import ProgressBar from '../Components/ProgressBar';
import RegisterForm from '../Components/RegisterForm';

export default class About extends Component {

	render() {
		return (
			<div>
				<Parallax ref='parallax' pages={1}>
						<ProgressBar 
							continueLink={"#/Completion"}
							currentIndex={6}
		          			stepLabels={[
		          				<a href='#/Introduction' style={{color: 'white'}}>Introduction</a>,
					            <a href='#/History' style={{color: 'white'}}>Our History</a>,
					            <a href='#/OurValues' style={{color: 'white'}}>Our Values</a>,
					            <a href='#/OurBehaviours' style={{color: 'white'}}>Our Behaviours</a>,
					            <a href='#/SBUs' style={{color: 'white'}}>Our SBU's</a>,
					            <a href='#/NeedToKnow' style={{color: 'white'}}>Key Information</a>,
					            <a href='#/Completion' style={{color: 'white'}}>Meet your Team</a>,
					            "Finish Up"
		          			]}
		          			test={false}
		          		/>
		          		<br/><br/><br/>
		          		<RegisterForm 
		          			appState={this.props.appState}
		          			setFormState={this.props.setFormState}
		          		/>
		          	<Footer />
				</Parallax>
			</div>
		);
	}
}