import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuBar extends Component {

	render() {
		return (
			<div>
				<nav>
					<ul>
						<li><Link to='WelcomePage'>BC Organisation</Link></li>
						<li><Link to='QuizPage'>Quiz</Link></li>
						<li><Link to='OurValues'>Our Values</Link></li>
						<li><Link to='About'>About</Link></li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default MenuBar;