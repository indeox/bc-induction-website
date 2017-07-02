import React, { Component } from 'react';
import MenuBar from '../Components/MenuBar.js';
import PageLayout from '../Components/PageLayout.js';

export default class App extends Component {
	render() {
		return (
		  	<div>
		  		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
			  	<MenuBar />
			  	<PageLayout />
		  	</div>
		);
	}
}