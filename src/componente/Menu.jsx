import '../css/meniu.css';
import logo from '../images/logo.webp';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';










// Definirea variabilelor pentru starea meniurilor
let isMeniuActive = false;
let isFamilieActive = false;
let isComunitateActive = false;

// Funcția pentru a închide toate meniurile
const closeAllMenus = () => {
    if (isMeniuActive) {
        toggleMeniu();
    }
    if (isFamilieActive) {
        toggleFamilie();
    }
    if (isComunitateActive) {
        toggleComunitate();
    }
};

const meniuMove = () => {
    const arrowMeniu = document.querySelector('.arrow-menu-meniu');
    const meniuHide = document.querySelector('.meniu-items-desktop-hide');
    const redMeniuLine = document.querySelector('.red-meniu-line');

    // Verifică și închide celelalte meniuri dacă sunt deschise
    if (isFamilieActive) {
        toggleFamilie();
    }
    if (isComunitateActive) {
        toggleComunitate();
    }

    // Face toggle pentru meniu
    if (arrowMeniu && meniuHide) {
        arrowMeniu.classList.toggle('arrow-menu-meniu-toggle');
        meniuHide.classList.toggle('meniu-items-desktop');
        redMeniuLine.classList.toggle('red-meniu-line-unhide');
        isMeniuActive = !isMeniuActive;
    }
};

const familieMove = () => {
    const arrowFamilie = document.querySelector('.arrow-menu-familie');
    const familieHide = document.querySelector('.familie-items-desktop-hide');
    const redFamilieLine = document.querySelector('.red-familie-line');

    // Verifică și închide celelalte meniuri dacă sunt deschise
    if (isMeniuActive) {
        toggleMeniu();
    }
    if (isComunitateActive) {
        toggleComunitate();
    }

    // Face toggle pentru familie
    if (arrowFamilie && familieHide) {
        arrowFamilie.classList.toggle('arrow-menu-familie-toggle');
        familieHide.classList.toggle('familie-items-desktop');
        redFamilieLine.classList.toggle('red-familie-line-unhide');
        isFamilieActive = !isFamilieActive;
    }
};

const comunitateMove = () => {
    const arrowComunitate = document.querySelector('.arrow-menu-comunitate');
    const comunitateHide = document.querySelector('.comunitate-items-desktop-hide');
    const redComunitateLine = document.querySelector('.red-comunitate-line');

    // Verifică și închide celelalte meniuri dacă sunt deschise
    if (isMeniuActive) {
        toggleMeniu();
    }
    if (isFamilieActive) {
        toggleFamilie();
    }

    // Face toggle pentru comunitate
    if (arrowComunitate && comunitateHide) {
        arrowComunitate.classList.toggle('arrow-menu-comunitate-toggle');
        comunitateHide.classList.toggle('comunitate-items-desktop');
        redComunitateLine.classList.toggle('red-comunitate-line-unhide');
        isComunitateActive = !isComunitateActive;
    }
};

// Funcții pentru a închide meniurile specifice
const toggleMeniu = () => {
    const arrowMeniu = document.querySelector('.arrow-menu-meniu');
    const meniuHide = document.querySelector('.meniu-items-desktop-hide');
    const redMeniuLine = document.querySelector('.red-meniu-line');
    if (arrowMeniu && meniuHide && redMeniuLine) {
        arrowMeniu.classList.remove('arrow-menu-meniu-toggle');
        meniuHide.classList.remove('meniu-items-desktop');
        redMeniuLine.classList.remove('red-meniu-line-unhide');
        isMeniuActive = false;
    }
};

const toggleFamilie = () => {
    const arrowFamilie = document.querySelector('.arrow-menu-familie');
    const familieHide = document.querySelector('.familie-items-desktop-hide');
    const redFamilieLine = document.querySelector('.red-familie-line');
    if (arrowFamilie && familieHide && redFamilieLine) {
        arrowFamilie.classList.remove('arrow-menu-familie-toggle');
        familieHide.classList.remove('familie-items-desktop');
        redFamilieLine.classList.remove('red-familie-line-unhide');
        isFamilieActive = false;
    }
};

