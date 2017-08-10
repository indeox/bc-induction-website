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
					<Parallax.Layer offset={1.5} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={2} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={2.9} speed={0.5} style={{ backgroundColor: 'black' }} />

					{/* Page 1 */}
				    <Parallax.Layer offset={0} speed={0.5} onClick={() => this.refs.parallax.scrollTo(0.6)} >
				        <div className="slide" id='slide1'>
						  	<div className="title">
						    	<h1>Our humble beginnings</h1>
						    	The early 1930s was a time of growing global instability and there were increasing 
						    	threats to British prosperity, security and influence.  The Wall Street Crash of 1929 
						    	led to the Great Depression of the early 1930s with a huge drop in international trade, 
						    	falls in living standards, and high and persistent unemployment.
						  	</div>
						</div>
				    </Parallax.Layer>
				    {/* Page 2 */}
				    <Parallax.Layer offset={0.99} speed={0.65} onClick={() => this.refs.parallax.scrollTo(1.27)} >
				        <div className="slide" id='slide2'>
						  	<div className="titleright">
						    	<h1>Growing tensions...</h1>
						    	The balance of power was shifting and extreme ideologies were gaining ground. The October 
						    	Revolution of 1917 had brought the Bolsheviks to power in Russia, while in 1922 Mussolini 
						    	had taken charge of Italy. This was followed by the rise of Nazism in Germany, with Hitler 
						    	coming to power in Berlin in January 1933. In Spain, the civil war that would bring Franco’s 
						    	Falangists to power was shortly to begin. Across Europe and the wider world, Britain’s influence 
						    	in trade and diplomacy was under significant challenge.
						  	</div>
						</div>
				    </Parallax.Layer>
				    {/* Page 3 */}
				    <Parallax.Layer offset={1.3} speed={0.5} onClick={() => this.refs.parallax.scrollTo(2.2)}>
				        <div className="slide" id='slide3'>
						  	<div className="title">
						    	<h1>Growing tensions...</h1>
						    	One of the ways that the government reacted to the growing threat to British interests was the 
						    	creation of the British Council. It began operations in 1934.  The organisation’s original aim 
						    	is set out in this extract from our 1940-41 Annual Report:

								“The Council’s aim is to create in a country overseas a basis of friendly knowledge and understanding 
								of the people of this country, of their philosophy and way of life, which will lead to a sympathetic 
								appreciation of British foreign policy, whatever for the moment that policy may be and from whatever 
								political conviction it may spring. While in times of danger this friendly knowledge and understanding 
								becomes vital to the successful prosecution of war (that is the Council’s place in the war effort), in 
								times of peace it is not less valuable".
						  	</div>
						</div>
				    </Parallax.Layer>
				    {/* Page 4 */}
				    <Parallax.Layer offset={2.2} speed={0} onClick={() => this.refs.parallax.scrollTo(2.5)} >
				        <div className="slide" id='slide4'>
						  	<div className="titleright">
						    	<h1>Royal Charter Bois</h1>
								Our mission in the Royal Charter was stated as: “promoting a wider knowledge of [the United Kingdom] 
								and the English language abroad and developing closer cultural relations between [the UK] and other 
								countries”.
						  	</div>
						</div>
				    </Parallax.Layer>
					{/* Page 5 */}
				    <Parallax.Layer offset={3.1} speed={0.2} style={style1} >
				    		<span><img src={uruguay} alt='#' height='125%' width='100%' /></span>
				    </Parallax.Layer>
				    <Parallax.Layer offset={3.2} speed={0.1} style={style2} >
				    		<img src={classroom} alt='#' height='52.5%' width='29.5%' />
				    </Parallax.Layer>
				    <Parallax.Layer offset={3} speed={0.2} style={style3} onClick={() => this.refs.parallax.scrollTo(3)}>
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