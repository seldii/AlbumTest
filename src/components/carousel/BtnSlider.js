import React from "react";
import "./carousel.css";
import leftArrow from "./icons/leftArrow.svg";
import rightArrow from "./icons/rightArrow.svg";

function BtnSlider({ direction, moveSlide }) {
  //   console.log("props button", direction, moveSlide);
  return (
    <button
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      onClick={moveSlide}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="" />
    </button>
  );
}

export default BtnSlider;
