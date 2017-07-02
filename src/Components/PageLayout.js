import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import WelcomePage from '../Pages/WelcomePage.js';
import QuizPage from '../Pages/QuizPage.js';
import OurValues from '../Pages/OurValues.js';
import About from '../Pages/About.js';

export default class PageLayout extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/' component={WelcomePage} />
					<Route path='/Quiz' component={QuizPage} />
					<Route path='/OurValues' component={OurValues} />
					<Route path='/About' component={About} />
				</Switch>
			</main>
		);
	}
}