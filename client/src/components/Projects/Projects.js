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
    <div>
        <a className="card-title pure-u-5-5" href="https://mjgardner.github.io/project1/"><h3 className="port-title"> <b>Project 1: Who's Calling Me?</b> </h3> </a>
    </div> 
        <div>
            <p className="card-text-calling pure-u-4-5">Find out how dangerous an unknown number could be. Just use our app, and insert the number into our form, and we'll keep track of the numbers for you. <a className="repo-link" href="https://github.com/mjgardner/project1">here</a> to go to the GitHub repository and see the code! </p> 
        </div>
            <div>
                <img className="card-img-callMe pure-u-2-5" src={callMe} alt="Card image cap" />
                <img className="card-img-callingMe pure-u-2-5" src={callingMe} alt="Card image cap" />  
            </div>
    </div>
)}

export function ProjectTwo(props) {
  return(
    <div className="projectTwo">
    <div>
        <a className="card-title pure-u-5-5" href="https://datebook-app.herokuapp.com/"><h3 className="port-title datebook"> <b>Project 2: Datebook</b> </h3> </a>
    </div>
        <div className="desc">
            <p className="card-text pure-u-4-5" > KonBon board meets a calendar; see all your important events without the whitespace in between!</p>
        </div>
            <div>
                <img className="card-img-datebooking pure-u-2-5" src={datebooking} alt="Card image cap" />
                <img className="card-img-datebook pure-u-2-5" src={datebook} alt="Card image cap" />
            </div>
    </div>
)}

export function ProjectThree(props) {
  return(

<div className="projectThree">
    <div>
        <a className="card-title pure-u-5-5" href="https://mileagetracker.herokuapp.com/"><h3 className="port-title"> <b>Project 3: Mileage Tracker </b> </h3> </a>
    </div>
    <div>
            <p className="cardTrackerText pure-u-4-5"> An application that helps a user track the mileage of their car, and help them realize when they might be approaching an important maintenance; helping them get the most out of their car.
            Front-end uses React.js, material-UI, JavaScript, bootstrap, recharts, and pure.css
            Back-end consists use of MySQL, Sequelize, Express, and passport.js </p>
        </div>
            <div>
                <img className="card-img-tracker pure-u-2-5" src={login} alt="Card image cap" />
                <img className="card-img-tracking pure-u-2-5" src={userPage} alt="Card image cap" /> 
            </div>
    </div>
)}
