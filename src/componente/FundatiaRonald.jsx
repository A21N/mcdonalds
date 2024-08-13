

import '../css/funcdatiaronald.css';
import fronald1 from './produse/images/fundatiaronald/fronald1.jpg';
import fronald2 from './produse/images/fundatiaronald/fronald2.jpg';
import fronald3 from './produse/images/fundatiaronald/fronald3.jpg';
import fronald4 from './produse/images/fundatiaronald/fronald4.jpg';

export const FundatiaRonald = () => {
    return(
        <div className='container-fronald'>
        <img src={fronald1} alt='fronald' className='size-fronald1'/>
        <div>
            <div className='cont1-fronald'>
                <img src={fronald2} alt='fronald' className='size-fronald'/>
                <div className='text-fronald-1'>
                    <h1 className='tittle-rnld-mc-fnd'>Casele Ronald McDonald® - casă departe de casă</h1>
                    <p className='txt-fndrm'>
                    Cele două Case Ronald McDonald®, din București și Timișoara, vin în ajutorul părinților copiilor care sunt internați pentru tratamente de lungă durată, iar Fundația pentru Copii Ronald McDonald® România este principalul susținător.
Pe durata spitalizării copiilor, părinții acestora le pot fi alături, fără să fie nevoiți să plătească cazarea.
                    </p>
                    <a href='https://rmhc.ro/casele-ronald-mcdonald/'>
                    <button className='fndr-button'>Fă-ne o vizită virtuală</button>
                    </a>
                </div>
            </div>
            <div className='cont2-fronald'>
                <div className='text-fronald-1'>
                    <h1 className='tittle-rnld-mc-fnd'>Ajută-ne să ținem familiile împreună</h1>
                    <p className='txt-fndrm'>Împreună, în toți anii de activitate a Caselor Ronald McDonald®, am reușit să oferim o casă departe de casă pentru peste 20.000 de părinți și copii. Ne dorim, cu implicarea ta, să ajutăm și mai mulți copii să aibă familia alături în perioadele de spitalizare și tratament.
                    </p>
                    <button className='fndr-button'>Află cum poți dona</button>
                </div>
                <img src={fronald3} alt='fronald' className='size-fronald'/>
            </div>
            
           
        </div>
        <div className='cadru-text-rnld-f-bottom'>
            <h2>Alături de Spitalele pentru Copii</h2>
            <p className='txt-fndrm'>
            De peste 25 de ani, Fundația pentru Copii Ronald McDonald® este un partener de încredere pentru Spitalele de Copii din întreaga țară. În fiecare an, Fundația a sprijinit personalul medical cu echipamente medicale, aparatură de ultimă generație, consumabile, mobilier sau diferite facilități non-medicale, cu tot ce a fost necesar desfășurării actului medical în cele mai bune condiții.
            </p>
        </div>
        <img src={fronald4} alt='fronald' className='size-fronald2'/>
        </div>
    )
}