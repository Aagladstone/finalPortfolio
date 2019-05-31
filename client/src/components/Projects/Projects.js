import React, {Fragment} from "react"
import login from "./Images/trackerLogin.PNG"
import userPage from "./Images/trackerUserpage.PNG"
import datebook from "./Images/datebookOne.PNG"
import datebooking from "./Images/datebookTwo.PNG"
import callMe from "./Images/callingMeOne.PNG"
import callingMe from "./Images/callingMeTwo.PNG"
import "./style.css";


export function ProjectOne(props) {
    return(

<div className="projectOne">
<div className="tracker-card container" />
        <div className="card-body pure-g" />
        <a className="card-title" href="https://mjgardner.github.io/project1/"><h3 className="port-title"> <b>Project 1: Who's Calling Me?</b> </h3> </a>
        <img className="card-img-callMe" src={callMe} alt="Card image cap" /> <img className="card-img-callingMe" src={callingMe} alt="Card image cap" /> 
    <p className="card-text-calling">Find out how dangerous an unknown number could be. Just use our app, and insert the number into our form, and we'll keep track of the numbers for you. <a className="repo-link" href="https://github.com/mjgardner/project1">here</a> to go to the GitHub repository and see the code! </p> 
</div>
)}

export function ProjectTwo(props) {
  return(
    <div className="projectTwo">
        <div className="card-body" />
            <a className="card-title" href="https://datebook-app.herokuapp.com/"><h3 className="port-title datebook"> <b>Project 2: Datebook</b> </h3> </a>
            <p className="card-text" > KonBon board meets a calendar; see all your important events without the whitespace in between! Click <a class="repo-link" href="https://github.com/Aagladstone/Datebook">here</a> to go to the GitHub repository and see the code!</p>
        <img className="card-img-datebook" src={datebook} alt="Card image cap" /> <img className="card-img-datebooking" src={datebooking} alt="Card image cap" />
    </div>
)}

export function ProjectThree(props) {
  return(

<div className="projectThree">
    <div className="card-body" />
            <a className="card-title" href="https://mileagetracker.herokuapp.com/"><h3 className="port-title"> <b>Project 3: Mileage Tracker </b> </h3> </a>
            <p className="cardTrackerText"> An application that helps a user track the mileage of their car, and help them realize when they might be approaching an important maintenance; helping them get the most out of their car.
            Front-end uses React.js, material-UI, JavaScript, bootstrap, recharts, and pure.css
            Back-end consists use of MySQL, Sequelize, Express, and passport.js </p>
            <img className="card-img-tracking" src={userPage} alt="Card image cap" />  <img className="card-img-tracker" src={login} alt="Card image cap" />
</div>
)
}
