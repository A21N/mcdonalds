import React, { useState } from 'react';

import cariere1 from './produse/images/cariere/cariere1.webp';
import cariere2 from './produse/images/cariere/cariere2.webp';
import cariere3 from './produse/images/cariere/cariere3.webp';
import cariere4 from './produse/images/cariere/cariere4.webp';
import cariere5 from './produse/images/cariere/cariere5.webp';
import cariere6 from './produse/images/cariere/cariere6.webp';
import cariere7 from './produse/images/cariere/cariere7.webp';
import cariere8 from './produse/images/cariere/cariere8.webp';
import cariere9 from './produse/images/cariere/cariere9.webp';
import cariere10 from './produse/images/cariere/cariere10.webp';
import cariere11 from './produse/images/cariere/cariere11.webp';
import cariere12 from './produse/images/cariere/cariere12.webp';
import cariere13 from './produse/images/cariere/cariere13.webp';
import cariere14 from './produse/images/cariere/cariere14.webp';
import './produse/css/cariere.css';

import { CariereFAQ } from './CariereFAQ';


export const Cariere = () => {


    //cariere show
    const [cariereShow, setCariereShow] = useState(true);

    const changeCariereShow = () => {
        setCariereShow(false);
    }

    //useState for crew
    const [crew, setCrew] = useState(true);

    const changeCrew = () => {
        setCrew(false);
        setManager(true);
        setBarista(true);
        setOspitalitate(true);
    }

     //useState for manager
     const [manager, setManager] = useState(true);

     const changeManager = () => {
        setManager(false);
        setCrew(true);
        setBarista(true);
        setOspitalitate(true);
     }

      //useState for barista
      const [barista, setBarista] = useState(true);

     const changeBarista = () => {
        setBarista(false);
        setManager(true);
        setCrew(true);
        setOspitalitate(true);
     }

       //useState for ospitalitate
       const [ospitalitate, setOspitalitate] = useState(true);

     const changeOspitalitate = () => {
        setOspitalitate(false);
        setBarista(true);
        setManager(true);
        setCrew(true);
     }


     // Variables for simple slideshow

     const template1 = <div className='template-cariere'>
                            <img src={cariere12} alt='cariere'/>
                            <div>
                                <p className='description-cariere-people'>{`Inițial, am ales McDonald's® doar din dorința de a avea un loc de muncă și pentru a mă ajuta să-mi câștig proprii mei bani de buzunar. Tot aici mă aflu și după acești șapte ani de zile, în care am realizat că un job la Mec este mai mult de atât: mi-am făcut prieteni, am devenit ca o familie și prin perseverență am realizat că este un mediu care susține performanța și avansarea în carieră.
                               `}</p>
                               <p className='description-cariere-people'>
                                {`Îmi place să gătesc și să încerc tot timpul rețete și ingrediente noi și să mă plimb pe străzile orașului, alături de prietena mea. Desigur, o cafea de la McCafé® este mai mult decât binevenită în aceste plimbări.`}</p>
                                <h4 className='name-cariere-title'>- Răzvan, Barista Manager, McDonald’s® Drumul Taberei</h4>
                            </div>
                        </div>;
    

    const template2 = <div className='template-cariere'>
                            <img src={cariere13} alt='cariere'/>
                            <div>
                                <p className='description-cariere-people'>{`Acum 3 ani, când încă eram în facultate, am ales McDonald’s® pentru a face practică, pe o perioadă scurtă de timp. Însă, stabilitatea, flexibilitatea programului și oportunitățile de dezvoltare m-au determinat să rămân în echipă.`}
                                 <br />  {`Poziția pe care lucrez mă provoacă să fiu mereu la curent cu inovațiile din sistemul McDonald's®, să le înțeleg și să le explic oaspeților ce facilități de comandă au, dar și să îmi dezvolte abilitățile de comunicare. Kiosk-urile de comandă, din restaurante sunt chiar foarte ușor de utilizat.`}</p>
                                 <p className='description-cariere-people'>{`Posibilitatea de a avea un program flexibil și în ture mă ajută să îmbin activitățile zilnice cu orele petrecute la job. Îmi place să joc tenis, să merg cu bicicleta sau să alerg, și, mai nou, am descoperit fotografia, pentru mine reprezintă singurul mod static prin care ne putem aminti lucruri, oameni și locuri în cele mai mici detalii.`}</p>
                                <h4 className='name-cariere-title'>- Iuliana, Second Assistant, McDonald’s® Pallady</h4>
                            </div>
                        </div>;

    const template3 = <div className='template-cariere'>
                            <img src={cariere14} alt='cariere'/>
                            <div>
                                <p className='description-cariere-people'>{`Am ales McDonald’s® din întâmplare și din curiozitate, acum 20 de ani, iar la momentul respectiv, am crezut că va fi un loc de muncă provizoriu. Însă, de-a lungul timpului am realizat că ceea ce fac mă reprezintă, iar colegii mi-au devenit prieteni.`}</p>
                                <p className='description-cariere-people'>{`Având în vedere că am o viață de familie foarte activă, încerc să găsesc un echilibru între activitatea profesională și activitățile cu cei dragi. Când nu sunt la concursuri cu fetița mea care face sport de performanță, încerc să mă relaxez prin pictură, lectură și iubesc călătoriile alături de familia mea.`}</p>
                                <h4 className='name-cariere-title'>- Vali, Lobby Coordinator, McDonald’s® Barbu Văcărescu</h4>
                            </div>
                        </div>;

const numberSlides = [template1, template2, template3];


const [counterSlides, setCountSlides] = useState(0);

const countSlidePrev = () => {
    setCountSlides(prevCounter => prevCounter -= 1 );
}


const countSlideNext = () => {
    setCountSlides(nextCounter => nextCounter += 1 );
}

if(counterSlides === 3) {
    return setCountSlides(0);
}

if(counterSlides === -1) {
    return setCountSlides(2);
}



   

 
 

    return(
        <>
            <img src={cariere1} className='cariere-large1' alt='img cariere' />
            <img src={cariere2} id='cariere-large2' alt='img cariere' />
            <h3 className='title-cariere'>De ce să alegi un job la McDonald’s®?</h3>
            <p className='text-cariere'>{`
            Dacă lucrezi într-unul dintre restaurantele McDonald’s®, te bucuri de susținerea de care ai nevoie, salariu motivant, traininguri și bonusuri. Mai mult, un job la noi îți lasă timp și pentru visul tău, indiferent care este el. Află în continuare care este rolul potrivit pentru tine și aplică pentru un post în cel mai apropiat restaurant McDonald’s®.
            `}
            </p>
            <div>
                <div className='container-cariere'>
                    <p className={`${'irem-cariere'} ${crew?'color-crew-green':'color-crew-yellow'}`} id={cariereShow?'first-color-grew':'first-color-grew-none'} onClick={ () => {changeCrew();changeCariereShow()}}>CREW</p>
                    <p className={`${'irem-cariere'} ${manager?'color-manager-green':'color-manager-yellow'}`} onClick={ () => {changeManager(); changeCariereShow()}}>MANAGER TRAINEE</p>
                    <p className={`${'irem-cariere'} ${barista?'color-barista-green':'color-barista-yellow'}`} onClick={() => {changeBarista(); changeCariereShow()}}>BARISTA</p>
                    <p className={`${'irem-cariere'} ${ospitalitate?'color-ospitalitate-green':'color-ospitalitate-yellow'}`} onClick={() => {changeOspitalitate(); changeCariereShow()}}>RESPONSABIL OSPITALITATE</p>
                </div>
                <div class='yellow-line-cariere'></div>

                <div className={cariereShow?'info-cariere-show':'info-cariere-show-none'}>
                    <img src={cariere3} alt='cariere' className='img-cariere' />
                    <div className='description-cariere'>
                        <p>{`Eşti o persoană energică, dornică să accepte noi provocări și care vrea să lucreze alături de o echipă dinamică? Eşti încă student şi doreşti să acumulezi experienţă profesională? Aplică pentru poziţia de Crew Member și hai să-i cunoști pe toți colegii cărora jobul la McDonald’s® li se potrivește!
                            În calitate de Lucrător Comercial, te vei ocupa de activități variate, care includ toate zonele unui restaurant McDonald’s®: bucătăria, casa de marcat și sala de mese.
                            Astfel, ai şansa de a-ți dezvolta setul de abilități practice, dar și pe cele de comunicare, în urma interacțiunii cu clienții.`}
                        </p>
                        <button>APLICĂ ACUM</button>
                    </div>
                </div>


                <div className={crew?'info-cariere-1-none':'info-cariere-1'}>
                    <img src={cariere3} alt='cariere' className='img-cariere' />
                    <div className='description-cariere'>
                        <p>{`Eşti o persoană energică, dornică să accepte noi provocări și care vrea să lucreze alături de o echipă dinamică? Eşti încă student şi doreşti să acumulezi experienţă profesională? Aplică pentru poziţia de Crew Member și hai să-i cunoști pe toți colegii cărora jobul la McDonald’s® li se potrivește!
                            În calitate de Lucrător Comercial, te vei ocupa de activități variate, care includ toate zonele unui restaurant McDonald’s®: bucătăria, casa de marcat și sala de mese.
                            Astfel, ai şansa de a-ți dezvolta setul de abilități practice, dar și pe cele de comunicare, în urma interacțiunii cu clienții.`}
                        </p>
                        <button>APLICĂ ACUM</button>
                    </div>
                </div>
                <div className={manager?'info-cariere-2-none':'info-cariere-2'}>
                    <img src={cariere4} alt='cariere' className='img-cariere' />
                    <div className='description-cariere'>
                        <p>{`
                        Oportunitățile de carieră nu lipsesc de la McDonald’s®, iar poziția de Manager Trainee îți poate oferi o mulțime de beneficii cu ajutorul cărora vei urca în ierarhia liderilor de echipă. Dacă ți-ar plăcea să coordonezi un grup de oameni plini de energie, atunci locul tău e, cu siguranță, aici!
                        Vei avea ocazia să îți demonstrezi abilitățile organizatorice și să propui soluții creative pentru diverse situații de lucru. Cunoștințele acumulate în urma orelor de pregătire profesională te vor însoți în drumul spre succes.
                        `}</p>
                        <button>APLICĂ ACUM</button>
                    </div>
                </div>
                <div className={barista?'info-cariere-3-none':'info-cariere-3'}>
                    <img src={cariere5} alt='cariere' className='img-cariere' />
                    <div className='description-cariere'>
                        <p>{`
                     Ești productiv dimineața, iar aroma unică de cafea îți oferă energia necesară pentru a te bucura de fiecare moment al zilei?

                     Atunci aplică pentru poziția de Barista la McCafé® și beneficiază de un program complet de pregătire profesională, o atmosferă plăcută întreținută de colegi dinamici și multe alte avantaje.
                     
                     Vei avea ocazia să împarți mii de zâmbete oamenilor din jurul tău și să-ți dezvolți, astfel, abilitățile de comunicare. Buna dispoziție este nelipsită din restaurante, iar momentele trăite în fiecare zi alături de echipa ta se pot transforma în amintiri de neuitat.
                        `}</p>
                        <button>APLICĂ ACUM</button>
                    </div>
                </div>
                <div className={ospitalitate?'info-cariere-4-none':'info-cariere-4'}>
                    <img src={cariere6} alt='cariere' className='img-cariere' />
                    <div className='description-cariere'>
                        <p>{`
                        La McDonald’s®, experiența pozitivă a vizitatorilor este prioritară. Dacă îți place să interacționezi constant cu oamenii din jurul tău, atunci aplică pentru poziția de Guest Experience Leader (GEL).

                        Plasarea comenzilor prin intermediul noilor kiosk-uri digitale este o experiență nouă pentru oamenii care nu sunt familiari cu sistemul tehnologic implementat în unele restaurante. În calitate de GEL vei avea ocazia să ajuți clienții și să le explici ce înseamnă inovația la McDonald’s®. Astfel, te vei asigura că buna lor dispoziție rămâne intactă pe tot parcursul vizitei.
                            `}
                        </p>
                        <a href='https://www.mcdonalds.ro/cariera/formular'>
                        <button>APLICĂ ACUM</button>
                        </a>
                    </div>
                </div>

                

            </div>
            <div className='post-video'>
                <div className="corp-bubble">
                        <h1 className='mid-text-post'>N-ai experiență? Nicio problemă! Te vrem în echipă pentru skill-urile tale!</h1>
                </div>
                <div className='video-cariere'>
                    <iframe 
                        src="https://www.youtube.com/embed/R8KZwlgFJOw" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                
            </div>

            <div class='our-values'>
                <h3>VALORILE NOASTRE</h3>
                <p className='text-values-top'>
                    Compania noastră este construită pe un set de valori la care ținem și care ne definesc. Acestea sunt motorul nostru de creștere și se reflectă în comportamentul întregii noastre echipe.
                    <br />Mereu cu un zâmbet.
                    </p>
                <div className='values-images'>
                    <div className='top-value-emenets'>
                        <div className='item-value'>
                            <img src={cariere7} alt='our values' className='img-value' />
                            <h3>OSPITALITATE</h3>
                            <p className='text-values-item'>Clienții noștri și echipa se află în centrul atenției noastre.</p>
                        </div>
                        <div className='item-value'>
                            <img src={cariere8} alt='our values' className='img-value' />
                            <h3>DIVERSITATE</h3>
                            <p className='text-values-item'>Ușile noastre sunt deschise pentru toată lumea.</p>
                        </div>
                        
                        <div className='item-value'>
                            <img src={cariere9} alt='our values' className='img-value' />
                            <h3>INTEGRITATE</h3>
                            <p className='text-values-item'>Suntem consecvenți și corecți. Ne respectăm fiecare promisiune.</p>
                        </div>
                    </div>
                    <div className='bottom-value-emenets'>
                        <div className='item-value'>
                            <img src={cariere10} alt='our values' />
                            <h3>COMUNITATE</h3>
                            <p className='text-values-item'>Ne implicăm activ în comunitățile din care facem parte.</p>
                        </div>
                        <div className='item-value'>
                            <img src={cariere11} alt='our values' />
                            <h3>FAMILIE</h3>
                            <p className='text-values-item'>Avem încredere unul în celălalt. Și suntem mai mult decât o echipă.</p>
                        </div>
                    </div>
                </div>
                <a href='https://www.mcdonalds.ro/cariera/valorile-noastre'>
                <button className='values-button'>APLICĂ ACUM</button>
                </a>
                
            </div>


            <div className='slide-show-cariere'>
                <div className='arrow-left-cariere' onClick={countSlidePrev}>{`<`}</div>
                <div className='corp-slide-show'>
                        <p>{numberSlides[counterSlides]}</p>
                </div>
                <div className='arrow-right-cariere' onClick={countSlideNext}>{`>`}</div>
            </div>

            <CariereFAQ />

  


          


        
        </>
    )
}