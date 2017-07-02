import React, { Component } from 'react';
import MenuBar from '../Components/MenuBar.js';
import PageLayout from '../Components/PageLayout.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.css';

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