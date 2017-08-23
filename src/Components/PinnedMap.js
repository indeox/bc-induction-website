/*
* Pinned Map component
*/
import "../CSS/pinned-map.css";
import React, { Component } from "react";

const PinnedMap = ({
  mapMaxWidth,
  pinHeaders,
  pinImages,
  pinContent1,
  pinContent2,
  pinContent3,
  className = ""
}) => {
  return (
    <div className="map" style={{ maxWidth: mapMaxWidth + "px" }}>
      {generatePins(
        pinHeaders,
        pinImages,
        pinContent1,
        pinContent2,
        pinContent3
      )}
    </div>
  ); //end of return
}; //end of const

export default PinnedMap;

function generatePins(
  pinHeaders,
  pinImages,
  pinContent1,
  pinContent2,
  pinContent3
) {
  //Creates an array equivalent to the number of labels
  var pinListForMapping = new Array(pinHeaders.length).fill(0);

  //Maps the returned label element below to each slot in labelList array
  var pins = pinListForMapping.map((item, index) => {
    return (
      <button className="map-point" style={{ top: "76%", left: "82.5%" }}>
        <div className="content">
          <div className="centered-y">
            <h2 id="location">
              {pinHeaders[index]}
            </h2>
            <img id="location-pic" src={pinImages[index]} />
            <p>
              {pinContent1[index]}
            </p>
            <p>
              {pinContent2[index]}
            </p>
            <p>
              {pinContent1[index]}
            </p>
          </div>
        </div>
      </button>
    );
  });
  return (
    <div className="distribution-map">
      <img src="https://s24.postimg.org/jnd9wc0n9/M7a_Uku_S.png" />
      {pins}
    </div>
  );
}
