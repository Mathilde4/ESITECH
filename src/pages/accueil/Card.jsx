import React from "react";

const Card = ({ image, text }) => {
  const wrapper = {
    padding: "3vh 4vh",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "justify-content",
  };
  const firstCard = {
    width: "35%",
    backgroundColor: "white",
    borderRadius: "0.5rem",
    height: "17rem",
    // padding : '6px 2px'
  };
  const secondCard = {
    marginLeft: "5%",
    width: "60%",
    backgroundColor: "#321951",
    borderRadius: "0.5rem",
    height: "17rem",
    color : '#fff',
    textAlign : 'center',
    justifyContent : "center",
    fontSize : '1.2em',
    fontFamily : 'Lucida Bright, Cascadia Code'
  };

  const cardImage = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat : "no-repeat",
    backgroundImage: `url(${image})`,
    borderRadius : "20px",
  };

  const textStyle = {
    height : "100%",
  };

  return (
    <div style={wrapper}>
      <div style={firstCard}>
        <div style={cardImage}></div>
      </div>
      <div style={secondCard}>
       <p style={textStyle}>{text}</p> 
      </div>
    </div>
  );
};
export default Card;
