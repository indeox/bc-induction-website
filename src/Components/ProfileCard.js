import React, { Component } from 'react';

export default class ProfileCard extends Component {

  	render() {
  		return (
  			<div className="profile-card text-center">
  				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
				<img className="img-responsive" src={this.props.profileImage} alt='#' />
				<div className="profile-info">
					<img className="profile-pic" src={this.props.miniProfile} alt='#' />
		            <h2 className="hvr-underline-from-center">{this.props.name}<span>{this.props.roles}</span></h2>
	              	<div className='justifyText'>{this.props.children}</div>
	              	<a href={"http://www.twitter.com/" + this.props.twitter}><i className="fa fa-twitter fa-2x"></i></a>
	              	<a href={"mailto:" + this.props.email}><i className="fa fa-envelope-o fa-2x"></i></a>
	              	<a href={"http://www.linkedin.com/" + this.props.linkedIn}><i className="fa fa-linkedin fa-2x"></i></a>
				</div>
			</div>
  		);
  	}
}