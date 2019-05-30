import React from "react"
import "./style.css";


function ContentBox(props) {
    return(

<div className="contentbox">{props.children} </div>
)
}

export default ContentBox;