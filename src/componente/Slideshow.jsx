import React, { useState, useRef, useEffect, useCallback } from 'react';
import '../css/slideshow.css';

import vacation from '../images/slideshow/vacation.jpg';
import music from '../images/slideshow/music.jpg';
import burger from '../images/slideshow/burger.jpg';
import salad from '../images/slideshow/salad.jpg';
import cats from '../images/slideshow/cats.jpg';

import vacationsmall from '../images/slideshow/vacationsmall.jpg';
import musicsmall from '../images/slideshow/musicsmall.jpg';
import burgersmall from '../images/slideshow/burgersmall.jpg';
import saladsmall from '../images/slideshow/saladsmall.jpg';
import catssmall from '../images/slideshow/catssmall.jpg';

export const Slideshow = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const largeImages = [vacation, music, burger, salad, cats];
  const smallImages = [vacationsmall, musicsmall, burgersmall, saladsmall, catssmall];
  
  const imageGallery = isSmallScreen ? smallImages : largeImages;
  const totalSlides = imageGallery.length;
  const [currentIndex, setCurrentIndex] = useState(1);
  const slideshowRef = useRef(null);

  const changeRight = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex < totalSlides + 1 ? prevIndex + 1 : 1));
  }, [totalSlides]);

  const changeLeft = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : totalSlides));
  }, [totalSlides]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentIndex === 0) {
        slideshowRef.current.style.transition = 'none';
        setCurrentIndex(totalSlides);
      } else if (currentIndex === totalSlides + 1) {
        slideshowRef.current.style.transition = 'none';
        setCurrentIndex(1);
      }
    };

    const node = slideshowRef.current;
    node.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      node.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [currentIndex, totalSlides]);

  useEffect(() => {
    if (currentIndex === totalSlides || currentIndex === 1) {
      setTimeout(() => {
        if (slideshowRef.current) {
          slideshowRef.current.style.transition = 'transform 0.5s ease-in-out';
        }
      }, 50);
    }
  }, [currentIndex, totalSlides]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeRight();
    }, 8000);

    return () => {
      clearInterval(intervalId);
    };
  }, [changeRight]);

  return (
    <section id="slide-show">
      <div className='arrow-slide-left' onClick={changeLeft}>
        <div className='arrow-left-slide-1'></div>
        <div className='arrow-left-slide-2'></div>
      </div>

      <div id='corp-slideshow'>
        <div
          className="slides-container"
          ref={slideshowRef}
          style={{
            display: 'flex',
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          <img src={imageGallery[totalSlides - 1]} alt="slideshow" className="slide" />
          {imageGallery.map((image, index) => (
            <img key={index} src={image} alt="slideshow" className="slide" />
          ))}
          <img src={imageGallery[0]} alt="slideshow" className="slide" />
        </div>
      </div>

      <div className='arrow-slide-right' onClick={changeRight}>
        <div className='arrow-right-slide-1'></div>
        <div className='arrow-right-slide-2'></div>
      </div>
    </section>
  );
};
