import Parallax from 'react-springy-parallax';
import React, { Component } from 'react';

import ProgressBar from '../Components/ProgressBar';

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
		          		
		          	</div>
				</Parallax>
			</div>
		);
	}
}