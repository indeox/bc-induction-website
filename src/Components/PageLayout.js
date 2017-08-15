import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../Pages/About.js';
import SBUs from '../Pages/SBUs.js';
import QuizPage from '../Pages/QuizPage.js';
import OurValues from '../Pages/OurValues.js';
import OurBehaviours from '../Pages/OurBehaviours.js';
import WelcomePage from '../Pages/WelcomePage.js';

export default class PageLayout extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/' component={WelcomePage} />
					<Route path='/About' component={About} />
					<Route path='/OurValues' component={OurValues} />
					<Route path='/OurBehaviours' component={OurBehaviours} />
					<Route path='/SBUs' component={SBUs} />
					<Route path='/QuizPage' component={QuizPage} />
				</Switch>
			</main>
		);
	}
}