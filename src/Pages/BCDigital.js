import React, { Component } from "react";
import Parallax from "react-springy-parallax";
// Components
import Footer from '../Components/Footer.js';
import ProgressBar from '../Components/ProgressBar';
// Images
import dave from '../Images/Hong_Kong_00016.jpg';

export default class BCDigital extends Component {

  	render() {
    	return (
    		<Parallax ref='parallax' pages={3.5}>
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
            									<img className="img-responsive" src={dave} alt='#' />
            									<div className="profile-info">
              										<img className="profile-pic" src={dave} alt='#' />
										            <h2 className="hvr-underline-from-center">Chris<span>Web Developer</span></h2>
									              	<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum 
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
									              	<h2 className="hvr-underline-from-center">Kristen<span>Web Developer</span></h2>
									              	<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum 
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
													<img className="profile-pic" src={dave} alt='#'/>
									              	<h2 className="hvr-underline-from-center">Rebecca<span>Arts?</span></h2>
								              		<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum 
								              		dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, 
								              		consectetur adipiscing elit.</div>
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
									              	<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum 
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
									              	<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum
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
									              	<h2 className="hvr-underline-from-center">Emma<span>Marketing</span></h2>
								              		<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum 
								              		dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, 
								              		consectetur adipiscing elit.</div>
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