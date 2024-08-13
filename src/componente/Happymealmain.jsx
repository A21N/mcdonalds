import happyminion1 from './produse/images/happyminion/happyminion1.webp';
import happyminion1small from './produse/images/happyminion/happyminion1-small.webp';
import './produse/css/happyminion.css';

export const Happymealmain = () => {
    return(
        <>
        <img src={happyminion1} alt='happy meal' id='happyminion-large' />
        <img src={happyminion1small} alt='happy meal small' id='happyminion-small' />
        <h1 className='heading-minions'>{`Salvează zâmbetele alături de adorabilii Minioni din noua colecție de jucării Happy Meal® Despicable Me 4`}</h1>
        <p className='heading-minions size-p-minions'>Noua colecție de jucării Happy Meal® te transformă în erou, alături de 12 Minioni pregătiți să te ajute să salvezi zâmbetele capturate de echipa de răufăcători a lui Maxime. Alege dintre o figurină sau o carte și adu la viață acțiunea din noul film de animație Despicable Me 4. </p>
        <h1 className='heading-minions'>Ce surpriză alegi?</h1>
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