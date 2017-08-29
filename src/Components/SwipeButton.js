/*
* Swipe Button component
*/

import React from "react";
import "../CSS/swipe-button.css";

const SwipeButton = ({ title, clickAction, bHeight, bWidth, bLeft, bFontSize, className = "" }) => {
  return (
    <button className="button" style={{height: bHeight, width: bWidth, left: bLeft, fontSize: bFontSize}} onClick={clickAction} tabIndex="1">
      {title}
    </button>
  ); //end of return
}; //end of const SwipeButton

export default SwipeButton;
