import { Routes, Route } from 'react-router-dom';

import { Home } from './componente/Home';
import { Pui } from './componente/produse/Pui';
import { Vita } from './componente/produse/Vita';
import { Porc } from './componente/produse/Porc';
import { Peste } from './componente/produse/Peste';
import { Cartofi } from './componente/produse/Cartofi';
import { Bauturi } from './componente/produse/Bauturi';
import { Produse } from './componente/produse/Produse';
import { Deserturi } from './componente/produse/Deserturi';
import { Salate } from './componente/produse/Salate';
import { Micdejun } from './componente/produse/Micdejun';
import { Gustari } from './componente/produse/Gustari';
import { Happymeal } from './componente/produse/Happymeal';
import { Meniuri } from './componente/produse/Meniuri';
import { Sosuri } from './componente/produse/Sosuri';
import { Mcdelivery } from './componente/produse/Mcdelivery';
import { Happymealmain } from './componente/Happymealmain';
import { Ronaldprogramm } from './componente/Ronaldprogramm';
import { Mediu } from './componente/Mediu';
import { FundatiaRonald } from './componente/FundatiaRonald';
import { Presa } from './componente/Presa';
import { Restaurante } from './componente/Restaurante';
import { Cariere } from './componente/Cariere';
import { Mccafe } from './componente/Mccafe';







//The rutes for products

export const RutesProducts = () => {
    return(
        
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pui' element={<Pui />} />
                <Route path='/vita' element={<Vita />} />
                <Route path='/porc' element={<Porc />} />
                <Route path='/peste' element={<Peste />} />
                <Route path='/cartofi' element={<Cartofi />} />
                <Route path='/bauturi' element={<Bauturi />} />
                <Route path='/produse' element={<Produse />} />
                <Route path='/deserturi' element={<Deserturi />} />
                <Route path='/salate' element={<Salate />} />
                <Route path='/micdejun' element={<Micdejun />} />
                <Route path='/gustari' element={<Gustari />} />
                <Route path='/happymeal' element={<Happymeal />} />
                <Route path='/meniuri' element={<Meniuri />} />
                <Route path='/sosuri' element={<Sosuri />} />
                <Route path='/mcdelivery' element={<Mcdelivery />} />
                <Route path='/happymealmain' element={<Happymealmain />} />
                <Route path='/ronaldprogramm' element={<Ronaldprogramm />} />
                <Route path='/mediu' element={<Mediu />} />
                <Route path='/fundatiaronald' element={<FundatiaRonald />} />
                <Route path='/presa' element={<Presa />} />
                <Route path='/restaurante' element={<Restaurante />} />
                <Route path='/cariere' element={<Cariere />} />
                <Route path='/mccafe' element={<Mccafe />} />
            </Routes>
        
    )
    
}



    