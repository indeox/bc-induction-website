import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class MenuBar extends Component {

	render() {
		return (
			<div>
				<ul>
					<li><Link to='/'>BC Homepage</Link></li>
					<li><Link to='History'>History</Link></li>
					<li><Link to='OurValues'>Our Values</Link></li>
					<li><Link to='About'>About</Link></li>
				</ul>
			</div>
		);
	}
}

export default MenuBar;