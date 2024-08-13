import '../css/mediu.css';

import mediu1 from './produse/images/mediu/mediu1.png';
import mediu2 from './produse/images/mediu/mediu2.png';

import mediu4 from './produse/images/mediu/mediu4.png';

import mediu6 from './produse/images/mediu/mediu6.png';

import '../css/mediu.css';

export const Mediu = () => {
    return(
        <div className='general-mediu'>
       
        <div className='top-banner-text'>
            <div className='text-mediu'>
                <h1 className='text-mediu-1'>Acționăm responsabil.</h1>
                <h2 className='text-mediu-2'><span className='paragraf-slim'>Suntem atenți la ce se întâmplă în jurul nostru și luăm</span> măsuri pentru a fi mai sustenabili.</h2>
            </div>
        </div>
        <div className='container-mediu'>
            <div className='first-mediu'>
                    <img src={mediu1} alt='mediu' className='first-fifty'/>
                    <img src={mediu2} alt='mediu' className='first-fifty'/>
            </div>
            
       </div>

       <div className='second-part-background-mediu'>
               <p className='align-mediu-text-top'>{`McDonald’s® în România se aliniază angajamentului global pentru o economie circulară. Treptat, am redus plasticul din ambalaje prin diverse inițiative care propun variante sustenabile:`}</p>
        </div>
        
            <img src={mediu4} alt='mediu' className='second-part' />
        



            <div className='third-part-background-mediu'>
               <p className='align-mediu-text-bottom'>{`Continuăm să inovăm în materie de sustenabilitate și să introducem noi variante de ambalaje mai bune pentru mediul înconjurător.

Împreună cu partenerii și clienții noștri vom putea să atingem obiectivul setat pentru 2025 și să construim un viitor mai sustenabil.`}</p>
        </div>
           
            <img src={mediu6} alt='mediu' className='dis-mediu' />

       </div>
    )
}