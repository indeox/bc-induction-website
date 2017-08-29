import Parallax from 'react-springy-parallax';
import React, { Component } from 'react';

import ProgressBar from '../Components/ProgressBar';
import Footer from "../Components/Footer.js";
import ScrollArrow from "../Components/ScrollArrow.js";

export default class QuizPage extends Component {

	render() {

		return (
			<div>
				<Parallax ref='parallax' pages={11.76}>
					<ProgressBar 
						continueLink={"#/OurValues"}
						currentIndex={1}
	          			stepLabels={[
				            <a href='#/Introduction'>Introduction</a>,
				            <a href='#/History'>Our History</a>,
				            <a href='#/OurValues'>Our Values</a>,
				            <a href='#/OurBehaviours'>Our Behaviours</a>,
				            <a href='#/SBUs'>Our SBU's</a>,
				            <a href='#/NeedToKnow'>Key Information</a>,
				            <a href='#/Completion'>Meet your Team</a>,
				            <a href='#/Done'>Finish Up</a>
	          			]}
	          			test={false}
	          		/>
	          		<br/><br/><br/><br/><br/>

					<Parallax.Layer offset={0} speed={1} style={{ backgroundColor: 'black' }} />
					<Parallax.Layer offset={0.5} speed={1} style={{ backgroundColor: 'black' }} />
					<Parallax.Layer offset={1.5} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={2} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={2.9} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={4} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={4.5} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={5} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={5.5} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={6} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={6.5} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={7} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={7.5} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={8} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={8.5} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={9} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={9.5} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={10} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={10.5} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={11} speed={0.5} style={{ backgroundColor: 'black' }} />
                	<Parallax.Layer offset={11.5} speed={0.5} style={{ backgroundColor: 'black' }} />

					{/* Page 1 */}
				    <Parallax.Layer offset={0} speed={0.5} onClick={() => this.refs.parallax.scrollTo(0.6)} >
				        <div className="slide" id='slide1'>
						  	<div className="title">
						    	<h1>Our humble beginnings</h1>
						    	The early 1930s was a time of growing global instability and there were increasing 
						    	threats to British prosperity, security and influence. 
						    	<br/><br/>The Wall Street Crash of 1929 
						    	led to the Great Depression of the early 1930s with a huge drop in international trade, 
						    	falls in living standards, and high and persistent unemployment.
						  	</div>
						</div>
						<ScrollArrow/>
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
						    	We began operations in 1934.  
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
				    <Parallax.Layer offset={3.99} speed={0.75} onClick={() => this.refs.parallax.scrollTo(5)} >
				        <div className="slide" id='slide6'>
						  	<div className="titleright">
						    	<h1>1940s - Work in classrooms</h1>
								Professor Walter Starkie founded the British Council in Madrid and opened a school for 25 pupils. It 
								was known as The British Institute or 'El British' and offered concerts, lectures, film screenings and 
								exhibitions, as well as classes. It was the centre of British cultural relations in Madrid during the 
								Second World War. 
								<br/><br/>By 1943, pupil numbers had risen to 1500.
						  	</div>
						</div>
				    </Parallax.Layer>
				    {/* Page 7 */}
				    <Parallax.Layer offset={4.3} speed={0.5} onClick={() => this.refs.parallax.scrollTo(5)} >
				        <div className="slide" id='slide7'>
						  	<div className="title">
						    	<h1>1940s - Film</h1>
								During the 1940s, the British Council was a very different organisation operating in a very different 
								political and social climate. As part of its programme then it was concerned to promote an idea of 
								‘Britain and Britishness’ – and did so by becoming an enthusiastic commissioner of documentary films. 
								Over 120 films were produced as 'cultural propaganda' to counteract anything the Nazis might throw out 
								and to refute the idea that ours was a country stuck in the past. These films were designed to showcase 
								Britain to the rest of the world, at a time when Britain itself was under attack.
						  	</div>
						</div>
				    </Parallax.Layer>
				    {/* Page 8 */}
				    <Parallax.Layer offset={5} speed={0.3} onClick={() => this.refs.parallax.scrollTo(5)} >
				        <div className="slide" id='slide8'>
						  	<div className="titleright">
						    	<h1>1950s - Arts</h1>
								Following the success of Henry Moore and J.M.W. Turner’s exhibition in 1948, the format of juxtaposing 
								the work of artists from the 19th and 20th century was repeated. So in 1950, the work of Romantic painter 
								John Constable (1776–1837) was presented alongside that of contemporary sculptor Barbara Hepworth and 
								painter Matthew Smith.
						  	</div>
						</div>
				    </Parallax.Layer>
					{/* Page 9 */}
				    <Parallax.Layer offset={5.9} speed={0.05}>
			        	<div className="slide" id='slide9'>
					  		<div className="title">
						    	<h1>1960s - ELT</h1>
								Throughout the 1960s the British Council's "intense cultivation of ELT" was tied to the training of teaching 
								staff overseas rather than sending staff from London (as recommended in the Hill Report). 
								<br/><br/>
								Likewise this favoured the development of curricula that focused on the Council's role in Commonwealth countries. 
								This programme was championed by the Council's Controller of the Education Division, Arthur King, and represented 
								an emphasis on the developmental value of ELT, and its ability to cultivate partnerships with developing 
								nations.
					  		</div>
						</div>
				    </Parallax.Layer>
					{/* Page 10 */}
				    <Parallax.Layer offset={6.9} speed={0.3} onClick={() => this.refs.parallax.scrollTo(5)} >
				        <div className="slide" id='slide10'>
						  	<div className="titleright">
						    	<h1>1970s - Policy</h1>
								The changing nature of the Council's audiences reflected the value that its work had for Britain.
								During a funding review initiated by the incoming Prime Minister Edward Heath 
								the Council was lauded as an essential asset, giving good insight into how its activities were valued: 
								<br/><br/>"The British Council provides a form of British presence which the Duncan Committee for instance 
								regarded as being “an increasingly important medium through which Britain will project her interests and her 
								new approach to international relations”, enabling Britain to present herself as a trading and cultural 
								partner of major importance. Cultural exchanges deriving from Council work provide links with this country which 
								have far-reaching commercial implications."
						  	</div>
						</div>
				    </Parallax.Layer>
					{/* Page 11 */}
				    <Parallax.Layer offset={7.6} speed={0.1}>
				        <div className="slide" id='slide11'>
						  	<div className="titleright">
						    	<h1>2000s - Progress</h1>
								In 2000-01 we worked in 229 towns and cities in 111 countries. Some of these are listed below:
								<br/><br/>Albania, Australia, Austria, Azerbaijan, Bangladesh, Brazil, Brunei, Bulgaria, Burma, Cameroon, Canada, Chile, 
								China, Colombia, Jerusalem (West Bank and Gaza), Ecuador, Egypt, Eritrea, Germany, India, Indonesia, Iran, Israël, Italy, 
								Jamaica, Japan, Libya, Macedonia (former Yugoslav Republic of), Malawi, Mozambique, New Zealand, Nigeria, Saudi Arabia, 
								Sénégal, Sierra Leone, Singapore, Syria, Thailand, Ukraine, United Arab Emirates, USA, Uzbekistan, Venezuela, Vietnam, 
								Yemen, Yugoslavia, Zambia, Zimbabwe.
								<br/><br/>As you can see, we don't shy away from areas of conflict, and instead we are normally the first to arrive and
								the last to leave.
						  	</div>
						</div>
				    </Parallax.Layer>
					{/* Page 12 */}
				    <Parallax.Layer offset={8.5} speed={0.3} onClick={() => this.refs.parallax.scrollTo(5)} >
				        <div className="slide" id='slide12'>
						  	<div className="titleright">
						    	<h1>2010s - Investing</h1>
								We focused upon investing in the UK’s most attractive assets
								as the UK’s assets of English, education, sport and culture are attractive to leaders
								and learners across the world.
								<br/><br/>
								We worked to increase access for the millions of people who want to learn from,
								share in and access what the UK has to offer.
								In the big emerging economies, we worked with
								people of every age and background and with partners
								in the public and private sectors to support economic,
								social and cultural development.
								<br/><br/>This work helped to secure the UK’s long-term
								relationships, as well as our partnership, with these
								countries and contributed to the growth of our
								own economy.
						  	</div>
						</div>
				    </Parallax.Layer>
				    {/* Page 13 */}
				    <Parallax.Layer offset={9.2} speed={0.5} onClick={() => this.refs.parallax.scrollTo(5)} >
				        <div className="slide" id='slide13'>
						  	<div className="title">
						    	<h1>Present</h1>
								Each year we reach over 20 million people face-to-face and more than 500 million 
								people online, via broadcasts and publications.
						  	</div>
						</div>
				    </Parallax.Layer>
				    {/* Page 14 */}
				    <Parallax.Layer offset={9.999} speed={0.1} onClick={() => this.refs.parallax.scrollTo(5)} >
				        <div className="slide" id='slide14'>
						  	<div className="titleright">
						    	<h1>Future Plans</h1>
						    	<ul>
						    		<li>
										Work with young people at risk of violent extremism and radicalisation by providing 
										opportunities for creative self-expression, education, English language learning and 
										wider skills to strengthen their voice and understanding of other cultures.
									</li>
									<li>
										India, China and emerging markets across the world are
										set to grow and develop, becoming more influential on
										the global stage in the coming decades. There will be
										substantial benefits from close co-operation, including
										in areas such as science, education and culture, and
										the creative industries.
									</li>
								</ul>
						  	</div>
						</div>
				    </Parallax.Layer>
				    {/* Page 15 */}
				    <Parallax.Layer offset={10.999} speed={0.5}>
				        <a href='/#/OurValues'>
				        	<div className="slide" id='slide15'>
						  		<div className="title">
							    	<h1>Lets learn more</h1>
									Click on the image to begin your journey into our vast organisation.
						  		</div>
							</div>
						</a>
				    </Parallax.Layer>
					<Footer />
				</Parallax>
			</div>
		);
	}
}