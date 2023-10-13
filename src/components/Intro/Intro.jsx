import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy5 from "../../img/hamzalinkdin.jpeg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Muhammad Hamza Siddique</span>
          <span style={{fontSize:18, maxWidth:'90%', lineHeight:2}}>
            I am a Mern Stack And Java Developer having 5+ high level of experience in web designing
            and development, producting the Quality work and Develop Fully Functional and pixel Responsive Websites.Now Also Working On Cloud-Base Software House,
            Utilizing OpenStack Huawei, and VMware Technologies For Pooled Virtual Resources To Build and
            man-age cloud infrastucture.
          </span>
        </div>
        <a target="blank" rel="noreferrer" href="mailto:siddiquehamza182@gmail.com">

          
          <button className="button i-button">Hire me</button>
          </a>
        {/* social icons */}
        <div className="i-icons">

         <a href="https://github.com/raheel-siddique?tab=repositories"> <img src={Github} alt="" /></a>
        <a href="https://www.linkedin.com/in/raheel-siddique-21b740211/"> <img src={LinkedIn} alt="" /></a> 
         <a href="https://www.facebook.com/profile.php?id=100006960765813&sk=photos_by"> <img src={Facebook} alt="" /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        {/* <img src={boy2} alt="" style={{width:300, height:300, borderRadius:'50%'}} /> */}
        <img src={boy5} alt="" style={{width:300, height:300, borderTopLeftRadius:100, borderTopRightRadius:0, borderBottomLeftRadius:0, borderBottomRightRadius:100}} />

        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Software" text2="Engineer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv style={{padding:10}} img={thumbup} text1="Best React, Java" text2=" Python Developer Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
