/*
* Pinned Map component
*/
import "../CSS/pinned-map.css";
import React from "react";

const PinnedMap = ({
  mapMaxWidth,
  pinHeaders,
  pinImages,
  pinContents1,
  pinContents2,
  pinContents3,
  pinTopCoords,
  pinLeftCoords,
  className = ""
}) => {
  return (
    <div className="map" style={{ maxWidth: mapMaxWidth + "px" }}>
      {generatePins(
        pinHeaders,
        pinImages,
        pinContents1,
        pinContents2,
        pinContents3,
        pinTopCoords,
        pinLeftCoords
      )}
    </div>
  ); //end of return
}; //end of const

export default PinnedMap;

function generatePins(
  pinHeaders,
  pinImages,
  pinContents1,
  pinContents2,
  pinContents3,
  pinTopCoords,
  pinLeftCoords
) {
  //Creates an array equivalent to the number of labels
  var pinListForMapping = new Array(pinHeaders.length).fill(0);

  //Maps the returned label element below to each slot in labelList array
  var pins = pinListForMapping.map((item, index) => {
    return (
      <button
        className="map-point"
        style={{ top: pinTopCoords[index], left: pinLeftCoords[index] }}
      >
        <div className="content">
          <div className="centered-y">
            <h2 id="location">
              {pinHeaders[index]}
            </h2>
            <img id="location-pic" src={pinImages[index]} alt="." />
            <p>
              {pinContents1[index]}
            </p>
            <p>
              {pinContents2[index]}
            </p>
            <p>
              {pinContents3[index]}
            </p>
          </div>
        </div>
      </button>
    );
  });
  return (
    <div className="distribution-map">
      <img src="https://s24.postimg.org/jnd9wc0n9/M7a_Uku_S.png" alt="." />
      {pins}
    </div>
  );
}
