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
		          				"Introduction",
					            "Our History",
					            "Our Values",
					            "Our Behaviours",
					            "Our SBU's",
					            "Key Information",
					            "Meet your Team",
					            "Done"
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