const toggleComunitate = () => {
    const arrowComunitate = document.querySelector('.arrow-menu-comunitate');
    const comunitateHide = document.querySelector('.comunitate-items-desktop-hide');
    const redComunitateLine = document.querySelector('.red-comunitate-line');
    if (arrowComunitate && comunitateHide && redComunitateLine) {
        arrowComunitate.classList.remove('arrow-menu-comunitate-toggle');
        comunitateHide.classList.remove('comunitate-items-desktop');
        redComunitateLine.classList.remove('red-comunitate-line-unhide');
        isComunitateActive = false;
    }
};

document.addEventListener('click', (event) => {
    const menus = document.querySelectorAll('.meniu-items-desktop, .familie-items-desktop, .comunitate-items-desktop, .item-meniu, .item-familie, .item-comunitate');
    let isClickInsideMenu = false;

    menus.forEach((menu) => {
        if (menu.contains(event.target)) {
            isClickInsideMenu = true;
        }
    });

    if (!isClickInsideMenu) {
        closeAllMenus();
    }
});

export const Menu = () => {


    //useState for meniu color active
const [meniuColorActive, setMeniuColorActive] = useState(true);

const changeMeniuColorActive = () => {
    setMeniuColorActive(false);
    setFamilieColorActive(true);
    setComunitateColorActive(true);
    setRestauranteColorActive(true);
    setTeamColorActive(true);
    setMccafeColorActive(true);
};

 //useState for familie color active
 const [familieColorActive, setFamilieColorActive] = useState(true);

const changefamilieColorActive = () => {
    setFamilieColorActive(false);
    setMeniuColorActive(true);
    setComunitateColorActive(true);
    setRestauranteColorActive(true);
    setTeamColorActive(true);
    setMccafeColorActive(true);
};
 //useState for comunitate color active
 const [comunitateColorActive, setComunitateColorActive] = useState(true);

const changeComunitateColorActive = () => {
    setComunitateColorActive(false);
    setMeniuColorActive(true);
    setFamilieColorActive(true);
    setRestauranteColorActive(true);
    setTeamColorActive(true);
    setMccafeColorActive(true);
};

//useState for restaurante color active
const [restauranteColorActive, setRestauranteColorActive] = useState(true);

const changeRestauranteColorActive = () => {
    setRestauranteColorActive(false);
    setComunitateColorActive(true);
    setMeniuColorActive(true);
    setFamilieColorActive(true);
    setTeamColorActive(true);
    setMccafeColorActive(true);
   
};

//useState for team color active
const [teamColorActive, setTeamColorActive] = useState(true);

const changeTeamColorActive = () => {
    setTeamColorActive(false);
    setComunitateColorActive(true);
    setMeniuColorActive(true);
    setFamilieColorActive(true);
    setRestauranteColorActive(true);
    setMccafeColorActive(true);
}

//useState for mccafe color active
const [mccafeColorActive, setMccafeColorActive] = useState(true);

const changeMccafeColorActive = () => {
    setMccafeColorActive(false);
    setComunitateColorActive(true);
    setMeniuColorActive(true);
    setFamilieColorActive(true);
    setRestauranteColorActive(true);
    setTeamColorActive(true);
}


  
const [isMenuOpen, setIsMenuOpen] = useState(true);

const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);

};


