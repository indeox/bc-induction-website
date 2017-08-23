/*
* Pinned Map component
*/
import "../CSS/pinned-map.css";
import React, { Component } from "react";

const PinnedMap = ({ mapMaxWidth, className = "" }) => {
  return (
    <div className="map" style={{maxWidth: mapMaxWidth+"px"}}>
      <div className="distribution-map">
        <img src="https://s24.postimg.org/jnd9wc0n9/M7a_Uku_S.png" />
        <button className="map-point" style={{top: "15%", left: "35%"}}>
          <div className="content">
            <div className="centered-y">
              <h2 id="location">A Place</h2>
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
              <h2 id="location" >Place</h2>
              <img id="location-pic" src="http://lorempixel.com/600/600/nature/1/"/>
              <p>blah blah blah</p>
              <p>blah blah blah</p>
              <p>blah blah blah</p>
            </div>
          </div>
        </button>
        <button className="map-point" style={{top: "45%", left: "16%"}}>
          <div className="content">
            <div className="centered-y">
              <h2>Place</h2>
              <p>blah blah blah</p>
            </div>
          </div>
        </button>
        <button className="map-point" style={{top: "60%", left: "53%"}}>
          <div className="content">
            <div className="centered-y">
              <h2>Place</h2>
              <p>blah blah blah</p>
            </div>
          </div>
        </button>
        <button className="map-point" style={{top: "25%", left: "70%"}}>
          <div className="content">
            <div className="centered-y">
              <h2>Place</h2>
              <p>blah blah blah</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  ); //end of return
}; //end of const 

export default PinnedMap;
