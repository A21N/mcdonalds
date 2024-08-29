import '../css/slideshow.css';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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


//codul necesar redimensionarii imaginilor din slide




const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
        backgroundColor: "white", 
        opacity: "0.7",
        width: "50px",
        height: "50px",
        borderRadius: "50%", 
        zIndex: 3,
        left: "10px",  // Poziționează săgeata în stânga
      }}
      onClick={onClick}
    >
      <span style={{ 
        border: "solid black", 
        borderWidth: "0px 3px 3px 0px", 
        display: "inline-block", 
        padding: "8px", 
        transform: "rotate(135deg)" // Schimbă rotația pentru săgeata din stânga
      }} />
    </div>
  );
}


const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
        backgroundColor: "white", 
        opacity: "0.7",
        width: "50px",
        height: "50px",
        borderRadius: "50%", 
        zIndex: 3,
        right: "10px",  
      }}
      onClick={onClick}
    >
      <span style={{ 
        border: "solid black", 
        borderWidth: "0px 3px 3px 0px", 
        display: "inline-block", 
        padding: "8px", 
        transform: "rotate(-45deg)" 
      }} />
    </div>
  );
}


export const Slideshow = () => {

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,             
    autoplaySpeed: 8000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  
  return (
    <>
    <div className="slider-container">
      <Slider {...settings} className='size-slider'>
        <div>
          <img src={vacation} alt="Vacation" className='size-slide'/>
        </div>
        <div>
          <img src={music} alt="Music" className='size-slide' />
        </div>
        <div>
          <img src={burger} alt="Burger" className='size-slide' />
        </div>
        <div>
          <img src={salad} alt="Salad" className='size-slide' />
        </div>
        <div>
          <img src={cats} alt="Cats" className='size-slide' />
        </div>
      </Slider>
    </div>



<div className="slider-container-small">
      <Slider {...settings} className='size-slider'>
        <div>
          <img src={vacationsmall} alt="Vacation" className='size-slide'/>
        </div>
        <div>
          <img src={musicsmall} alt="Music" className='size-slide' />
        </div>
        <div>
          <img src={burgersmall} alt="Burger" className='size-slide' />
        </div>
        <div>
          <img src={saladsmall} alt="Salad" className='size-slide' />
        </div>
        <div>
          <img src={catssmall} alt="Cats" className='size-slide' />
        </div>
      </Slider>
    </div>
    </>

  );
}