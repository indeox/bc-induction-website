import React, { Component } from 'react';

class MenuBar extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li><a href="#home">BC Organisation</a></li>
					<li><a href="#news">Quiz</a></li>
					<li><a href="#contact">Our Values</a></li>
					<li><a href="#about">About</a></li>
				</ul>
			</nav>
		);
	}
}

export default MenuBar;