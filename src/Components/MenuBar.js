import React, { Component } from 'react';

class MenuBar extends Component {

	render() {
		return (
			<nav>
				<ul>
					<li><a href="#home">BC Organisation</a></li>
					<li><a href="#Quiz">Quiz</a></li>
					<li><a href="#Values">Our Values</a></li>
					<li><a href="#About">About</a></li>
				</ul>
			</nav>
		);
	}
}

export default MenuBar;