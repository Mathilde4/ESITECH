import React from "react";

const Card = ({ image, text }) => {
  const wrapper = {
    padding: "30px 30px",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "justify-content",
  };
  const firstCard = {
    width: "35%",
    backgroundColor: "white",
    borderRadius: "20px",
    height: "500px",
    padding : '6px 2px'
  };
  const secondCard = {
    marginLeft: "5%",
    width: "60%",
    backgroundColor: "indigo",
    borderRadius: "20px",
    height: "500px",
    color : '#fff',
    textAlign : 'center',
    fontSize : '1.2em',
    fontFamily : 'Lucida Bright, Cascadia Code'
  };

  const cardImage = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${image})`,
  };
  return (
    <div style={wrapper}>
      <div style={firstCard}>
        <div style={cardImage}></div>
      </div>
      <div style={secondCard}>
       <p>{text}</p> 
      </div>
    </div>
  );
};
export default Card;
