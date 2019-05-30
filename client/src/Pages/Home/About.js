import React, { Component } from "react";
import "../../App.css";
// import Navbar from '../../components/Navbar/Navbar'
import Wrapper from "../../components/Wrapper/Wrapper";
import ContentBox from "../../components/Content Box/Contentbox"
import {Headshot} from '../../components/Images/Image'
import "./style.css";



class App extends Component {
  render() {
    return (
      <div className="aboutMe">
      {/* <Wrapper> */}
        {/* <Navbar />     */}

      <ContentBox>
        <h2 className="about">ABOUT ME!</h2>
      <div className="media card-deck">
        
        <Headshot className="image" />
          <div className="media-body">
             <p className="media-body">
              Team-oriented Full-Stack Developer with a desire to grow my coding abilities and combine them 
              with my passion for building relationships in order to advance my leadership skills and career. 
              I am a Baylor graduate that possesses a strong work ethic and affection for teamwork looking to 
              apply myself in a community atmosphere where I can learn, but also become a leader of my own.               
             </p> 
                                   
             <p className="media-body">
              Even though I would consider myself an introvert, I am a person that has a natural ability to
               bring people together and have proven that everywhere I’ve been. I’ve sharpened that ability
               even greater through being a manager in a fast-paced retail environment at HEB where I was
               once a partner of the year at my store. 

             </p>
             <p className="media-body">
              Works extremely well in teams, and am very organized, and once I graduate from the Houston
              Coding Academy and receive my certificate in full stack web development; I will have experience
              in Node.js, JavaScript, MySQL, JQuery, reAct,  other JavaScript libraries, and frameworks.
              I would love to prove my ability to adapt to whatever I need to learn for the team, bring
              my experience and dedication to become an asset. 
           </p>
           <p className="media-body">
              Feel free to check out my resume or look through my GitHub, or contact me at aarongladstone456@gmail.com or my LinkedIn page(link located on the right)!
           </p>
      </div>
     </div>
       </ContentBox> 
      
      

      {/* </Wrapper> */}
      </div>
    );
  }
}

export default App;