import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageLayout extends Component {
	render() {
		return (
			<div>
				<h1>Main Layout</h1>
				{this.props.children}
				<Link to='/WelcomePage'>BC Organisation</Link>
				<Link to='/QuizPage'>Quiz</Link>
			</div>
		);
	}
}

export default PageLayout;