/*
* Progress Bar component
*/

import React from 'react';

import "../CSS/progress-bar.css";
import logo from '../Images/logo-white.png';

const ProgressBar = ({
  continueLink,
  stepLabels, //list of strings
  currentIndex,
  className = "",
  test = true
}) => {

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-bar">
          <div className="nav-item">
            <img src={logo} alt='.' />
            <h1>Your British Council Induction Journey</h1>
            {test &&   
              <a className="cont_button" href={continueLink} title="Continue">Continue</a>
            }
            <div className="nav-dropdown">
              <div className="dropdown-item">
                {generateProgressBar(stepLabels, currentIndex)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  ); //end of return
}; //end of const ProgressBar

export default ProgressBar;

//dynamically generates the progress bar
function generateProgressBar(stepLabels, currentIndex) {
  //Creates an array equivalent to the number of labels
  var labelListForMapping = new Array(stepLabels.length).fill(0);

  //Maps the returned label element below to each slot in labelList array
  var bar = labelListForMapping.map((item, index) => {
    return (
      <div className={currentIndex >= index ? "active" : "status"} style={{ width: 100 / stepLabels.length + "%"}} >
        {stepLabels[index]}
        <div className="arrow-wrapper">
          <div className="arrow-cover">
            <div className="arrow" />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="nav-progress">
      {bar}
    </div>
  );
}
