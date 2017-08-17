import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NeedToKnow from '../Pages/NeedToKnow';
import SBUs from '../Pages/SBUs';
import History from '../Pages/History';
import OurValues from '../Pages/OurValues';
import OurBehaviours from '../Pages/OurBehaviours';
import Completion from '../Pages/Completion';
import BCDigital from '../Pages/BCDigital';

export default class PageLayout extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route path='/NeedToKnow' component={NeedToKnow} />
					<Route path='/OurValues' component={OurValues} />
					<Route path='/OurBehaviours' component={OurBehaviours} />
					<Route path='/SBUs' component={SBUs} />
					<Route path='/History' component={History} />
					<Route path='/Completion' component={Completion} />
					<Route path='/BCDigital' component={BCDigital} />
				</Switch>
			</main>
		);
	}
}