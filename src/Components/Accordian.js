/*
* Accordian component
*/
import React from "react";
import "../CSS/accordian.css";

const Accordian = ({
  tabLabels, //list of strings
  tabDescriptions,
  tabBackgrounds,
  tabHeight,
  className = ""
}) => {
  return (
    <div
      className="accordian"
      id={"size-" + tabLabels.length}
      style={{ height: tabHeight }}
    >
      {generateTabs(tabLabels, tabDescriptions, tabBackgrounds, tabHeight)}
    </div>
  ); //end of return
}; //end of const Accordian

export default Accordian;

//dynamically generates the tabs
function generateTabs(tabLabels, tabDescriptions, tabBackgrounds, tabHeight) {
  //Creates an array equivalent to the number of labels
  var labelListForMapping = new Array(tabLabels.length).fill(0);

  //Maps the returned label element below to each slot in labelList array
  var tabs = labelListForMapping.map((item, index) => {
    return (
      <li
        className="acc-list-item"
        style={{
          backgroundImage: `url(${tabBackgrounds[index]})`,
          height: tabHeight
        }}
      >
        <div>
          <a href="." style={{ height: tabHeight }}>
            <h2>
              {tabLabels[index]}
            </h2>
            <p>
              {tabDescriptions[index]}
            </p>
          </a>
        </div>
      </li>
    );
  });
  return (
    <ul className="acc-list">
      {tabs}
    </ul>
  );
}
