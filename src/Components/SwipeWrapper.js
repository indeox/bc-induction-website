/*
* Swipe Wrapper component
*/
import "../CSS/swipe-wrapper.css";
import React, { Component } from "react";

const SwipeWrapper = ({ className = "" }) => {
  var isClicked = false;
  return (
    <div className="swipe-wrapper">
      <div className="main">
        <div className="button-row">
          <div>
            <div className="sbu-content" tabIndex="1">
              <h1>sbu1</h1>
            </div>
            <div className="sbu-map" tabIndex="1">
              <h1>map1 here</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); //end of return
}; //end of const

export default SwipeWrapper;
