import React, { Component } from "react";

export default class Graph extends Component {

	render() {
    	return (	
			<div className="container-fluid text-center">
				<div className="row">
					<dl>
					  <dt>How we Reach People</dt>
					  <dd className="percentage percentage-15"><span className="text">In Person: 20m</span></dd>
					  <dd className="percentage percentage-85"><span className="text">Online: 500m</span></dd>
					</dl>

					<dl>
					  <dt>For Every £1 of Foreign Office Grant we Receive, we Generated over £5.28 of Income from Other Sources.</dt>
					  <dd className="percentage percentage-20"><span className="text">Foreign Office</span></dd>
					  <dd className="percentage percentage-100"><span className="text">Our Contribution</span></dd>
					</dl>

					<dl>
					  <dt>Estimated World Population Speaking English</dt>
					  <dd className="percentage percentage-15"><span className="text">2010</span></dd>
					  <dd className="percentage percentage-20"><span className="text">2017</span></dd>
					  <dd className="percentage percentage-25"><span className="text">2020</span></dd>
					</dl>
				</div>
			</div>
    	);
    }
}