import React from 'react';
import '../css/mcapp.css';
import mcapp1 from '../images/mcapp/acapp1.jpg';
import mcapp2 from '../images/mcapp/mcapp2.webp'
import mcapp3 from '../images/mcapp/mcapp3.webp';
import mcapp4 from '../images/mcapp/mcapp4.webp';
import mcapp5 from '../images/mcapp/mcapp5.webp';
import mcapp6 from '../images/mcapp/mcapp6.png';
import mcapp7 from '../images/mcapp/mcapp7.webp';
import mcapp8 from '../images/mcapp/mcapp8.webp';
import mcapp9 from '../images/mcapp/acapp9.jpg';

export const McApp = () => {
  return (
    <div className='mcapp'>
        <img src={mcapp1} alt='img app-desk-first' />
        <img src={mcapp9} alt='img app-mob-first' />
        
        <img src={mcapp5} alt='img app-line' />
        <div className='text-mcapp'>
            <h1>Cum te răsplătim?</h1>
            <p>E simplu să folosești punctele MyM Rewards, direct din app.</p>
        </div>
         <div className='second-img-mcapp'>
            <img src={mcapp3} alt='img app-second' />
            <img src={mcapp2} alt='img app-second' />
            <img src={mcapp4} alt='img app-second' />
        </div>
       
        <img src={mcapp5} alt='img app-line' />
        <div className='text-mcapp'>
            <h1>Cu ce te răsplătim?</h1>
            <p>Cu o mulțime de oferte dintre care să-ți alegi preferata, data viitoare când ne vizitezi.</p>
        </div>
        <div className='img-app-center'>
            <img src={mcapp8} alt='img app-mob' />
            <img src={mcapp6} alt='img app-center' />
        </div>
       
        <div className='last-one-imgapp'>
            <img src={mcapp7} alt='last-one-imgapp' />
        </div>
       


      
    </div>
  )
}
