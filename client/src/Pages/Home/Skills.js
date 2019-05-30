import React, { Component } from "react";
// import Navbar from '../../components/Navbar/Navbar'
import Wrapper from "../../components/Wrapper/Wrapper";
import ContentBox from "../../components/Content Box/Contentbox"
import Github, { SocialsBox, WorkSocials, Twitter, Instagram, Resume } from "../../components/Socials/socials";
import {Image, Headshot} from '../../components/Images/Image'
import {ProjectThree, ProjectTwo, ProjectOne} from '../../components/Projects/Projects'
import "./style.css";
import { Firebase, JQuery, NodeLiri, NodeBamazon, Handlebars } from "../../components/Skills/Skills";



class App extends Component {
  render() {
    return (
      <div className="projects">
      <ContentBox >
          <h2>Demonstration of Skills</h2>
            <Firebase /> 
            <JQuery /> 
            <NodeLiri /> 
            <NodeBamazon />
            <Handlebars />
      </ContentBox>
      </div>
    );
  }
}

export default App;