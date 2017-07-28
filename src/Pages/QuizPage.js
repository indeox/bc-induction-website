import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';

import history from '../Images/history-landing-page.jpg';
import greatd from '../Images/thegreatd.jpg';
import greatd2 from '../Images/greatd2.jpg';
import modern_bc from '../Images/modern_bc.jpg';
import liberation from '../Images/liberation.jpg';

export default class QuizPage extends Component {

	render() {
		return (
			<div>
				<Parallax ref='parallax' pages={3}>
				    <Parallax.Layer offset={0} speed={0.5} >
				        <span><img src={history} height='100%' width='100%' alt='#' /></span>
				    </Parallax.Layer>
				    <Parallax.Layer offset={0.99} speed={0.65}>
				        <span><img src={greatd} height='100%' width='100%' alt='#' /></span>
				    </Parallax.Layer>
				    <Parallax.Layer offset={1.25} speed={0.5}>
				        <span><img src={greatd2} height='100%' width='100%' alt='#' /></span>
				    </Parallax.Layer>
				    <Parallax.Layer offset={1.9} speed={0.1}>
				        <span><img src={liberation} height='100%' width='100%' alt='#' /></span>
				    </Parallax.Layer>
				    <Parallax.Layer offset={2.00} speed={1.75}>
				        <span><img src={modern_bc} height='100%' width='100%' alt='#' /></span>
				    </Parallax.Layer>
				</Parallax>
			</div>
		);
	}
}