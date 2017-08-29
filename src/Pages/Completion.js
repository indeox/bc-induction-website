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