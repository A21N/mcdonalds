import './css/generalcssproduct.css';
import { Link } from 'react-router-dom';
import bauturi1 from './images/bauturi/bauturi1.png';
import bauturi2 from './images/bauturi/bauturi2.webp';
import bauturi3 from './images/bauturi/bauturi3.webp';
import bauturi4 from './images/bauturi/bauturi4.webp';
import bauturi5 from './images/bauturi/bauturi5.webp';
import bauturi6 from './images/bauturi/bauturi6.webp';
import bauturi7 from './images/bauturi/bauturi7.webp';
import bauturi8 from './images/bauturi/bauturi8.webp';
import bauturi9 from './images/bauturi/bauturi9.webp';
import bauturi10 from './images/bauturi/bauturi10.webp';
import bauturi11 from './images/bauturi/bauturi11.webp';
import bauturi12 from './images/bauturi/bauturi12.webp';
import bauturi13 from './images/bauturi/bauturi13.webp';
import bauturi14 from './images/bauturi/bauturi14.webp';
import bauturi15 from './images/bauturi/bauturi15.webp';
import bauturi16 from './images/bauturi/bauturi16.webp';
import bauturi17 from './images/bauturi/bauturi17.webp';
import bauturi18 from './images/bauturi/bauturi18.webp';
import bauturi19 from './images/bauturi/bauturi19.webp';
import bauturi20 from './images/bauturi/bauturi20.webp';



export const Bauturi = () => {
    return(

        <div className='products'>
            <h1 className='all-products'>Băuturi</h1>
            <div className='align-products'>
                <div className='line-product-title'></div>
                <h2>Cafea, apă sau doar o băutură răcoritoare?</h2>
                <div className='line-product-title'></div>
            </div>
            <p className='paragraph-align-product'>Indiferent că iei băutura la meniu, o adaugi sandvișului preferat sau vrei doar o cafea, la Mec ai de unde alege!</p>
            <div id='product-section'>
                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>   <h1 className='color-title-product'>Coca-Cola</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi1} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Coca-Cola Zero Zahăr</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi2} alt='all-item-products' />
                        </Link>
                    </div>
                </div>

                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>   <h1 className='color-title-product'>Fanta </h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi3} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>   <h1 className='color-title-product'>Sprite</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi4} alt='all-item-products' />
                        </Link>
                    </div>
                </div>
                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>   <h1 className='color-title-product'>Suc de Mere </h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi5} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>   <h1 className='color-title-product'>Suc de Portocale </h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi6} alt='all-item-products' />
                        </Link>
                    </div>
                </div>
                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>   <h1 className='color-title-product'>Espresso 50 ml</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi7} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>   <h1 className='color-title-product'>Lipton la dozator</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi8} alt='all-item-products' />
                        </Link>
                    </div>
                </div>
                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>   <h1 className='color-title-product'>Cafea Americano </h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi9} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>   <h1 className='color-title-product'>Apă minerală </h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi10} alt='all-item-products' />
                        </Link>
                    </div>
                </div>
                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>   <h1 className='color-title-product'>Apă plată</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi11} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>   <h1 className='color-title-product'>Cappuccino</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi12} alt='all-item-products' />
                        </Link>
                    </div>
                </div>
                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>   <h1 className='color-title-product'>Caffé Latte </h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi13} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>   <h1 className='color-title-product'>Latte Macchiato</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi14} alt='all-item-products' />
                        </Link>
                    </div>
                </div>
                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>   <h1 className='color-title-product'>Ceai negru</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi15} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>   <h1 className='color-title-product'>Ceai verde cu flori de iasomie</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi16} alt='all-item-products' />
                        </Link>
                    </div>
                </div>
                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Ceai de mentă</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi17} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>   <h1 className='color-title-product'>Ceai de plante cu aromă de miere</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi18} alt='all-item-products' />
                        </Link>
                    </div>
                </div>
                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>   <h1 className='color-title-product'>Ceai de fructe cu aromă de cireșe</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi19} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Ceai de fructe cu aromă de mere</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={bauturi20} alt='all-item-products' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}