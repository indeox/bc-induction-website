import Parallax from 'react-springy-parallax';
import React, { Component } from 'react';

import ProgressBar from '../Components/ProgressBar';

export default class QuizPage extends Component {

	render() {

		return (
			<div>
				<Parallax ref='parallax' pages={6.25}>

					<ProgressBar 
						continueLink={"#/OurValues"}
						currentIndex={0}
	          			stepLabels={[
				            "Our History",
				            "Our Values",
				            "Our Behaviours",
				            "Our SBU's",
				            "Key Information"
	          			]}
	          		/>
	          		<br/><br/><br/>

					<Parallax.Layer offset={0} speed={1} style={{ backgroundColor: 'black' }} />
					<Parallax.Layer offset={0.5} speed={1} style={{ backgroundColor: 'black' }} />
					<Parallax.Layer offset={1.5} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={2} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={2.9} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={4} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={5} speed={0.5} style={{ backgroundColor: 'black' }} />

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
				    <Parallax.Layer offset={0.99} speed={0.4} onClick={() => this.refs.parallax.scrollTo(1.27)} >
				        <div className="slide" id='slide2'>
						  	<div className="titleright">
						    	<h1>Growing tensions...</h1>
						    	The balance of power was shifting and extreme ideologies were gaining ground. The October 
						    	Revolution of 1917 had brought the Bolsheviks to power in Russia, while in 1922 Mussolini 
						    	had taken charge of Italy. 
						    	<br/><br/>
						    	This was followed by the rise of Nazism in Germany, with Hitler 
						    	coming to power in Berlin in January 1933. In Spain, the civil war that would bring Franco’s 
						    	Falangists to power was shortly to begin. Across Europe and the wider world, Britain’s influence 
						    	in trade and diplomacy was under significant challenge.
						  	</div>
						</div>
				    </Parallax.Layer>
				    {/* Page 3 */}
				    <Parallax.Layer offset={1.57} speed={0.5} onClick={() => this.refs.parallax.scrollTo(2.2)}>
				        <div className="slide" id='slide3'>
						  	<div className="title">
						    	<h1>Our Introduction</h1>
						    	One of the ways that the government reacted to the growing threat to British interests was the 
						    	creation of the British Council. 
						    	<br/><br/>
						    	It began operations in 1934.  
						  	</div>
						</div>
				    </Parallax.Layer>
				    {/* Page 4 */}
				    <Parallax.Layer offset={2.2} speed={0.3} onClick={() => this.refs.parallax.scrollTo(2.5)} >
				        <div className="slide" id='slide4'>
						  	<div className="titleright">
						    	<h1>Royal Charter</h1>
								The organisation’s original aim is set out in this extract from our 1940-41 Annual Report:
								<br/><br/>
								“The Council’s aim is to create in a country overseas a basis of friendly knowledge and understanding 
								of the people of this country, of their philosophy and way of life, which will lead to a sympathetic 
								appreciation of British foreign policy, whatever for the moment that policy may be and from whatever 
								political conviction it may spring. While in times of danger this friendly knowledge and understanding 
								becomes vital to the successful prosecution of war (that is the Council’s place in the war effort), in 
								times of peace it is not less valuable".
						  	</div>
						</div>
				    </Parallax.Layer>
					{/* Page 5 */}
				    <Parallax.Layer offset={3} speed={0.15} onClick={() => this.refs.parallax.scrollTo(4)} >
				        <div className="slide" id='slide5'>
						  	<div className="title">
						    	<h1>The Aim</h1>
								Our mission in the Royal Charter was stated as: “promoting a wider knowledge of [the United Kingdom] 
								and the English language abroad and developing closer cultural relations between [the UK] and other 
								countries”.
						  	</div>
						</div>
				    </Parallax.Layer>
				    {/* Page 6 */}
				    <Parallax.Layer offset={3.95} speed={0.75} onClick={() => this.refs.parallax.scrollTo(5)} >
				        <div className="slide" id='slide6'>
						  	<div className="titleright">
						    	<h1>Our work in classrooms</h1>
								Our mission in the Royal Charter was stated as: "promoting a wider knowledge of [the United Kingdom] 
								and the English language abroad and developing closer cultural relations between [the UK] and other 
								countries".
						  	</div>
						</div>
				    </Parallax.Layer>
				    {/* Page 7 */}
				    <Parallax.Layer offset={4.3} speed={0.5} onClick={() => this.refs.parallax.scrollTo(5)} >
				        <div className="slide" id='slide7'>
						  	<div className="title">
						    	<h1>Our work in classrooms</h1>
								Our mission in the Royal Charter was stated as: "promoting a wider knowledge of [the United Kingdom] 
								and the English language abroad and developing closer cultural relations between [the UK] and other 
								countries".
						  	</div>
						</div>
				    </Parallax.Layer>
				    {/* Page 8 */}
				    <Parallax.Layer offset={4.99} speed={0.3} onClick={() => this.refs.parallax.scrollTo(5)} >
				        <div className="slide" id='slide8'>
						  	<div className="titleright">
						    	<h1>Our work in classrooms</h1>
								Our mission in the Royal Charter was stated as: "promoting a wider knowledge of [the United Kingdom] 
								and the English language abroad and developing closer cultural relations between [the UK] and other 
								countries".
						  	</div>
						</div>
				    </Parallax.Layer>
					{/* Page 9 */}
				    <Parallax.Layer offset={5.5} speed={1}>
				        <a href='/#/OurValues'>
				        	<div className="slide" id='slide9'>
						  		<div className="title">
							    	<h1>Lets learn more</h1>
									Click on the image to begin your journey into our vast organisation.
						  		</div>
							</div>
						</a>
				    </Parallax.Layer>
				</Parallax>
			</div>
		);
	}
}