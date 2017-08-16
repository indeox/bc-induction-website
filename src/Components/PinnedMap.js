/*
* Pinned Map component
*/
import "../CSS/pinned-map.css";
import React, { Component } from "react";

const PinnedMap = ({ className = "" }) => {
  return (
    <div className="map">
      <h1>So you're probably wondering what an "SBU" is and why you decided to join one...</h1>
      <p className="above-map-description">
        WORDS. 
        <strong>Click the points to read about some SBU stuff.</strong>
      </p>
      <div className="distribution-map">
        <img src="https://s24.postimg.org/jnd9wc0n9/M7a_Uku_S.png" />
        <button className="map-point" style={{top: "15%", left: "35%"}}>
          <div className="content">
            <div className="centered-y">
              <h2>A Place</h2>
              <p>
                You can put plenty of details in here. In the original, I listed
                contact information and linked phone numbers and email
                addresses.
              </p>
            </div>
          </div>
        </button>
        <button className="map-point" style={{top: "35%", left: "50%"}}>
          <div className="content">
            <div className="centered-y">
              <h2>Place</h2>
              <p>words</p>
            </div>
          </div>
        </button>
        <button className="map-point" style={{top: "76%", left: "82.5%"}}>
          <div className="content">
            <div className="centered-y">
              <h2>Place</h2>
              <p>I solemnly swear that I am up to no good</p>
            </div>
          </div>
        </button>
        <button className="map-point" style={{top: "45%", left: "16%"}}>
          <div className="content">
            <div className="centered-y">
              <h2>Place</h2>
              <p>I&rsquo;m a marshmallow</p>
            </div>
          </div>
        </button>
        <button className="map-point" style={{top: "60%", left: "53%"}}>
          <div className="content">
            <div className="centered-y">
              <h2>Place</h2>
              <p>I bless the rains</p>
            </div>
          </div>
        </button>
        <button className="map-point" style={{top: "25%", left: "70%"}}>
          <div className="content">
            <div className="centered-y">
              <h2>Place</h2>
              <p>&mdash; 007</p>
            </div>
          </div>
        </button>
      </div>
      <p className="below-map-description">
        MORE INFO HOORAY!
      </p>
    </div>
  ); //end of return
}; //end of const 

export default PinnedMap;
