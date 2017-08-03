import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';

import classroom from '../Images/classroom.jpg';
import history from '../Images/history-landing-page.jpg';
import greatd from '../Images/thegreatd.jpg';
import greatd2 from '../Images/greatd2.jpg';
import liberation from '../Images/liberation.jpg';
import logo from '../Images/bc-logo.png';
import modern_bc from '../Images/modern_bc.jpg';
import teaching from '../Images/teaching.jpg';
import uruguay from '../Images/uruguay.png';

export default class QuizPage extends Component {

	render() {

		const style1 = {
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 14,
            lineHeight: '5px',
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }

        const style2 = {
            fontFamily: 'Georgia',
            fontSize: 25,
            lineHeight: '5px',
            color: 'white',
            display: 'flex', alignItems: 'left', justifyContent: 'left'
        }

        const style3 = {
            color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'flex-end'
        }

		return (
			<div>
				<Parallax ref='parallax' pages={4}>

					<Parallax.Layer offset={0} speed={1} style={{ backgroundColor: 'black' }} />
					<Parallax.Layer offset={1} speed={1} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={2} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={2.9} speed={0.5} style={{ backgroundColor: 'black' }} />

					{/* Page 1 */}
				    <Parallax.Layer offset={0} speed={0.5} onClick={() => this.refs.parallax.scrollTo(0.6)} >
				        <span><img src={history} height='100%' width='100%' alt='#' /></span>
				    </Parallax.Layer>
				    {/* Page 2 */}
				    <Parallax.Layer offset={0.99} speed={0.65} onClick={() => this.refs.parallax.scrollTo(1.2)} >
				        <span><img src={greatd} height='100%' width='100%' alt='#' /></span>
				    </Parallax.Layer>
				    {/* Page 3 */}
				    <Parallax.Layer offset={1.25} speed={0.5} onClick={() => this.refs.parallax.scrollTo(1.82)}>
				        <span><img src={greatd2} height='100%' width='100%' alt='#' /></span>
				    </Parallax.Layer>
				    {/* Page 4 */}
				    <Parallax.Layer offset={1.9} speed={0.1} onClick={() => this.refs.parallax.scrollTo(2.54)} >
				        <span><img src={liberation} height='100%' width='100%' alt='#' /></span>
				    </Parallax.Layer>
					{/* Page 5 */}
				    <Parallax.Layer offset={2.7} speed={0.2} style={style1} >
				    		<span><img src={uruguay} alt='#' height='125%' width='100%' /></span>
				    </Parallax.Layer>
				    <Parallax.Layer offset={2.7} speed={0.2} style={style2} >
				    		<img src={classroom} alt='#' height='52.5%' width='29.5%' />
				    </Parallax.Layer>
				    <Parallax.Layer offset={2.7} speed={0.2} style={style3} onClick={() => this.refs.parallax.scrollTo(3.3)} >
				    		<img src={teaching} alt='#' height='52.5%' width='35%' />
				    </Parallax.Layer>
				    <Parallax.Layer offset={3.1} speed={0.2} style={style2} ><p>Our work in</p></Parallax.Layer>
				    <Parallax.Layer offset={3.2} speed={0.2} style={style2} ><p>Columbia has helped</p></Parallax.Layer>
				    <Parallax.Layer offset={3.3} speed={0.2} style={style2} ><p>5000 children find food</p></Parallax.Layer>
				    {/* Page 6 */}
				    <Parallax.Layer offset={3} speed={1}>
				        <span><img src={modern_bc} height='100%' width='100%' alt='#' /></span>
				    </Parallax.Layer>
				</Parallax>
			</div>
		);
	}
}