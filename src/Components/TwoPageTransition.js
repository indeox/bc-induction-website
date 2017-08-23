/*
* Swipe Wrapper component
*/
import "../CSS/two-page-transition.css";
import React, { Component } from "react";

import SwipeButton from "../Components/SwipeButton.js";

export default class TwoPageTransition extends Component {
  constructor(props) {
    super(props);
    this.state = { sbuIsClicked: false };
  }

  render() {
    console.log("sbuIsClicked: " + this.state.sbuIsClicked);
    return (
      <div className="pg-wrapper">
        <div className="main">
          <div className="button-row">
            <div style={{ backgroundImage: `url(${this.props.bgPicURL})` }}>
              <div
                className={
                  this.state.sbuIsClicked
                    ? "sbu-content-clicked"
                    : "sbu-content"
                }
              >
                <h1>
                  {this.props.leftPageHeader}
                </h1>
                <h2>
                  {this.props.leftPageSubtitle1}
                </h2>
                <p>
                  {this.props.leftPageContent1}
                </p>
                <h2>
                  {this.props.leftPageSubtitle2}
                </h2>
                <p>
                  {this.props.leftPageContent2}
                </p>
                <SwipeButton title="See Map" clickAction={this.onSBUClick()} />
              </div>
            </div>
            <div
              className={
                this.state.sbuIsClicked ? "sbu-map-clicked" : "sbu-map"
              }
              tabIndex="1"
            >
              {this.props.rightPageContent}
              <SwipeButton
                title="Back to Info"
                clickAction={this.onSBUClick()}
              />
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
