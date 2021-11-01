import React, { useContext, useState } from "react";
import "./albumImage.css";
import CloseIcon from "@material-ui/icons/Close";
import { AlbumContext } from "../../context/AlbumContext";

const AlbumImage = ({ image }) => {
  const { showImg } = useContext(AlbumContext);
  const handleClick = (image) => {
    showImg(image);
  };

  return (
    <>
      {/* <div className={modal ? "modal_open" : "modal"}>
        <img src={tempImgSrc} alt="" />
        <CloseIcon />
      </div> */}
      <img
        className="Album_gridImage"
        src={image.url}
        alt=""
        onClick={() => handleClick(image)}
      />
    </>
  );
};

export default AlbumImage;
