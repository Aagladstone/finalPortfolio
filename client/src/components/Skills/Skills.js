import React from "react"
import train from "./Images/trains.PNG"
import newTrain from "./Images/newTrain.PNG"
import dakgif from "./Images/dakgif.PNG"
import toddgif from "./Images/toddgif.PNG"
import liri from "./Images/Spotify-This-Song-Complete.png"
import lirii from "./Images/Do-what-it-says-movie.png"
import cust from "./Images/customer-start.PNG"
import manager from "./Images/manager-order-more.PNG"
import burger from "./Images/burger.PNG"
import eatenBurger from "./Images/eatenBurger.PNG"
import "./style.css";


export function Firebase(props) {
    return(
<div className="firebase">
                  <a className="card-title" href="https://aagladstone.github.io/Train-Post-Activity/"><h3 class="port-title"> <b>Firebase: Train Tracker</b> </h3> </a>
                  <p className="card-textTrain">This tracker uses firebase to help the user figure out how much longer they have to wait for the next train to come. Click <a class="repo-link" href="https://github.com/Aagladstone/Train-Post-Activity">here</a> to go to the GitHub repository and see the code! </p>            
            <img className="train-img card-img-train" src={train} alt="Card image cap" /> <img className="train-img card-img-newTrain" src={newTrain} alt="Card image cap" />

</div>
)}

export function JQuery(props) {
  return(
<div className="jQuery">
                <a class="card-title" href="https://aagladstone.github.io/Giphy-App/"><h3 class="port-title"><b>jQuery: Giphy Tool</b></h3></a>
                <p class="card-textGif">This cool tool populates 10 gifs of the topic the user wants to see. Here is the GitHub repository. Click <a class="repo-link" href="https://github.com/Aagladstone/Giphy-App">here</a> to go to the GitHub repository and see the code!</p>
              <img class="card-img-dak" src={dakgif} alt="Card image cap" /> <img class="card-img-todd" src={toddgif} alt="Card image cap" />

            </div>
)}

export function NodeLiri(props) {
  return(
<div className="node">
            <a className="card-title" href="https://github.com/Aagladstone/LIRI-BOT"><h3 class="port-title"> <b>Nodejs: Liri </b> </h3> </a>
            <p className="card-textLiri"> This program will use different API's to lookup a song, movie or concert in the command line.  </p>
            <img className="card-img-liri" src={liri} alt="Card image cap" /> <img className="card-img-lirii" src={lirii} alt="Card image cap" />
</div>
)}

export function NodeBamazon(props) {
    return(
<div className="nodebam">
  <a className="card-title" href="https://github.com/Aagladstone/Node-MySQL"><h3 class="port-title"> <b>Nodejs: Bamazon </b> </h3> </a>
  <p className="card-textBam"> This program uses node along with mySQL that creates a mock Amazon service that can track inventory and customer transactions.  </p>
<img className="card-img-cust" src={cust} alt="Card image cap" /> <img className="card-img-manager" src={manager} alt="Card image cap" />
</div>
)}


export function Handlebars(props) {
      return(
    <div className="handlebars">
                        <a className="card-title" href="https://young-harbor-94817.herokuapp.com/"><h3 class="port-title"> <b>Handlebars: Eat-Da-Burger </b> </h3> </a>
                    <p className="card-textBurger"> This program will use different API's to lookup a song, movie or concert in the command line.  </p>
                  <img className="card-img-burger" src={burger} alt="Card image cap" /> <img className="card-img-eatenBurger" src={eatenBurger} alt="Card image cap" />
    </div>
    )}