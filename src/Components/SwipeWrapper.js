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
            <div className="sbu-content" tabIndex="1">sbu1</div>
          </div>
          <div>
            <div className="sbu-content" tabIndex="1">sbu2</div>
          </div>
          <div>
            <div className="sbu-content" tabIndex="1">sbu3</div>
          </div>
        </div>
      </div>
    </div>
  ); //end of return
}; //end of const

export default SwipeWrapper;
