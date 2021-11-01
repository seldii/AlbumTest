import React, { useContext, useState } from "react";
import { AlbumContext } from "../../context/AlbumContext";
import "./carousel.css";
import BtnSlider from "./BtnSlider";

function Carousel() {
  const { clickedImg, albums, modal, setModal } = useContext(AlbumContext);

  const [imgToShow, setImgToShow] = useState(clickedImg);
  console.log("clickedImg", clickedImg);
  console.log("imgToShow", imgToShow);

  ///////////
  //* Slider Controls
  ///////////

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== albums.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === albums.length) {
      setSlideIndex(1);
    }
    console.log("nextSlide");
  };

  const prevSlide = () => {
    console.log("PrevSlide");
  };

  const handleOnclick = () => {
    setModal(false);
    console.log("close modal");
  };
  return (
    <div className={modal ? "modal open" : "modal"}>
      <div className="container-slider">
        {albums &&
          albums.map((item, index) => {
            return (
              <div
                key={item.id}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                {/* {console.log("slideIndex e Index", slideIndex, index)} */}
                {/* {console.log("ITEM", item)} */}
                <img src={albums[slideIndex].url} alt="" />
                <button className="carousel-close-btn" onClick={handleOnclick}>
                  close
                </button>
              </div>
            );
          })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      </div>
    </div>
  );
}

export default Carousel;
