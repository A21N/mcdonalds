import './css/generalcssproduct.css';
import { Link } from 'react-router-dom';
import happymeal1 from './images/happymeal/happymeal1.webp';
import happymeal2 from './images/happymeal/happymeal2.webp';
import happymeal3 from './images/happymeal/happymeal3.png';
import happymeal4 from './images/happymeal/happymeal4.webp';
import happymeal5 from './images/happymeal/happymeal5.png';
import happymeal6 from './images/happymeal/happymeal6.png';
import happymeal7 from './images/happymeal/happymeal7.webp';
import happymeal8 from './images/happymeal/happymeal8.png';
import happymeal9 from './images/happymeal/happymeal9.webp';


export const Happymeal = () => {
    return(
        <div className='products'>
            <h1 className='all-products'>Happy Meal®</h1>
            <div className='align-products'>
                <div className='line-product-title'></div>
                <h2>Meniul cu surprize</h2>
                <div className='line-product-title'></div>
            </div>
            <p className='paragraph-align-product'>Meniul plin de zâmbete te așteaptă mereu cu noi surprize.</p>
           <div id='product-section'>
                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>McPuişor®</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={happymeal1} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Hamburger</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={happymeal2} alt='all-item-products' />
                        </Link>
                    </div>
                    

                    </div>

                    <div className='section-product-1'>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Hamburger fără gluten</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={happymeal3} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Cheeseburger</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={happymeal4} alt='all-item-products' />
                        </Link>
                    </div>

                    </div>

                    <div className='section-product-1'>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Cheeseburger fără gluten</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={happymeal5} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Chicken McNuggets®</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={happymeal6} alt='all-item-products' />
                        </Link>
                    </div>

                    </div>

                    <div className='section-product-1'>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>McToast®</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={happymeal7} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Cartofi prăjiți - porție mică</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={happymeal8} alt='all-item-products' />
                        </Link>
                    </div>

                    </div>

                

                    <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Felii de măr</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={happymeal9} alt='all-item-products' />
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