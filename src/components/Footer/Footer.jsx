import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";


const Footer = () => {
  return (
    <div className="footer" id="footerSec">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span style={{fontSize:29, lineHeight:1.5}}>
        <a target="blank" rel="noreferrer" href="mailto:siddiquehamza182@gmail.com">siddiquehamza182@gmail.com</a>
          
          <br />+923112032415</span>
        <div className="f-icons">
        <a href="https://github.com/raheel-siddique?tab=repositories"> <img src={Github} alt="" /></a>
        <a href="https://www.linkedin.com/in/raheel-siddique-21b740211/"> <img src={LinkedIn} alt="" /></a> 
        </div>
      </div>
    </div>
  );
};

export default Footer;
