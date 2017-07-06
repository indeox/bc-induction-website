import React, { Component } from 'react';
import MenuBar from '../Components/MenuBar.js';
import PageLayout from '../Components/PageLayout.js';
import Footer from '../Components/Footer.js';

export default class App extends Component {
	render() {
		return (
		  	<div>
			  	<MenuBar />
			  	<PageLayout />
			  	<Footer />
		  	</div>
		);
	}
}