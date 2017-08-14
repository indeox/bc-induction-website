import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import WelcomePage from '../Pages/WelcomePage.js';
import QuizPage from '../Pages/QuizPage.js';
import OurValues from '../Pages/OurValues.js';
import OurBehaviours from '../Pages/OurBehaviours.js';
import About from '../Pages/About.js';

export default class PageLayout extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/' component={WelcomePage} />
					<Route path='/QuizPage' component={QuizPage} />
					<Route path='/OurValues' component={OurValues} />
					<Route path='/OurBehaviours' component={OurBehaviours} />
					<Route path='/About' component={About} />
				</Switch>
			</main>
		);
	}
}