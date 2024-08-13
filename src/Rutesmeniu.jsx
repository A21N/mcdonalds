import { Routes, Route } from 'react-router-dom';



import { McPuisorFresh } from './componente/produse/produsemeniu/pui/McPuisorFresh';








//The rutes for products

export const Rutesmeniu = () => {
    return(
        
            <Routes>
               
              
                <Route path='/mcpuisorfresh' element={<McPuisorFresh />} />
            
            </Routes>
        
    )
    
}



    