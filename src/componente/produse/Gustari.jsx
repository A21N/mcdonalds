import './css/generalcssproduct.css';
import gustari1 from './images/gustari/gustari1.jpg';
import { Link } from 'react-router-dom';

export const Gustari = () => {
    return(
        <div className='products'>
            <h1 className='all-products'>Gustări</h1>
            <div className='align-products'>
                <div className='line-product-title'></div>
                <h2>Ești pe fugă?</h2>
                <div className='line-product-title'></div>
            </div>
            <p className='paragraph-align-product'>Când n-ai timp de masă, treci pe la Mec și potolește-ți foamea cu o gustare rapidă!</p>
           <div id='product-section'>
            

                


                    
                    <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>     <h1 className='color-title-product'>Beer Mozzarella Sticks</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={gustari1} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='last-pui'>
                        <div className='aliniere-pui'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}