import React, { useContext, useEffect, useState } from "react";
import { AlbumContext } from "../../context/AlbumContext";
import AlbumImage from "../albumImage/AlbumImage";
import "./album.css";
import "../albumImage/albumImage.css";
import "../carousel/carousel.css";
// import CloseIcon from "@material-ui/icons/Close";

import BtnSlider from "../carousel/BtnSlider";
import { CircularProgress } from "@material-ui/core";

// import "./album.css";

function Album() {
  const {
    albums,
    getData,
    modal,
    setModal,
    clickedImg,
    slideIndex,
    setSlideIndex,
  } = useContext(AlbumContext);
  console.log("clickedImg id >>", clickedImg.id);

  useEffect(() => {
    getData();
  }, []);

  ///////////
  //* Slider Controls
  ///////////

  console.log("slideIndex", slideIndex);

  // const nextSlide = () => {
  //   if (slideIndex !== albums.length) {
  //     setSlideIndex(slideIndex);
  //   } else if (slideIndex === albums.length) {
  //     setSlideIndex(1);
  //   }
  //   console.log("nextSlide");
  // };
  const nextSlide = () => {
    if (slideIndex >= albums.lenght + 1) {
      // setSlideIndex(1);
      setSlideIndex(1);
    } else {
      setSlideIndex(slideIndex + 1);
    }

    console.log("nextSlide", slideIndex);
  };

  const prevSlide = () => {
    if (slideIndex < 1) {
      setSlideIndex(albums.lenght);
    } else {
      setSlideIndex(slideIndex - 1);
    }

    console.log("PrevSlide", slideIndex);
  };

  const handleOnclick = () => {
    setModal(false);
    console.log(modal);
  };

  return (
    <div className="Album_Wrapper">
      <div className={modal ? "modal open" : "modal"}>
        <div>
          {/* {albums ? <img src={albums[slideIndex].url} alt="" /> : "nothing"} */}
          {albums && slideIndex && <img src={albums[slideIndex].url} alt="" />}

          <button className="carousel-close-btn" onClick={handleOnclick}>
            close modal
          </button>
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
          <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        </div>
      </div>
      <div className="Album_GridContainer">
        {albums &&
          albums.map((item, index) => {
            return (
              <AlbumImage
                className="Album_gridImage"
                key={index}
                image={item}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Album;
