import React from "react";
import "./album.css";
import leftArrow from "./icons/leftArrow.svg";
import rightArrow from "./icons/rightArrow.svg";

function BtnModal({ direction, moveSlide }) {
  console.log("props button", direction, moveSlide);
  return (
    <button
      className={
        direction === "siguiente" ? "btn-modal siguiente" : "btn-modal anterior"
      }
      onClick={moveSlide}
    >
      <img src={direction === "siguiente" ? rightArrow : leftArrow} alt="" />
    </button>
  );
}

export default BtnModal;
