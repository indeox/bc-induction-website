import React, { Component } from "react";
import Parallax from "react-springy-parallax";

import Footer from "../Components/Footer.js";
import ProgressBar from "../Components/ProgressBar.js";
import PinnedMap from "../Components/PinnedMap.js";
import TwoPageTransition from "../Components/TwoPageTransition.js";

import bgPic1 from "../Images/China_00002.jpg";
import bgPic2 from "../Images/UCL_218_.jpg";
import bgPic3 from "../Images/Ghana_00757.jpg";

export default class OurBehaviours extends Component {
  render() {
    return (
      <div>
        <Parallax ref="parallax" pages={3.2}>
          <ProgressBar
            continueLink={"#/NeedToKnow"}
            currentIndex={4}
            stepLabels={[
              "Introduction",
              "Our History",
              "Our Values",
              "Our Behaviours",
              "Our SBU's",
              "Key Information",
              "Meet your Team",
              "Done"
            ]}
          />
          <br/><br/>
          <h1
            className="sbu-above-header"
            style={{ margin: "110px 100px 10px 100px" }}
          >
            Strategic Business Units within the British Council
          </h1>
          <div
            className="sbu-above-descrip"
            style={{ fontSize: 18, margin: "0px 100px 50px 100px" }}
          >
            The British Council revolves around three Strategic Business Units
            known as SBUs. The work completed in these units form the foundation
            of the company.
          </div>
          <TwoPageTransition
            bgPicURL={bgPic1}
            leftPageHeader={"About the Arts SBU"}
            leftPageSubtitle1={"Who We Are"}
            leftPageContent1={
              "The Arts SBU aims to build cultural connections between the UK and the rest of the world. This will be achieved by: sharing UK arts with the world, fostering collaboration between artists, giving spaces for artists to express themselves freely and promoting marginalised voices, promoting and aiding in cultural preservation, building the capacity of creative industries globally, and shaping a pro-arts policy through research."
            }
            leftPageSubtitle2={"What We Have Been Up To"}
            leftPageContent2={
              "The arts department is separated by art form. Each art form carries out work in its field to help achieve arts’ aim of building connections. For example, the film team has recently screened ‘five films for freedom’ by Syrian filmmakers about their experiences. "
            }
            rightPageContent={<PinnedMap 
              mapMaxWidth={1330} 
              pinHeaders={["1", "2", "3", "4", "5", "6", "7"]}
              pinImages={[bgPic1,
               bgPic1, 
               bgPic1, 
               bgPic1, 
               bgPic1, 
               bgPic1, 
               bgPic1]}
               pinContents1 = {["1", "2", "3", "4", "5", "6", "7"]}
               pinContents2 = {["1", "2", "3", "4", "5", "6", "7"]}
               pinContents3 = {["1", "2", "3", "4", "5", "6", "7"]}
               pinTopCoords = {["70%", "31%", "48%", "65%", "44%","25%", "75%"]}
               pinLeftCoords = {["30%", "46.5%", "48%", "54%","68%", "75%", "83%"]}
              />}
          />
          <TwoPageTransition
            bgPicURL={bgPic2}
            leftPageHeader={"About the Education and Society SBU"}
            leftPageSubtitle1={"Who We Are"}
            leftPageContent1={
              "Education and Society is made of two distinct parts. 'Education' connects people across entire education systems in the UK and other countries so that they can benefit from an international education experience. 'Society' helps people and institutions contribute to a more secure, inclusive and prosperous societies.  We work in partnership with local and international organisations in areas such as social enterprise and investment, women's and girls' empowerment, civil society and governance, and access to justice and rule of law."
            }
            leftPageSubtitle2={"What We Have Been Up To"}
            leftPageContent2={
              "The HSBC / British Council Schools Programme involves a range of collaborative activities to promote the teaching of Mandarin and Chinese culture in UK schools and to enhance UK school partnerships with China."
            }
            rightPageContent={<PinnedMap 
              mapMaxWidth={1330} 
              pinHeaders={["1", "2", "3", "4", "5", "6", "7"]}
              pinImages={[bgPic2,
               bgPic2, 
               bgPic2, 
               bgPic2, 
               bgPic2, 
               bgPic2, 
               bgPic2]}
               pinContents1 = {["1", "2", "3", "4", "5", "6", "7"]}
               pinContents2 = {["1", "2", "3", "4", "5", "6", "7"]}
               pinContents3 = {["1", "2", "3", "4", "5", "6", "7"]}
               pinTopCoords = {["70%", "31%", "48%", "65%", "44%","25%", "75%"]}
               pinLeftCoords = {["30%", "46.5%", "48%", "54%","68%", "75%", "83%"]}
              />}
          />
          <TwoPageTransition
            bgPicURL={bgPic3}
            leftPageHeader={"About the English and Exams SBU"}
            leftPageSubtitle1={"Who We Are"}
            leftPageContent1={
              "English and Exams give access to international opportunities by promoting English teaching and exams globally. This unit generates around £116m a year in teaching and exams in over 124 countries."
            }
            leftPageSubtitle2={"What We Have Been Up To"}
            leftPageContent2={
              "English and Exams have recently worked with the EU to teach English to nearly 3000 displaced Syrians in Jordan, Lebanon and Northern Syria. This will offer alternative pathways and give them the tools to build stable, inclusive and prosperous futures."
            }
            rightPageContent={
              <PinnedMap 
              mapMaxWidth={1330} 
              pinHeaders={["1", "2", "3", "4", "5", "6", "7"]}
              pinImages={[bgPic3,
               bgPic3, 
               bgPic3, 
               bgPic3, 
               bgPic3, 
               bgPic3, 
               bgPic3]}
               pinContents1 = {["1", "2", "3", "4", "5", "6", "7"]}
               pinContents2 = {["1", "2", "3", "4", "5", "6", "7"]}
               pinContents3 = {["1", "2", "3", "4", "5", "6", "7"]}
               pinTopCoords = {["70%", "31%", "48%", "65%", "44%","25%", "75%"]}
               pinLeftCoords = {["30%", "46.5%", "48%", "54%","68%", "75%", "83%"]}
              />}
          />
          <h1
            className="sbu-below-header"
            style={{ margin: "10px 100px 10px 100px" }}
          >
            Other Departments
          </h1>
          <div
            className="sbu-below-descrip"
            style={{ fontSize: 18, margin: "0px 100px 50px 100px" }}
          >
            Working to support the three SBUs are HR, Digital, (what are the
            others team…?). (Note: Please just hyperlink to their relevant pages
            – we do have to mention them, it’s a little rude not to, especially
            as some people who join will actually be joining those teams).
          </div>
          <Footer />
        </Parallax>
      </div>
    );
  }
}
