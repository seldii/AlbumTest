import React, { useContext, useEffect } from 'react';
import { AlbumContext } from '../../context/AlbumContext';
import AlbumImage from '../albumImage/AlbumImage';
import './album.css';
import CloseIcon from '@material-ui/icons/Close';
import BtnModal from './BtnModal';
import { useHistory } from 'react-router-dom';

function Album() {
  const { albums, getData, modal, setModal, clickedImg, slideIndex, setSlideIndex } =
    useContext(AlbumContext);
  console.log('clickedImg id >>', clickedImg.id);

  useEffect(() => {
    getData();
  }, []);

  ///////////
  //* Slider Controls
  ///////////

  console.log('slideIndex', slideIndex);

  const handleOpenModal = index => {
    setSlideIndex(index);
    setModal(true);
  };

  const nextSlide = () => {
    console.log('slide Index>>>', slideIndex);
    console.log('album length>>>', albums.length);
    if (slideIndex >= albums.length - 1) {
      // setSlideIndex(1);
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }

    console.log('nextSlide', slideIndex);
  };

  const prevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(albums.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }

    console.log('PrevSlide', slideIndex);
  };

  const handleCloseModal = () => {
    setModal(false);
    console.log(modal);
  };

  return (
    <div className="Album_Wrapper">
      <div className={modal ? 'modal open' : 'modal'}>
        <div>
          {/* {albums ? <img src={albums[slideIndex].url} alt="" /> : "nothing"} */}
          {slideIndex
            ? console.log('URL displayed >>>', albums[slideIndex].url)
            : console.log('no slideIndex', slideIndex)}
          {albums && <img className="modal-image" src={albums[slideIndex].url} alt="" />}

          <CloseIcon className="modal-close-btn" onClick={handleCloseModal}>
            close modal
          </CloseIcon>

          <BtnModal moveSlide={nextSlide} direction={'siguiente'} />
          <BtnModal moveSlide={prevSlide} direction={'anterior'} />
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
                onClick={() => handleOpenModal(index)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Album;
