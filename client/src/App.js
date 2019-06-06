import React, { Component } from "react";
import "./App.css";
import Navbar from './components/Navbar/Navbar'
import Wrapper from "./components/Wrapper/Wrapper";
import ContentBox from "./components/Content Box/Contentbox"
import Github, { SocialsBox, WorkSocials, Twitter, Instagram, Resume } from "../src/components/Socials/socials";
import {Image} from './components/Images/Image'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./Pages/Home/Projects"
import Skills from './Pages/Home/Skills'
import About from './Pages/Home/About'


class App extends Component {
  render() {
    return (
       <Router>
      <div className="App">
           <Wrapper>
        {/* <Switch> */}
      <Navbar /> 

      <SocialsBox />
        <Twitter />
        <Instagram />
        <WorkSocials />
        <Github />
        <Resume />
      <Route exact path= "/" component={About} />
      <Route exact path= "/projects" component={Projects} />
      <Route exact path= "/skills" component={Skills} />
        <WorkSocials />   
       <Image /> 




      
      

      </Wrapper>       
      </div> </Router>
    );
  }
}

export default App;