const arrSymbol = `>`;




    return (
        <>

   
      








       



        <div id="desktop-menu">
            <div id="logo">
                <Link to='/' onClick={closeAllMenus}><img src={logo} alt="Logo" /></Link>
               
                <div className="burger-menu" onClick={handleBurgerClick}>
                    <div className={isMenuOpen ? 'burger-line-1':'burger-line-1-toggle'}></div>
                    <div className={isMenuOpen ? 'burger-line-2':'burger-line-2-toggle'}></div>
                    <div className={isMenuOpen ? 'burger-line-3':'burger-line-3-toggle'}></div>
                </div>

                </div>

          


           
            <div className={isMenuOpen?"menu-items":'menu-items-hide'}>
                <div className='for-red-line'>
                <div className="item-meniu" onClick={() => { meniuMove(); changeMeniuColorActive();}}>
                        <p className="text-menu" id={`${meniuColorActive? '' : 'active'}`}>Meniu</p>
                        <span className="arrow-menu-meniu">
                            <div className="arrow-left-meniu"></div>
                            <div className="arrow-right-meniu"></div>
                        </span>
                    </div>
                    <div className='red-meniu-line'></div>
                </div>



                <div className="meniu-items-desktop-hide">
    <div className='meniu-col-meniu-1'>
        <Link to='./pui' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>
            <div className='line-meniu'>Pui</div>
        </Link>
        <Link to='./vita' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>
            <div className='line-meniu'>Vită</div>
        </Link>
        <Link to='./porc' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>
            <div className='line-meniu'>Porc</div>
        </Link>
        <Link to='./peste' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>
            <div className='line-meniu'>Pește</div>
        </Link>
        <Link to='./cartofi' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>
            <div className='line-meniu'>Cartofi</div>
        </Link>
        <Link to='./bauturi' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>
            <div className='line-meniu'>Băuturi</div>
        </Link>
        <Link to='./produse' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>
            <div className='line-meniu' id='resize-text-menu'>Vezi toate produsele {arrSymbol}</div>
        </Link>
    </div>
    <div className='meniu-col-2'>
        <Link to='./deserturi' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>
            <div className='line-meniu'>Deserturi</div>
        </Link>
        <Link to='./salate' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>
            <div className='line-meniu'>Salate</div>
        </Link>
        <Link to='./micdejun' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>
            <div className='line-meniu'>Micul Dejun</div>
        </Link>
        <Link to='./gustari' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>
            <div className='line-meniu'>Gustări</div>
        </Link>
        <Link to='./happymeal' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>
            <div className='line-meniu'>Happy Meal®</div>
        </Link>
        <Link to='./meniuri' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>
            <div className='line-meniu'>Meniuri</div>
        </Link>
        <Link to='./sosuri' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>
            <div className='line-meniu'>Sosuri</div>
        </Link>
        <Link to='./mcdelivery' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>
            <div className='line-meniu'>McDelivery {arrSymbol}</div>
        </Link>
    </div>
</div>






                <div className='for-red-line'>
                    <div className="item-familie" onClick={() => { familieMove(); changefamilieColorActive(); }}>
                        <p className="text-menu" id={`${familieColorActive? '' : 'active'}`}>Familie</p>
                        <span className="arrow-menu-familie">
                            <div className="arrow-left-familie"></div>
                            <div className="arrow-right-familie"></div>
                        </span>
                    </div>
                    <div className='red-familie-line'></div>
                </div>


                <div className="familie-items-desktop-hide">
            <div className='meniu-col-1'>
                <div className='line-meniu'><Link to='/' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>McPoza®</Link></div>
                <div className='line-meniu'><Link to='happymealmain' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>Happy Meal®</Link></div>
                <div className='line-meniu'><Link to='ronaldprogramm' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>Programul Ronald McDonald®</Link></div>
            </div>
        </div>




                <div className='for-red-line'>
                    <div className="item-comunitate" onClick={() => { comunitateMove(); changeComunitateColorActive(); }}>
                        <p className="text-menu" id={`${comunitateColorActive? '' : 'active'}`}>Comunitate</p>
                        <span className="arrow-menu-comunitate">
                            <div className="arrow-left-comunitate"></div>
                            <div className="arrow-right-comunitate"></div>
                        </span>
                    </div>
                    <div className='red-comunitate-line'></div>
                </div>


                <div className="comunitate-items-desktop-hide">
            <div className='meniu-col-1'>
                <div className='line-meniu'><Link to='mediu' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>Mediu</Link></div>
                <div className='line-meniu'><Link to='fundatiaronald' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>Fundația Ronald McDonald®</Link></div>
                <div className='line-meniu'><Link to='presa' onClick={ () => {closeAllMenus(); handleBurgerClick()}} className='menu-links'>Presă</Link></div>
            </div>
            </div>


                 <div className='item-restaurante' onClick={closeAllMenus}>
                    <p className="text-menu" onClick={ () => { changeRestauranteColorActive(); handleBurgerClick() }}><Link to='/restaurante' className='menu-links' id={`${restauranteColorActive? '' : 'active'}`}>Restaurante</Link></p>
                </div>
                <div className='item-team' onClick={closeAllMenus}>
                    <p className="text-menu" onClick={ () => {changeTeamColorActive(); handleBurgerClick()}}><Link to='/cariere' className='menu-links' id={`${teamColorActive? '' : 'active'}`}>Vino în echipa noastră</Link></p>
                </div>
                <div className='item-mccafe' onClick={closeAllMenus}>
                    <p className="text-menu" onClick={() => {changeMccafeColorActive(); handleBurgerClick()}}><Link to='/mccafe' className='menu-links' id={`${mccafeColorActive? '' : 'active'}`}>McCafé®</Link></p>
                </div>
            </div>
        </div>



        </>
    );
};









