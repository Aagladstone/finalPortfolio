import React from "react"
import "./style.css";


export function SocialsBox(props) {
    return(

<a href="https://www.facebook.com/aagladstone" className="socialsbox">

 
  <a href="https://www.facebook.com/aagladstone" className="fab fa-facebook"></a>  

 </a>
)
}

export function Twitter(props) {
  return(

<div className="socialsbox">

<div>
<i onClick={props.onClick} className="fab fa-twitter"></i>  
</div>
</div>
)
}

export function Instagram(props) {
  return(

<div className="socialsbox">

<div>
<i onClick={props.onClick} className="fab fa-instagram"></i>  
</div>
</div>
)
}







export function WorkSocials(props) {
    return(

<div className="worksocials">

<div>
<i class="fab fa-linkedin" onClick={props.onClick} ></i>
</div>

</div>
)
}

export default function Github(props) {
  return(

<div className="worksocials">

<div> 
<i class="fab fa-github" onClick={props.onClick} ></i>
</div>

</div>
)
}

export function Resume(props) {
  return(

<div className="worksocials">

<div>
<i class="fas fa-file-alt" onClick={props.onClick} ></i>
<p>Resume</p>
</div>
</div>
)
}