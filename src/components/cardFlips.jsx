import React, { useState } from "react";
import "./styling.css";

const Card = ({ title, bgColor }) => {
  const [onHover, setHover] = useState(false);
  const onHandleClick = () => {
    setHover(!onHover);
  };
  return (
    <div
      onMouseEnter={onHandleClick}
      className={`${onHover ? bgColor : "bg-default"} card-style`}
    >
      {title}
    </div>
  );
};

export default Card;
