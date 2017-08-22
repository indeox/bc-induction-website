import React, { Component } from "react";
import Parallax from "react-springy-parallax";
// Components
import Footer from '../Components/Footer.js';
import ProgressBar from '../Components/ProgressBar';
// Images
import dave from '../Images/Hong_Kong_00016.jpg';
import Emma from '../Images/emma.jpg';
import Nancy from '../Images/nancy.jpg';
import Rebecca from '../Images/rebecca.png';

export default class BCDigital extends Component {

  	render() {
    	return (
    		<Parallax ref='parallax' pages={4}>
				<ProgressBar 
					currentIndex={5}
	      			stepLabels={[
			            "Your personal journey now begins"
	      			]}
	      			test={false}
	      		/>
	      		<br/><br/><br/>

				<div className="container-fluid bg-2 text-center">
				  	<h3 className="margin">Welcome to BC Digital - Your New Team</h3>
				  	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
				  	dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
				  	ea commodo consequat. </p>
				</div>

				<div className="container">
					<div className="row">
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
						<div className="container">
  							<div className="row ">
							<br/><br/>
    							<div className="col-lg-12">
      								<div>
										<div className="col-md-4">
          									<div className="profile-card text-center">
            									<img className="img-responsive" id='profilePic' src={Nancy} alt='#' />
            									<div className="profile-info">
              										<img className="profile-pic" src={Nancy} alt='#' />
										            <h2 className="hvr-underline-from-center">Nancy<span>Games</span></h2>
									              	<div className='justifyText'>I'm a politics student currently studying at LSE, who loves playing games, 
									              	reading comics and using her slow cooker.</div>
									              	<a href="http://www.twitter.com/mike_youngg"><i className="fa fa-twitter fa-2x"></i></a>
									              	<a href="mailto:michael_y@live.co.uk"><i className="fa fa-envelope-o fa-2x"></i></a>
									              	<a href="http://www.linkedin.com"><i className="fa fa-linkedin fa-2x"></i></a>
            									</div>
          									</div>
        								</div>
										<div className="col-md-4">
  											<div className="profile-card text-center">
    											<img className="img-responsive" src={dave} alt='#' />
    											<div className="profile-info">
      												<img className="profile-pic" src={dave} alt='#' />
									              	<h2 className="hvr-underline-from-center">Kristen<span>Web Developer</span></h2>
									              	<div className='justifyText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum 
									              	dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, 
									              	consectetur adipiscing elit.</div>
									              	<a href="http://www.twitter.com/mike_youngg"><i className="fa fa-twitter fa-2x"></i></a>
									              	<a href="mailto:michael_y@live.co.uk"><i className="fa fa-envelope-o fa-2x"></i></a>
									              	<a href="http://www.linkedin.com"><i className="fa fa-linkedin fa-2x"></i></a>
										        </div>
  											</div>
										</div>
										<div className="col-md-4">
											<div className="profile-card text-center">
												<img className="img-responsive" id='profilePic' src={Rebecca} alt='#' />
												<div className="profile-info">
													<img className="profile-pic" src={Rebecca} alt='#' height='100' />
									              	<h2 className="hvr-underline-from-center">Rebecca<span>Cultural Skills</span></h2>
								              		<div className='justifyText'>I'm interning with the Cultural Skills Unit, where I assist with programmes, communications, 
								              		and marketing. I am also Co-Project Managing the Group Intern Project.</div>
													<br/>
													<div className='justifyText'>Outside work, I spend as much time as possible outdoors and with family and friends; running, 
													cycling, and camping. I also love cooking, giraffes, and Arabic.</div>
								              		<a href="http://www.twitter.com/mike_youngg"><i className="fa fa-twitter fa-2x"></i></a>
								              		<a href="mailto:michael_y@live.co.uk"><i className="fa fa-envelope-o fa-2x"></i></a>
								              		<a href="http://www.linkedin.com"><i className="fa fa-linkedin fa-2x"></i></a>
									            </div>
											</div>
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
          									<div className="profile-card text-center">
            									<img className="img-responsive" src={dave} alt='#' />
            									<div className="profile-info">
              										<img className="profile-pic" src={dave} alt='#' />
										            <h2 className="hvr-underline-from-center">Aqila<span>Publishing</span></h2>
									              	<div className='justifyText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum 
									              	dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, 
									              	consectetur adipiscing elit.</div>
									              	<a href="http://www.twitter.com/mike_youngg"><i className="fa fa-twitter fa-2x"></i></a>
									              	<a href="mailto:michael_y@live.co.uk"><i className="fa fa-envelope-o fa-2x"></i></a>
									              	<a href="http://www.linkedin.com"><i className="fa fa-linkedin fa-2x"></i></a>
            									</div>
          									</div>
        								</div>
										<div className="col-md-4">
  											<div className="profile-card text-center">
    											<img className="img-responsive" src={dave} alt='#' />
    											<div className="profile-info">
      												<img className="profile-pic" src={dave} alt='#' />
									              	<h2 className="hvr-underline-from-center">Fariha<span>Law</span></h2>
									              	<div className='justifyText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum
									              	dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, 
									              	consectetur adipiscing elit.</div>
									              	<a href="http://www.twitter.com/mike_youngg"><i className="fa fa-twitter fa-2x"></i></a>
									              	<a href="mailto:michael_y@live.co.uk"><i className="fa fa-envelope-o fa-2x"></i></a>
									              	<a href="http://www.linkedin.com"><i className="fa fa-linkedin fa-2x"></i></a>
										        </div>
  											</div>
										</div>
										<div className="col-md-4">
											<div className="profile-card text-center">
												<img className="img-responsive" src={Emma} alt='#' />
												<div className="profile-info">
													<img className="profile-pic" src={Emma} alt='#' />
									              	<h2 className="hvr-underline-from-center">Emma<span>Marketing</span></h2>
								              		<div className='justifyText'>I am a currently working as the digital marketing intern from Cardiff, for the Arts sector of the British Council. 
								              		My work ranges of projects all over the world from Saptan Stories in India to the Hull city of culture showcase.</div>
								              		<br/>
								              		<div className='justifyText'>I'm very sociable and so enjoy spending as much time as I can with friends and family outside of work. I love music and regularly got to music events,
								              		performances or festivals.</div>
								              		<a href="http://www.twitter.com/mike_youngg"><i className="fa fa-twitter fa-2x"></i></a>
								              		<a href="mailto:michael_y@live.co.uk"><i className="fa fa-envelope-o fa-2x"></i></a>
								              		<a href="http://www.linkedin.com"><i className="fa fa-linkedin fa-2x"></i></a>
									            </div>
											</div>
										</div>
      								</div>
    							</div>
  							</div>
  						</div>
  					</div>
  				</div>

				<div className="container-fluid bg-2 text-center">
				  	<h3 className="margin">Your New Workplace</h3>
				  	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				  	Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
				
				<div className="container-fluid bg-1">
					<div className="row">
						<div className="col-lg-12">
							<div className="col-md-4">
								<img src={dave} className="img-responsive" alt="#" class="rounded-top" />
							</div>
							<div className="col-md-4">
								<img src={dave} className="img-responsive" alt="#" class="rounded-top" />
							</div>
							<div className="col-md-4">
								<img src={dave} className="img-responsive" alt="#" class="rounded-top" />
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</Parallax>
    	);
  	}
}