import React, { Component } from 'react';

class PageHead extends Component {
	render() {
		return (
			<p>{this.props.title}</p>
		);
	}
}

export default PageHead;