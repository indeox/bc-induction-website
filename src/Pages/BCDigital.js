import React, { Component } from "react";
import Parallax from "react-springy-parallax";
// Components
import Footer from '../Components/Footer.js';
import ProfileCard from '../Components/ProfileCard.js';
import ProgressBar from '../Components/ProgressBar';
// Images
import classroom from '../Images/classroom.jpg';
import mutual from '../Images/Hong_Kong_00016.jpg';
import ghana from "../Images/ghana.jpg";
import Aqila from '../Images/aqila.png';
import Chris from '../Images/chris.png';
import Emma from '../Images/emma.jpg';
import Kristen from '../Images/kristen.png';
import Nancy from '../Images/nancy.jpg';
import Rebecca from '../Images/rebecca.png';

export default class BCDigital extends Component {

  	render() {
    	return (
    		<Parallax ref='parallax' pages={2.55}>
				  <ProgressBar 
            continueLink={"#/Done"}
					  currentIndex={6}
            stepLabels={[
	      			<a href='#/Introduction' style={{color: 'white'}}>Introduction</a>,
              <a href='#/History' style={{color: 'white'}}>Our History</a>,
              <a href='#/OurValues' style={{color: 'white'}}>Our Values</a>,
              <a href='#/OurBehaviours' style={{color: 'white'}}>Our Behaviours</a>,
              <a href='#/SBUs' style={{color: 'white'}}>Our SBU's</a>,
              <a href='#/NeedToKnow' style={{color: 'white'}}>Key Information</a>,
              <a href='#/Completion' style={{color: 'white'}}>Meet your Team</a>,
              "Finish Up"
            ]}
	      	/>
	      	<br/><br/><br/><br/><br/>

				<div className="container-fluid bg-2 text-center">
				  	<h3 style={{fontSize: "35pt"}} className="margin">Welcome to BC Digital {this.props.inductionFormState.exampleInputUsername} - Your New Team</h3>
				  	<p style={{color: "#1abc9c", margin: "30px 120px", textAlign: "justify"}}>
              Hey! Welcome to the Digital team! We're really looking forward to meeting you in the near future, and hopefully you're
              excited to meet us as well. We want to give you an overview of the new team members that you will be working with to try 
              and get you as prepared for your first day as possible. Feel free to scroll on the profiles below to read each team members
              biography, and also to connect with them on social channels. We want you to feel as welcome as possible so please don't 
              hesitate to contact us.
            </p>
				</div>

				<div className="container">
					<div className="row">
						<div className="container">
  							<div className="row ">
							<br/><br/>
    							<div className="col-lg-12">
      								<div>
										<div className="col-md-4">
          									<ProfileCard
          										email=""
          										linkedIn=""
          										miniProfile={Nancy}
          										name="Nancy"
          										profileImage={Nancy}
          										roles="Games"
          										twitter=""
          									>
	          									I'm a politics student currently studying at LSE, who loves playing games, 
									            reading comics and using her slow cooker
						              		</ProfileCard>
        								</div>
										<div className="col-md-4">
  											<ProfileCard
          										email=""
          										linkedIn=""
          										miniProfile={Kristen}
          										name="Kristen"
          										profileImage={Kristen}
          										roles="Web Development"
          										twitter=""
          									>
	          									  I am interning with The British Council’s Digital Team 
								              	located on the ominous 2nd floor of the London branch. Each day encompasses a range of frontend 
								              	and backend site development as the team maintains and improves upon over 130 websites. The Digital 
								              	Team currently employs the Kanban style of agile development. As such each member completes numerous 
								              	broken up tasks or stories on a weekly basis.
								              	<br/><br/>
        												I will be returning to the University of St Andrews as a Magistrand or final year Computer 
        												Science student. In my limited spare time, I can be found dancing with my fellow teammates 
        												on the Blue Angels, Scotland’s leading competitive dance team, running along the coastal path, kayaking 
        												next to the pier, or tutoring my fellow St Andreans. Generally speaking, I am looking forward to 
        												completing my degree and reminding myself what freedom feels like and reacquainting myself with 
        												the concept of “a good night’s sleep”.
						              		</ProfileCard>
										</div>
										<div className="col-md-4">
											<ProfileCard
          										email=""
          										linkedIn=""
          										miniProfile={Rebecca}
          										name="Rebecca"
          										profileImage={Rebecca}
          										roles="Cultural Skills"
          										twitter=""
          									>
	          									  I'm interning with the Cultural Skills Unit, where I assist with programmes, communications, 
								              	and marketing. I am also Co-Project Managing the Group Intern Project.<br/><br/>
        												Outside work, I spend as much time as possible outdoors and with family and friends; running, 
        												cycling, and camping. I also love cooking, giraffes, and Arabic.
						              		</ProfileCard>
										</div>
      								</div>
    							</div>
  							</div>
  						</div>
  					</div>

					<div className="row">
						<div className="container">
  							<div className="row ">
    							<div className="col-lg-12">
      								<div>
										<div className="col-md-4">
          									<ProfileCard
          										email=""
          										linkedIn=""
          										miniProfile={Aqila}
          										name="Aqila"
          										profileImage={Aqila}
          										roles="Law"
          										text=""
          										twitter=""
          									>
          										I am currently a Corporate Affairs Intern, spread over five departments including Child
          										Protection, legal, and EDI. My deliverables include drafting country reports, attending 
          										steering lessons and presenting legal matters to other departments.<br/><br/>
          										Outside of work she is completing masters in law and volunteering at several charities. 
          									</ProfileCard>
        								</div>
										<div className="col-md-4">
  											<ProfileCard
          										email=""
          										linkedIn=""
          										miniProfile={Chris}
          										name="Chris"
          										profileImage={Chris}
          										roles="Web Developer"
          										text=""
          										twitter=""
          									>
          										I'm currently interning with the Digital Team where I code, watch YouTube and eat burritos.<br/><br/>
          										In my spare time I like sport, and help to teach coding.
          									</ProfileCard>
										</div>
										<div className="col-md-4">
											<ProfileCard
          										email=""
          										linkedIn=""
          										miniProfile={Emma}
          										name="Emma"
          										profileImage={Emma}
          										roles="Marketing"
          										twitter="emma"
          									>
	          									  I am a currently working as the digital marketing intern from Cardiff, for the Arts sector of the British Council.
						              			My work ranges of projects all over the world from Saptan Stories in India to the Hull city of culture showcase.<br/><br/>
						              			I'm very sociable and so enjoy spending as much time as I can with friends and family outside of work. I love music
						              			and regularly got to music events performances or festivals.
						              		</ProfileCard>
										</div>
      								</div>
    							</div>
  							</div>
  						</div>
  					</div>
  				</div>

				<div className="container-fluid bg-2 text-center">
				  	<h3 className="margin" style={{fontSize: "35pt"}}>About Your New Workplace</h3>
				  	<p style={{color: "#1abc9c", margin: "30px 120px", textAlign: "justify"}}>
              The development team sits within the Digital department and is responsible for driving forward a data driven culture in British Council. 
              The E-Commerce Digital Insights Manager will be responsible for working with key business areas, planning and ensuring implementation of 
              analytics tracking of digital products portfolio, analysing data available through various platforms, and providing insights for 
              E-Commerce business. 
            </p>
            <p style={{color: "#1abc9c", margin: "30px 120px", textAlign: "justify"}}>
              The digital team was created to transform the British Council’s digital portfolio. It sits within the Digital, Partnerships and 
              Innovation division, and is responsible for facilitating the British Council’s transition into a digital business with a focus on 
              developing our E-commerce presence. In recent years we have developed a world class content management system, known internally 
              as Solas. Working with colleagues in the organisation we have also won a number of awards including the Real IT Award for IT as 
              an Enabler, two awards at The Lovies for best social use of video, and the CIM Marketing Excellence Award for Product Sector 
              Innovation.
            </p>
				</div>
				
				<div className="container-fluid bg-1" style={{height: "100%"}}>
					<div className="row">
						<div className="col-lg-12">
							<div className="col-md-4">
								<img src={classroom} className="img-responsive" alt="#" style={{height: "405px"}} />
							</div>
							<div className="col-md-4">
								<img src={mutual} className="img-responsive" alt="#" style={{height: "405px"}} />
							</div>
							<div className="col-md-4">
								<img src={ghana} className="img-responsive" alt="#" style={{height: "405px"}} />
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</Parallax>
    	);
  	}
}