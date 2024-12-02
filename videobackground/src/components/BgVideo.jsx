import React from "react";
import video from '../assets/video1.mp4';



function BgVideo() {
 return(
<div className="bgContainer">
<div className="overlay">
    <video src={video} autoPlay loop muted/>


     </div>
   </div>


 )
}

export default BgVideo;
