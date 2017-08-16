import Parallax from 'react-springy-parallax';
import React, { Component } from 'react';

import ProgressBar from '../Components/ProgressBar';
import RegisterForm from '../Components/RegisterForm';

export default class About extends Component {

	render() {
		return (
			<div>
				<Parallax ref='parallax' pages={1}>
					<div className="container">
						<ProgressBar 
							continueLink={"#/Completion"}
							currentIndex={5}
		          			stepLabels={[
					            "Our History",
					            "Our Values",
					            "Our Behaviours",
					            "Our SBU's",
					            "Key Information",
					            "Finish Up"
		          			]}
		          		/>
		          		<br/><br/><br/><br/><br/>
		          		<header className="jumbotron hero-spacer">
				            <h2>Time to continue your British Council journey</h2>
				            <hr/>
				            <p>
					            Enter the code given by your line manager to learn more 
					            about your individual department.
					        </p>
				        </header>
		          		<RegisterForm />
		          	</div>
				</Parallax>
			</div>
		);
	}
}