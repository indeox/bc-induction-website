/*
* Swipe Button component
*/

import React from "react";
import "../CSS/swipe-button.css";

const SwipeButton = ({ title, clickAction, currentIndex, className = "" }) => {
  return (
    <button className="button" onClick={clickAction} tabIndex="1">
      {title}
    </button>
  ); //end of return
}; //end of const SwipeButton

export default SwipeButton;
