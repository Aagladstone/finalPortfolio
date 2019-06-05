import React, { Component } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import ContentBox from "../../components/Content Box/Contentbox"
import {ProjectThree, ProjectTwo, ProjectOne} from '../../components/Projects/Projects'
import "./style.css";



class App extends Component {
  render() {
    return (
      <div className="projects">

          <ContentBox > 
            <h2>PROJECTS</h2>
              <ProjectOne /> 
              <ProjectTwo /> 
              <ProjectThree /> 

      </ContentBox>
      </div>
    );
  }
}

export default App;