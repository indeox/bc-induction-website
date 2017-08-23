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

	state = { 
		inductionForm: { 
			exampleInputUsername: '',
			exampleInputEmail: ''
		} 
	}

	setFormState = (key, value) => this.setState({
      	...this.state,
  		inductionForm: {
        	...this.state.inductionForm,
        	[key]: value
      	}
    })

	render() {
		return (
			<main>
				<Switch>
					<Route 	path='/NeedToKnow' component={NeedToKnow} />
					<Route 	path='/OurValues' component={OurValues} />
					<Route 	path='/OurBehaviours' component={OurBehaviours} />
					<Route 	path='/SBUs' component={SBUs} />
					<Route 	path='/History' component={History} />
					<Route 	path='/Completion' 
							render={() => <Completion setFormState={this.setFormState} appState={this.state} />} 
					/>
					<Route 	path='/BCDigital' render={() => <BCDigital inductionFormState={this.state.inductionForm} />} />
				</Switch>
			</main>
		);
	}
}