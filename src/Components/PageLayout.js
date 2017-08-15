import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NeedToKnow from '../Pages/NeedToKnow.js';
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
					<Route path='/NeedToKnow' component={NeedToKnow} />
					<Route path='/OurValues' component={OurValues} />
					<Route path='/OurBehaviours' component={OurBehaviours} />
					<Route path='/SBUs' component={SBUs} />
					<Route path='/QuizPage' component={QuizPage} />
				</Switch>
			</main>
		);
	}
}