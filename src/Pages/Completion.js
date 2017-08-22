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
		          			test={false}
		          		/>
		          		<br/><br/><br/><br/><br/><br/>
		          		<header className="jumbotron hero-spacer">
				            <h2>Time to continue your personal British Council journey</h2>
				            <hr/>
				            <p>
					            Enter the code given to you by your line manager before you began your induction
					            to learn more about your individual department.
					        </p>
				        </header>
		          		<RegisterForm />
		          	</div>
		          	<Footer />
				</Parallax>
			</div>
		);
	}
}