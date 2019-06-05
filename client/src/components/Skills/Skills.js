import React from "react"
import train from "./Images/trains.PNG"
import newTrain from "./Images/newTrain.PNG"
import dakgif from "./Images/dakgif.PNG"
import toddgif from "./Images/toddgif.PNG"
import liri from "./Images/spotifySong.PNG"
import lirii from "./Images/movieThis.PNG"
import cust from "./Images/customerMenu.PNG"
import manager from "./Images/managerOrder.PNG"
import burger from "./Images/burger.PNG"
import eatenBurger from "./Images/eatenBurger.PNG"
import "./style.css";


export function Firebase(props) {
    return(
  <div className="firebase">
    <div>   
      <a className="card-title pure-u-5-5" href="https://aagladstone.github.io/Train-Post-Activity/"><h3 className="port-title fire"> <b>Firebase: Train Tracker</b> </h3> </a>
    </div>
      <div>  
        <p className="card-textTrain pure-u-4-5">This tracker uses firebase along with jQuery to help the user figure out how much longer they have to wait for the next train to come. </p>
      </div>   
        <div>
          <img className="train-img card-img-train pure-u-2-5" src={train} alt="Card image cap" /> 
          <img className="train-img card-img-newTrain pure-u-2-5" src={newTrain} alt="Card image cap" />
        </div>
  </div>
)}

export function JQuery(props) {
  return(
  <div className="jQuery">
    <div>   
      <a className="card-title pure-u-5-5" href="https://aagladstone.github.io/Giphy-App/"><h3 className="port-title gify"><b>jQuery: Giphy Tool</b></h3></a>
    </div>
      <div>   
        <p className="card-textGif pure-u-4-5">This cool tool populates 10 gifs of the topic the user wants to see. It uses the giphy API and jQuery to help users see a bunch of cool gifs at a time. </p>
      </div>   
        <div>   
          <img className="card-img-dak pure-u-2-5" src={dakgif} alt="Card image cap" />
          <img className="card-img-todd pure-u-2-5" src={toddgif} alt="Card image cap" />
        </div>   
  </div>
)}

export function NodeLiri(props) {
  return(
  <div className="node">
    <div>   
      <a className="card-title pure-u-5-5" href="https://github.com/Aagladstone/LIRI-BOT"><h3 className="port-title liriii"> <b>Nodejs: Liri </b> </h3> </a>
    </div>
      <div>   
        <p className="card-textLiri pure-u-4-5"> This program will use different API's to lookup a song, movie or concert in the command line.  </p>
      </div>   
        <div>   
          <img className="card-img-liri pure-u-2-5" src={liri} alt="Card image cap" />
          <img className="card-img-lirii pure-u-2-5" src={lirii} alt="Card image cap" />
        </div>   
  </div>
)}

export function NodeBamazon(props) {
    return(
  <div className="nodebam">
    <div> 
      <a className="card-title pure-u-5-5" href="https://github.com/Aagladstone/Node-MySQL"><h3 className="port-title bambam"> <b>Nodejs: Bamazon </b> </h3> </a>
    </div>
      <div> 
        <p className="card-textBam pure-u-4-5"> This program uses node along with mySQL that creates a mock Amazon service that can track inventory and customer transactions.  </p>
      </div>
        <div>
          <img className="card-img-cust pure-u-2-5" src={cust} alt="Card image cap" /> 
          <img className="card-img-manager pure-u-2-5" src={manager} alt="Card image cap" /> 
        </div>
  </div>
)}


export function Handlebars(props) {
      return(
  <div className="handlebars">
    <div>
      <a className="card-title  pure-u-5-5" href="https://young-harbor-94817.herokuapp.com/"><h3 class="port-title"> <b>Handlebars: Eat-Da-Burger </b> </h3> </a>
    </div>
      <div>
        <p className="card-textBurger  pure-u-4-5"> This program will uses handlebars to dynamically add hamburgers of the users choosing and decide if the want to devour them or not.  </p>
      </div>
        <div>
          <img className="card-img-burger  pure-u-2-5" src={burger} alt="Card image cap" />
          <img className="card-img-eatenBurger  pure-u-2-5" src={eatenBurger} alt="Card image cap" />
        </div>
  </div>
    )}