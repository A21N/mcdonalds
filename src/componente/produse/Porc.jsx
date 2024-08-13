import './css/generalcssproduct.css';
import { Link } from 'react-router-dom';

import porc1 from './images/porc/porc1.webp';
import porc2 from './images/porc/porc2.webp';


export const Porc = () => {
    return(

        <div className='products'>
            <h1 className='all-products'>Porc</h1>
            <div className='align-products'>
                <div className='line-product-title'></div>
                <h2>Sandviș cu carne de porc</h2>
                <div className='line-product-title'></div>
            </div>
            <p className='paragraph-align-product'>Când ți-e poftă de ceva diferit, încearcă sandvișul cu carne de porc fragedă!</p>
            <div id='product-section'>
                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'><h1 className='color-title-product'>Mic Dejun Mare</h1> </Link>
                        <Link to='/mcpuisorfresh'><button className='color-button-product'>Află mai multe</button> </Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={porc1} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>  <h1 className='color-title-product'>McToast®</h1> </Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button> </Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={porc2} alt='all-item-products' />
                        </Link>
                    </div>
                    

                    </div>

            </div>


        </div>
        
    )
}