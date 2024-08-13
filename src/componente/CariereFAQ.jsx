import React, { useState } from 'react';

import './produse/css/cariereFAQ.css';


export const CariereFAQ = () => {

    //faq one
const [faqOne, setFaqOne] = useState(true);

const faqOneChange = () => {
    setFaqOne(!faqOne);
}

//faq two 
const [faqTwo, setFaqTwo] = useState(true);

const faqTwoChange = () => {
    setFaqTwo(!faqTwo);
}

//faq three
const [faqThree, setFaqThree] = useState(true);

const faqThreeChange = () => {
    setFaqThree(!faqThree);
}

//faq Four
const [faqFour, setFaqFour] = useState(true);

const faqFourChange = () => {
    setFaqFour(!faqFour);
}

//faq Five 
const [faqFive, setFaqFive] = useState(true);

const faqFiveChange = () => {
    setFaqFive(!faqFive);
}

//faq Six 
const [faqSix , setFaqSix ] = useState(true);

const faqSixChange = () => {
    setFaqSix (!faqSix );
}

//faq Seven 
const [faqSeven , setFaqSeven ] = useState(true);

const faqSevenChange = () => {
    setFaqSeven (!faqSeven );
}

//faq Eight
const [faqEight, setFaqEight] = useState(true);

const faqEightChange = () => {
    setFaqEight(!faqEight);
}

//faq Nine 
const [faqNine, setFaqNine] = useState(true);

const faqNineChange = () => {
    setFaqNine(!faqNine);
}

//faq Ten 
const [faqTen , setFaqTen ] = useState(true);

const faqTenChange = () => {
    setFaqTen (!faqTen );
}

//faq Eleven
const [faqEleven, setFaqEleven] = useState(true);

const faqElevenChange = () => {
    setFaqEleven(!faqEleven);
}

//faq Twelve
const [faqTwelve, setFaqTwelve] = useState(true);

const faqTwelveChange = () => {
    setFaqTwelve(!faqTwelve);
}

//faq Threeten 
const [faqThreeten, setFaqThreeten] = useState(true);

const faqThreetenChange = () => {
    setFaqThreeten(!faqThreeten);
}

//faq Fourteen
const [faqFourteen, setFaqFourteen] = useState(true);

const faqFourteenChange = () => {
    setFaqFourteen(!faqFourteen);
}



    return (
        <div className='general-faq'>
        <div className='faq-container'>
            <h2 className='align-title-faq'>FAQ</h2>
            <p className='align-title-faq'>Ai o nelămurire în legătură cu jobul la McDonald’s®? Ce presupune sau dacă te califici?</p>
            <div className='faq-us'>
                <div className='align-faq' onClick={faqOneChange}>
                    <h3>Cum aplic pentru un loc de muncă la McDonald's®?</h3>
                    <div className='faq-button'>
                        <div className='cube-faq'></div>
                        <div className={faqOne?'arrow-faq-return':'arrow-faq'}>
                            <div className='arr-faq-left'></div>
                            <div className='arr-faq-right'></div>
                        </div>
                       
                    </div>
                </div>
                <div>
                    <p className={faqOne?'text-desc-faq':'text-desc-faq-none'}>Poți aplica foarte rapid completând formularul online de aici: bit.ly/Cariere sau depunând CV-ul în restaurantele McDonald's® din țară.</p>
                </div>
            </div>

            <div className='faq-us'>
                <div className='align-faq' onClick={faqTwoChange}>
                    <h3>Ce se întâmplă cu datele mele?</h3>
                    <div className='faq-button'>
                        <div className='cube-faq'></div>
                        <div className={faqTwo?'arrow-faq':'arrow-faq-return'}>
                            <div className='arr-faq-left'></div>
                            <div className='arr-faq-right'></div>
                        </div>
                       
                    </div>
                </div>
                <div>
                    <p className={faqTwo?'text-desc-faq-none':'text-desc-faq'}>Poți regăsi informații cu privire la politica GDPR aici: https://mcdonalds.ro/legal</p>
                </div>
            </div>

            <div className='faq-us'>
                <div className='align-faq' onClick={faqThreeChange}>
                    <h3>Trebuie să fiu major ca să aplic?</h3>
                    <div className='faq-button'>
                        <div className='cube-faq'></div>
                        <div className={faqThree?'arrow-faq':'arrow-faq-return'}>
                            <div className='arr-faq-left'></div>
                            <div className='arr-faq-right'></div>
                        </div>
                       
                    </div>
                </div>
                <div>
                    <p className={faqThree?'text-desc-faq-none':'text-desc-faq'}>Din punct de vedere legal, te poți angaja de la 16 ani. Mulți tineri își doresc să câștige singuri bani și să nu mai depindă de ajutorul părinților pentru orice cheltuială. Noi îi încurajăm să înceapă să lucreze și suntem mereu deschiși in a oferi oportunități celor interesați. Pentru a te angaja, însă, ai nevoie de acordul părinților.</p>
                </div>
            </div>

            <div className='faq-us'>
                <div className='align-faq' onClick={faqFourChange}>
                    <h3>Pot să aplic pentru mai multe posturi simultan?</h3>
                    <div className='faq-button'>
                        <div className='cube-faq'></div>
                        <div className={faqFour?'arrow-faq':'arrow-faq-return'}>
                            <div className='arr-faq-left'></div>
                            <div className='arr-faq-right'></div>
                        </div>
                       
                    </div>
                </div>
                <div>
                    <p className={faqFour?'text-desc-faq-none':'text-desc-faq'}>Da, poți aplica pentru mai multe posturi diferite în același timp, însă, vom analiza cerințele tale pe rând. Iți recomandăm să citești descrierea pozițiilor noastre pentru a putea decide ce carieră vrei să urmezi.</p>
                </div>
            </div>

            <div className='faq-us'>
                <div className='align-faq' onClick={faqFiveChange}>
                    <h3>Cum ar trebui să mă îmbrac la interviu?</h3>
                    <div className='faq-button'>
                        <div className='cube-faq'></div>
                        <div className={faqFive?'arrow-faq':'arrow-faq-return'}>
                            <div className='arr-faq-left'></div>
                            <div className='arr-faq-right'></div>
                        </div>
                       
                    </div>
                </div>
                <div>
                    <p className={faqFive?'text-desc-faq-none':'text-desc-faq'}>Recomandarea noastră este ținuta smart casual. Spre exemplu, un tricou de culoare caldă și pantaloni închiși la culoare sau fustă.</p>
                </div>
            </div>

            <div className='faq-us'>
                <div className='align-faq' onClick={faqSixChange}>
                    <h3>Pot aplica din nou, în cazul în care nu sunt selectat?</h3>
                    <div className='faq-button'>
                        <div className='cube-faq'></div>
                        <div className={faqSix?'arrow-faq':'arrow-faq-return'}>
                            <div className='arr-faq-left'></div>
                            <div className='arr-faq-right'></div>
                        </div>
                       
                    </div>
                </div>
                <div>
                    <p className={faqSix?'text-desc-faq-none':'text-desc-faq'}>Sigur că da, poți aplica de mai multe ori, te rugăm doar să trimiți o nouă cerere de angajare - online, pe site-ul www.mcdonalds.ro sau în orice restaurant McDonald's®.</p>
                </div>
            </div>

            <div className='faq-us'>
                <div className='align-faq' onClick={faqSevenChange}>
                    <h3>Care sunt etapele procesului de selecție?</h3>
                    <div className='faq-button'>
                        <div className='cube-faq'></div>
                        <div className={faqSeven?'arrow-faq':'arrow-faq-return'}>
                            <div className='arr-faq-left'></div>
                            <div className='arr-faq-right'></div>
                        </div>
                       
                    </div>
                </div>
                <div>
                    <p className={faqSeven?'text-desc-faq-none':'text-desc-faq'}>
                       <div> • Selecție CV;</div>
                       <div>• Interviu;</div>
                       <div>   • Te vom informa telefonic pentru a stabili pașii necesari întocmirii contractului.</div>
                       </p>
                </div>
            </div>

            <div className='faq-us'>
                <div className='align-faq' onClick={faqEightChange}>
                    <h3>Ce acte sunt necesare pentru angajare?</h3>
                    <div className='faq-button'>
                        <div className='cube-faq'></div>
                        <div className={faqEight?'arrow-faq':'arrow-faq-return'}>
                            <div className='arr-faq-left'></div>
                            <div className='arr-faq-right'></div>
                        </div>
                       
                    </div>
                </div>
                <div>
                    <p className={faqEight?'text-desc-faq-none':'text-desc-faq'}>La finalul procesului de recrutare, dacă ai fost selectat pentru angajare, vei primi o listă cu toate actele necesare în vederea continuării și finalizării procesului de recrutare.</p>
                </div>
            </div>

            <div className='faq-us'>
                <div className='align-faq' onClick={faqNineChange}>
                    <h3>Care este salariul pe care îl primesc?</h3>
                    <div className='faq-button'>
                        <div className='cube-faq'></div>
                        <div className={faqNine?'arrow-faq':'arrow-faq-return'}>
                            <div className='arr-faq-left'></div>
                            <div className='arr-faq-right'></div>
                        </div>
                       
                    </div>
                </div>
                <div>
                    <p className={faqNine?'text-desc-faq-none':'text-desc-faq'}>Salariul de intrare diferă de la poziție la poziție, in funcție de grila salarială în vigoare.
Pe lângă salariu, vei primi și tichete de masă, reducere 50% pentru produsele servite în timpul programului de lucru, zile libere pentru evenimente speciale și altele.</p>
                </div>
            </div>

            <div className='faq-us'>
                <div className='align-faq' onClick={faqTenChange}>
                    <h3>Cu ce frecvență voi fi plătit?</h3>
                    <div className='faq-button'>
                        <div className='cube-faq'></div>
                        <div className={faqTen?'arrow-faq':'arrow-faq-return'}>
                            <div className='arr-faq-left'></div>
                            <div className='arr-faq-right'></div>
                        </div>
                       
                    </div>
                </div>
                <div>
                    <p className={faqTen?'text-desc-faq-none':'text-desc-faq'}>Salariul se acordă lunar, conform legislației în vigoare.</p>
                </div>
            </div>

            <div className='faq-us'>
                <div className='align-faq' onClick={faqElevenChange}>
                    <h3>Pe ce tipuri de ture voi lucra?</h3>
                    <div className='faq-button'>
                        <div className='cube-faq'></div>
                        <div className={faqEleven?'arrow-faq':'arrow-faq-return'}>
                            <div className='arr-faq-left'></div>
                            <div className='arr-faq-right'></div>
                        </div>
                       
                    </div>
                </div>
                <div>
                    <p className={faqEleven?'text-desc-faq-none':'text-desc-faq'}>Restaurantele noastre funcționează în cadrul unor intervale orare variate, până la 24 de ore pe zi. Spre exemplu, o tură de dimineață poate începe la ora 6.
Toți angajații noștri lucrează în ture, prin rotație, ceea ce presupune lucru și în tura de noapte (dacă ai peste 18 ani). Turele sunt concepute pentru a fi în avantajul tău, ținând cont în același timp de legislația în vigoare.</p>
                </div>
            </div>

            <div className='faq-us'>
                <div className='align-faq' onClick={faqTwelveChange}>
                    <h3>Cu ce ar trebui să mă îmbrac la locul de muncă?</h3>
                    <div className='faq-button'>
                        <div className='cube-faq'></div>
                        <div className={faqTwelve?'arrow-faq':'arrow-faq-return'}>
                            <div className='arr-faq-left'></div>
                            <div className='arr-faq-right'></div>
                        </div>
                       
                    </div>
                </div>
                <div>
                    <p className={faqTwelve?'text-desc-faq-none':'text-desc-faq'}>Unul dintre numeroasele beneficii de a lucra la McDonald's® este acela că nu trebuie să-ți faci griji cu privire la vestimentație! Îți oferim uniformă și te ajutăm cu indicații privind conduita la locul de muncă. Ține cont că munca în domeniul alimentației publice presupune o ținută adecvată și un aspect îngrijit, care să contribuie la respectarea regulilor de siguranță alimentară, de aceea am recomanda, în plus:
                    
                    <div>• Încălțăminte cu talpă aderentă și joasă</div>
                    <div>• Lipsa bijuteriilor accesoriu, exceptând verigheta</div>
                    <div>• Lipsa lacului pe unghii, a unghiilor false sau machiajul excesiv</div></p>
                </div>
            </div>

            <div className='faq-us'>
                <div className='align-faq' onClick={faqThreetenChange}>
                    <h3>După cât timp poți fi avansat la McDonald’s®? Și este vreo diferență la salariu?</h3>
                    <div className='faq-button'>
                        <div className='cube-faq'></div>
                        <div className={faqThreeten?'arrow-faq':'arrow-faq-return'}>
                            <div className='arr-faq-left'></div>
                            <div className='arr-faq-right'></div>
                        </div>
                       
                    </div>
                </div>
                <div>
                    <p className={faqThreeten?'text-desc-faq-none':'text-desc-faq'}>În McDonald’s® punem mare accent pe dezvoltarea oamenilor.
Angajații pot avansa în funcție de performanțele de la locul de muncă și in funcție de implicarea dovedită prin parcurgerea cu responsabilitate a tuturor programelor de instruire aferente poziției.
Pachetul salarial va fi diferit in funcție de poziție, conform grilei salariale existente la acel moment.</p>
                </div>
            </div>

            <div className='faq-us'>
                <div className='align-faq' onClick={faqFourteenChange}>
                    <h3>Ce fel de training primesc dacă mă angajez Manager Trainee?</h3>
                    <div className='faq-button'>
                        <div className='cube-faq'></div>
                        <div className={faqFourteen?'arrow-faq':'arrow-faq-return'}>
                            <div className='arr-faq-left'></div>
                            <div className='arr-faq-right'></div>
                        </div>
                       
                    </div>
                </div>
                <div>
                    <p className={faqFourteen?'text-desc-faq-none':'text-desc-faq'}>Toți angajații pornesc de la același program de dezvoltare profesională in restaurantele noastre, doar că pentru un Manager Trainee, programul de dezvoltare dedicat este accelerat pentru a pregăti rapid viitoarea generație de manageri.
Programul de pregătire este o combinație de instruire umăr la umăr în restaurant (on floor) – 70%, studiu individual (off floor) – 20% și training virtual / în sala de curs – 10%.
Vei parcurge mai multe etape într-un ritm intensiv de învățare:

<div>• Instruirea pentru stații</div>
<div> • Instruirea pentru Crew Trainer</div>
<div> • Tranziția către poziții de management în cadrul McDonald’s®</div>
<div> • Instruirea pentru ospitalitate</div>
<div> • Conducerea zonelor</div>
<div> • Conducerea schimburilor</div>
După aproximativ 9 luni (în funcție de nivelul de pregătire și perseverență), se încheie programul de pregătire Manager Trainee și urmează o perioadă de evaluare de 2 luni, timp în care vom definitiva pregătirea ta astfel încât să poți face pasul către primul rol managerial în cadrul echipei McDonald's®.</p>
                </div>
            </div>
            


        
        </div>
        </div>
    )
    
}