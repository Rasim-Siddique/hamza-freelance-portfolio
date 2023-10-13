import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Hamza Siddiqui CV.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span style={{fontSize:18, maxWidth:'90%', lineHeight:2}}>
        I am a Mern Stack And Java Developer with high level of experience <br /> in web designing and development,  scalable, beautiful and responsive websites
          
        <br />  I can build any type of website like ecommerce,  service   <br /> institute and any product and service website.
          Now Also Working On Cloud-Base Software House. <br /> Utilizing OpenStack Huawei , and VMware Technologies For Pooled Virtual <br /> Resources To Build and man-age cloud infrastucture
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "28rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Frontend"}
            detail={"Html , css ,javascript , React js, Next js , Redux Toolkit , Rtk query , React-Query , bootstrap , tailwind-css ,  material-ui , antd design ,chakra"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Backend"}
            detail={"Java, Springboot, Nodejs, Express, Python, Docker , Kubernites , Kafka, javascript ,ecmascript, advance javascript"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Tools"}
            detail={
              "Docker , Kubernites , Kafka, deployment, git , github, Jira , Trello, gitlab, bibucket"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
