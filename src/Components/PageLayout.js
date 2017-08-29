import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import BCDigital from '../Pages/BCDigital';
import Completion from '../Pages/Completion';
import Done from '../Pages/Done';
import History from '../Pages/History';
import Introduction from '../Pages/Introduction';
import NeedToKnow from '../Pages/NeedToKnow';
import OurValues from '../Pages/OurValues';
import OurBehaviours from '../Pages/OurBehaviours';
import SBUs from '../Pages/SBUs';

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
					<Route 	path='/BCDigital' render={() => <BCDigital inductionFormState={this.state.inductionForm} />} />
					<Route 	path='/Done' component={Done} />
					<Route 	path='/Introduction' component={Introduction} />
					<Route 	path='/NeedToKnow' component={NeedToKnow} />
					<Route 	path='/OurValues' component={OurValues} />
					<Route 	path='/OurBehaviours' component={OurBehaviours} />
					<Route 	path='/SBUs' component={SBUs} />
					<Route 	path='/History' component={History} />
					<Route 	path='/Completion' 
							render={() => <Completion setFormState={this.setFormState} appState={this.state} />} 
					/>
				</Switch>
			</main>
		);
	}
}