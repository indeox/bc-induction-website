import React, { Component } from "react";
import Parallax from "react-springy-parallax";
// Components
import Footer from "../Components/Footer.js";
import ProgressBar from "../Components/ProgressBar.js";
import PinnedMap from "../Components/PinnedMap.js";
import TwoPageTransition from "../Components/TwoPageTransition.js";
// SBU Images
import bgPic1 from "../Images/China_00002.jpg";
import bgPic2 from "../Images/UCL_218_.jpg";
import bgPic3 from "../Images/Ghana_00757.jpg";
// Map Images
import artsAmerica from '../Images/SBUImages/artsAmerica.png';
import artsEAsia from '../Images/SBUImages/artsEAsia.png';
import artsWEurope from '../Images/SBUImages/artsWEurope.png';
import artsSAsia from '../Images/SBUImages/artsSAsia.png';
import artsUK from '../Images/SBUImages/artsUK.png';
import artsAfrica from '../Images/SBUImages/hair-salon.png';
import artsNAfrica from '../Images/SBUImages/syria.png';

export default class OurBehaviours extends Component {
  render() {
    return (
      <div>
        <Parallax ref="parallax" pages={5}>
          <ProgressBar
            continueLink={"#/NeedToKnow"}
            currentIndex={4}
            stepLabels={[
              <a href='#/Introduction' style={{color: 'white'}}>Introduction</a>,
              <a href='#/History' style={{color: 'white'}}>Our History</a>,
              <a href='#/OurValues' style={{color: 'white'}}>Our Values</a>,
              <a href='#/OurBehaviours' style={{color: 'white'}}>Our Behaviours</a>,
              <a href='#/SBUs' style={{color: 'white'}}>Our SBU's</a>,
              "Key Information",
              "Meet your Team",
              "Finish Up"
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
              pinHeaders={[
                "Americas", 
                "United Kingdom", 
                "Middle East & North Africa", 
                "Sub-Saharan Africa", 
                "South Asia", 
                "Wider Europe", 
                "East Asia"
              ]}
              pinImages={[
               artsAmerica,
               artsUK, 
               artsNAfrica, 
               artsAfrica, 
               artsSAsia, 
               artsWEurope, 
               artsEAsia
              ]}
               pinContents1 = {[
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>Creating a safe space for expression amidst uncertainty:</b> Over the next few years, we will work with our colleagues 
                in the Americas to deliver a series of creative approaches to support young people at risk in the region.  </p>, 
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>Edinburgh Showcase 2017:</b> Members of our Theatre and Dance team formed a part of the 2017 Showcase curatorial 
                panel, helping a global audience to experience British performances.</p>,
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>Providing a voice in times of conflict:</b> Syrian Stories, in collaboration with Scottish Documentary 
                Institute, and Bidawat for Audiovisual Arts, trains emerging Syrian filmmakers, giving them a space to communicate their stories and challenge stereotypies 
                through a series of short documentaries.</p>, 
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>We improve mobility for artists between the UK and East Africa:</b> The East Africa Arts initiative 
                connects East Africa with the UK by encouraging mobility via Mobility East Africa, Artists International 
                Development Fund (AIDF), and the UK Delegates Programme.</p>, 
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>We operate in seven countries across South Asia</b> to support the development of strong creative, contribute 
                to building creative, open, and inclusive societies, economic development, and enriching lives through mutually beneficial collaboration with the UK.</p>,
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>Using art to tackle the social stigma around disability:</b> Common to each of the former Soviet Union a country 
                is a rich cultural heritage and a well-developed, if sometimes archaic, state arts infrastructure; but in each, disability is subject to social stigma. See – Making the 
                Moves, Armenia.</p>, 
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>South East Asia:</b> Burma, Indonesia, Malaysia, Philippines, Thailand, Vietnam, with a focus on cultural skills, 
                design innovation, and creative cities.</p>,
              ]}
               pinContents2 = {[
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>Backstage to the Future:</b> The flagship youth training programme of Cultural Skills, this is a training programme 
                for live events, and first ran in Brazil with great success. It is now running in the Caribbean, with the hope of strengthening relationships between the UK, Colombia, 
                  Jamaica and Venezuela. </p>, 
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>Hull UK City of Culture 2017:</b> As an International Partner for the festival, the British Council 
                will increase the impact for Hull and the UK culture sector more widely, creating new connections and ideas through arts, culture and education.</p>, 
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>Researching the skills gaps in the cultural sectors:</b> The Cultural Skills Unit researches gaps 
                within the cultural sector. The team produced a research report on skills gaps in Morocco, Saudi Arabia and Egypt and are designing programmes to tackle this 
                gap.</p>, 
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>Connecting young artists:</b> British Council Connect ZA is an on-going programme between the UK and
                South Africa supporting cultural connections between young people aged 18-35 with a range of arts projects and the use of digital platforms to build creative 
                networks.</p>,
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>Focus:</b> Empowering women and girls to challenge and shift attitudes that perpetuate gender inequality. 
                We partnered with the Southbank Centre on the Women of the World Festival.</p>, 
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>The Canny Creatives scheme: Since 2013,</b> it has enabled twelve UK arts professionals to undertake 
                secondments to cultural organisations in Azerbaijan, Georgia, Kazakhstan, Serbia and Ukraine.</p>, 
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>North East Asia cluster:</b> China, Hong Kong, Japan, Singapore, South Korea, Taiwan, with a focus on 
                cultural skills development, digital innovation, digitally delivered art, and inclusion and diversity programmes.</p>,
              ]}
               pinContents3 = {[
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>Run Free Jamaica:</b> Run Free fuses physical theatre, storytelling, and the movement discipline of Parkour 
                into a theatrical production. It is for the youth, and directly tackles our focus on Equality, Diversity and Inclusion, and the prejudice against disabilities.</p>, 
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>Supporting UK Artists to access funding:</b> Our dedicated Creative Europe Desk UK helps, in collaboration with 
                BFI Film Forever the UK’s cultural, creative, audio-visual sectors to access funding from Creative Europe by supporting their applications.</p>, 
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>UK/UAE Year of Cultural Exchange:</b> A year long season of collaboration between the UK and the UAE to promote 
                our heritage and culture with the aim of strengthening our relationship.</p>, 
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>Lagos Theatre Festival, Nigeria:</b> Founded by the British Council in 2013 to present performing arts 
                from Nigeria and the UK every February in Lagos.</p>,
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>In the region, the vibrant cultural life exists,</b> but is hampered by poor infrastructure, limited government 
                support, and often conservative attitudes towards cultural expression.</p>, 
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>A digital focus:</b> By 2020 we aim to reach a further 28 million people through innovative online and media 
                content, connecting them with the UK and providing opportunities for the UK in the region.</p>, 
                <p style={{textAlign: "justify", fontSize: '14.5'}}><b>Our overall focus:</b> To change perceptions about the UK through artistic exchanges and collaborations, to develop 
                connections, to stimulate innovation, to develop cultural leadership, to use the arts to develop a more inclusive society and give a voices to marginalised communities.</p>,
              ]}
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
              pinHeaders={[
                "Americas", 
                "United Kingdom", 
                "Middle East & North Africa", 
                "Sub-Saharan Africa", 
                "South Asia", 
                "Wider Europe", 
                "East Asia"
              ]}
              pinImages={[
               artsAmerica,
               artsUK, 
               artsNAfrica, 
               artsAfrica, 
               artsSAsia, 
               artsWEurope, 
               artsEAsia
              ]}
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
              pinHeaders={[
                "Americas", 
                "United Kingdom", 
                "Middle East & North Africa", 
                "Sub-Saharan Africa", 
                "South Asia", 
                "Wider Europe", 
                "East Asia"
              ]}
              pinImages={[
                artsAmerica,
                artsUK, 
                artsNAfrica, 
                artsAfrica, 
                artsSAsia, 
                artsWEurope, 
                artsEAsia 
              ]}   
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
