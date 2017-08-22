/*
* Swipe Wrapper component
*/
import "../CSS/two-page-transition.css";
import React, { Component } from "react";

export default class TwoPageTransition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sbuIsClicked: false };
  }

  render() {
    console.log("sbuIsClicked: " + this.state.sbuIsClicked);
    return (
      <div className="swipe-wrapper">
        <div className="main">
          <div className="button-row">
            <div>
              <div
                className={
                  this.state.sbuIsClicked
                    ? "sbu-content-clicked"
                    : "sbu-content"
                }
              >
                <h1>----------sbu info-----------</h1>
                <button className="button" onClick={this.onSBUClick()} tabIndex="1" > See Map </button>
              </div>
              <div
                className={
                  this.state.sbuIsClicked ? "sbu-map-clicked" : "sbu-map"
                }
                tabIndex="1"
              >
                {this.props.map}
                <button className="button" onClick={this.onSBUClick()} tabIndex="1"> Back to Info </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ); //end of return
  } //end of render

  onSBUClick() {
    return function() {
      this.setState(prevState => ({
        sbuIsClicked: !prevState.sbuIsClicked
      }));
    }.bind(this);
  }
} //end of class
