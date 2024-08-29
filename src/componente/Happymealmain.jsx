import happyminion1 from './produse/images/happyminion/happyminion1.jpg';
import happyminion1small from './produse/images/happyminion/happyminion1-small.jpg';

import happyCat1 from './produse/images/happyminion/happycat1.webp';
import happyCat2 from './produse/images/happyminion/happycat2.webp';
import happyCat3 from './produse/images/happyminion/happycat3.webp';
import happyCat4 from './produse/images/happyminion/happycat4.webp';
import happyCat5 from './produse/images/happyminion/happycat5.webp';
import happyCat6 from './produse/images/happyminion/happycat6.webp';
import happyCat7 from './produse/images/happyminion/happycat7.webp';
import happyCat8 from './produse/images/happyminion/happycat8.webp';
import happyCat9 from './produse/images/happyminion/happycat9.webp';
import happyCat10 from './produse/images/happyminion/happycat10.webp';



import './produse/css/happyminion.css';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Fundal semi-transparent
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "1px solid #ffbc0d",
          zIndex: 10,
          left: "10px",
          cursor: "pointer", // Schimbă cursorul la hover
        }}
        onClick={onClick}
      >
        <span
          style={{
            border: "solid black",
            borderWidth: "0px 3px 3px 0px",
            display: "inline-block",
            padding: "8px",
            transform: "rotate(135deg)", // Săgeată spre stânga
            color: "white", // Culoarea săgeții
            zIndex: "3",
          }}
        />
      </div>
    );
  };
  
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
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "1px solid #ffbc0d",
          zIndex: 10,
          right: "10px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <span
          style={{
            border: "solid black",
            borderWidth: "0px 3px 3px 0px",
            display: "inline-block",
            padding: "8px",
            transform: "rotate(-45deg)",
            color: "white",
          }}
        />
      </div>
    );
  };

  


    export const Happymealmain = () => {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3, // Afișează 3 imagini pe slide în mod normal
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 5000,
            nextArrow: <CustomNextArrow />,
            prevArrow: <CustomPrevArrow />,
            responsive: [
              {
                breakpoint: 1250,
                settings: {
                  slidesToShow: 2, // Afișează 2 imagini pe slide la 1250px sau mai puțin
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1, // Afișează 1 imagine pe slide la 768px sau mai puțin
                  slidesToScroll: 1,
                }
              }
            ]
          };

    

    return(
        <>
        <img src={happyminion1} alt='happy meal' id='happyminion-large' />
        <img src={happyminion1small} alt='happy meal small' id='happyminion-small' />
        <h1 className='heading-minions'>{`Descoperă și bucură-te de noua colecție Happy Meal® Pet Simulator`}</h1>
        <p className='heading-minions size-p-minions'>Poți să te joci cu ele, ba chiar să descoperi universul a 20 de animăluțe, cu noile jucării din colecția Pet Simulator fabricate din plastic sustenabil și regenerabil. În fiecare cutie o să găsești două animăluțe de care să ai grijă, iar dacă scanezi codul QR de pe cutie, vei putea călători în universul unic al fiecărui animăluț în parte.</p>
      

    <Slider {...settings} className='cats-slider-dimension'>
      <div>
        <img src={happyCat1} alt="happyCat1" className='cats-images'  />
      </div>
      <div>
        <img src={happyCat2} alt="happyCat1" className='cats-images' />
      </div>
      <div>
        <img src={happyCat3} alt="happyCat1"  className='cats-images'/>
      </div>
      <div>
        <img src={happyCat4} alt="happyCat1" className='cats-images' />
      </div>
      <div>
        <img src={happyCat5} alt="happyCat1" className='cats-images' />
      </div>
      <div>
        <img src={happyCat6} alt="happyCat1" className='cats-images' />
      </div>
      <div>
        <img src={happyCat7} alt="happyCat1"  className='cats-images'/>
      </div>
      <div>
        <img src={happyCat8} alt="happyCat1" className='cats-images' />
      </div>
      <div>
        <img src={happyCat9} alt="happyCat1" className='cats-images' />
      </div>
      <div>
        <img src={happyCat10} alt="happyCat1"  className='cats-images'/>
      </div>
    </Slider>

        
        
          <h1 className='heading-minions distance-from-slideshow'>Ce surpriză alegi?</h1>
        <p className='heading-minions size-p-minions'>{`Dorești sa construiești o poveste nouă pornind de la o jucărie haioasă sau să afli lucruri uimitoare, într-un mod jucăuș, din noile cărticele Happy Meal® Readers?
Orice ai alege, un lucru e sigur: distracția va fi la cote maxime!`}</p>
        <button className='buton-minions size-min'>Află mai multe</button>
        <h1 className='heading-minions'>Cum a apărut Happy Meal®?</h1>
        <p className='heading-minions size-p-minions'>Faimosul pătrățel roșu cu limba scoasă nu a arătat mereu așa.<br />
Mai întâi a apărut ideea de un meniu special pentru copii, după care a fost inventat ambalajul și partea cea mai intersantă – jucăriile.<br />
Descoperă toată povestea meniului Happy Meal®, de la concept la zâmbetele fericite ale celor mai tineri clienți McDonald's®.</p>
        <button className='buton-minions'>Află mai multe</button>
        </>
    )
}