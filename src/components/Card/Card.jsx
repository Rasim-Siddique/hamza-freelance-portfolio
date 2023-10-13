import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}, paddingBottom:100}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span style={{fontSize:18, lineHeight:1.5}}>{detail}</span>
      {/* <button className="c-button">LEARN MORE</button> */}
    </div>
  );
};

export default Card;
