import './css/generalcssproduct.css';
import { Link } from 'react-router-dom';

import cartofi1 from './images/cartofi/cartofi1.webp';
import cartofi2 from './images/cartofi/cartofi2.webp';
import cartofi3 from './images/cartofi/cartofi3.png';
import cartofi4 from './images/cartofi/cartofi4.png';


export const Cartofi = () => {
    return(

        <div className='products'>
            <h1 className='all-products'>Cartofi</h1>
            <div className='align-products'>
                <div className='line-product-title'></div>
                <h2>Cartofi crocanți</h2>
                <div className='line-product-title'></div>
            </div>
            <p className='paragraph-align-product'>Știi ce e atât de special la meniul tău: cartofi prăjiți, preparați de fiecare dată cu atenție. Iar uneori vii la Mec doar pentru ei.</p>
            <div id='product-section'>
                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'> <h1 className='color-title-product'>Cartofi Homestyle Dippers</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={cartofi1} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>  <h1 className='color-title-product'>Cartofi prăjiți - porție mare</h1></Link>
                        <Link to='/mcpuisorfresh'>   <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={cartofi2} alt='all-item-products' />
                        </Link>
                    </div>
                    

                    </div>

                    <div className='section-product-1'>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'> <h1 className='color-title-product'>Cartofi prăjiți - porție medie</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={cartofi3} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>  <h1 className='color-title-product'>Cartofi prăjiți - porție mică</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={cartofi4} alt='all-item-products' />
                        </Link>
                    </div>

                    </div>
            </div>


        </div>
        
    )
}