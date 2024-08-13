import { Link } from 'react-router-dom';

import './css/generalcssproduct.css';
import pui1 from './images/pui/pui1.jpg';
import pui3 from './images/pui/pui3.webp';
import pui4 from './images/pui/pui4.webp';
import pui5 from './images/pui/pui5.webp';
import pui6 from './images/pui/pui6.webp';
import pui7 from './images/pui/pui7.webp';
import pui8 from './images/pui/pui8.webp';
import pui9 from './images/pui/pui9.png';

export const Pui = () => {
    return(
        <div className='products'>
            <h1 className='all-products'>Pui</h1>
            <div className='align-products'>
                <div className='line-product-title'></div>
                <h2>Pui pe toate gusturile</h2>
                <div className='line-product-title'></div>
            </div>
            <p className='paragraph-align-product'>Produse de pui preparate așa cum îți place. Adaugă produsul preferat la meniu!</p>
           <div id='product-section'>
                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'><h1 className='color-title-product'>McPuișor Fresh</h1></Link>
                            
                            <Link to='/mcpuisorfresh'><button className='color-button-product'>Află mai multe</button></Link>
                           
                        </div>
                       
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                            <img src={pui1} alt='all-item-products' />
                        </Link>
                        
                       
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'><h1 className='color-title-product'>Spicy Chicken McNuggets®</h1></Link>
                        
                        <Link to='/mcpuisorfresh'><button className='color-button-product'>Află mai multe</button></Link>
                          
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                            <img src={pui6} alt='all-item-products' />
                            </Link>
                       
                    </div>
                    

                    </div>

                    <div className='section-product-1'>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'><h1 className='color-title-product'>McCrispy®</h1></Link>
                            
                            <Link to='/mcpuisorfresh'><button className='color-button-product'>Află mai multe</button></Link>
                           
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={pui7} alt='all-item-products' />
                        </Link>
                       
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'><h1 className='color-title-product'>Crispy Chicken Tenders</h1></Link>
                            
                            <Link to='/mcpuisorfresh'><button className='color-button-product'>Află mai multe</button></Link>
                           
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={pui3} alt='all-item-products' />
                        </Link>
                       
                    </div>

                    </div>

                    

                    <div className='section-product-1'>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'><h1 className='color-title-product'>McChicken®</h1></Link>
                           
                            <Link to='/mcpuisorfresh'><button className='color-button-product'>Află mai multe</button></Link>
                         
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={pui8} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'><h1 className='color-title-product'>McPuişor®</h1></Link>
                            <Link to='/mcpuisorfresh'><button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img' >
                        <img src={pui4} alt='all-item-products' />
                        </Link>
                    </div>

                    </div>
                    <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'><h1 className='color-title-product'>Chicken McNuggets®</h1></Link>
                            <Link to='/mcpuisorfresh'><button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={pui9} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'><h1 className='color-title-product'>Aripioare - produs picant</h1></Link>
                            <Link to='/mcpuisorfresh'><button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={pui5} alt='all-item-products' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}