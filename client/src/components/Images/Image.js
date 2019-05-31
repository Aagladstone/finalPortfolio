import React from "react"
import headshot from './headshotTwo.PNG';

// import "./style.css";


export function ImageContainer(props) {
    return(

<div className="imagecontainer">{props.children} </div>
)
}

export function Image(props) {
    return(

<div className="image" src="selfphoto.PNG">{props.children} </div>
)
}

export function Headshot() {
    return(
<img className="image" src={headshot} alt="headshot" />
)}

