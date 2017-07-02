import React, { Component } from 'react';
import MenuBar from '../Components/MenuBar.js';
import PageLayout from '../Components/PageLayout.js';

export default class App extends Component {
	render() {
		return (
		  	<div>
			  	<MenuBar />
			  	<PageLayout />
		  	</div>
		);
	}
}