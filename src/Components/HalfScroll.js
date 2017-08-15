/*
* Half-Scroll component
*/
import React from "react";
import "../CSS/half-scroll.css";

const HalfScroll = ({
  articleLabels,
  articleDescriptions,
  articleBackgrounds,
  className = ""
}) => {
  return (
    <div className="half-scroll">
      {generateArticles2(articleLabels, articleDescriptions, articleBackgrounds)}
    </div>
  ); //end of return
}; //end of const Accordian

export default HalfScroll;

//dynamically generates the articles
function generateArticles1(
  articleLabels,
  articleDescriptions,
  articleBackgrounds
) {
  //Creates an array equivalent to the number of labels
  var articleListForMapping = new Array(articleLabels.length).fill(0);

  //Maps the returned label element below to each slot in labelList array
  var articles = articleListForMapping.map((item, index) => {
    return (
      <div className="article">
        <figure className="article-figure">
          <img className="article-img" src={articleBackgrounds[index]} alt />
        </figure>
        <section className="article-section">
          <div className="section-div">
            <h2 className="article-header">
              {articleLabels[index]}
            </h2>
            <p className="article-description">
              {articleDescriptions[index]}
            </p>
          </div>
        </section>
      </div>
    );
  });
  return (
    <article className="article-container">
      {articles}
    </article>
  );
}

function generateArticles2(
  articleLabels,
  articleDescriptions,
  articleBackgrounds
) {
  //Creates an array equivalent to the number of labels
  var articleListForMapping = new Array(articleLabels.length).fill(0);

  //Maps the returned label element below to each slot in labelList array
  var articles = articleListForMapping.map((item, index) => {
    return (
      <div className="article">
        <figure className="article-figure">
          <img className="article-img" src={articleBackgrounds[index]} alt />
        </figure>
        <section className="article-section">
          <div className="section-div">
            <h2 className="article-header">
              {articleLabels[index]}
            </h2>
            <p className="article-description">
              {articleDescriptions[index]}
            </p>
          </div>
        </section>
      </div>
    );
  });
  return (
    <article className="article-container">
      {articles}
    </article>
  );
}
