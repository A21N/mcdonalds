import './css/generalcssproduct.css';
import { Link } from 'react-router-dom';
import meniuri1 from './images/meniuri/meniuri1.webp';
import meniuri2 from './images/meniuri/meniuri2.webp';
import meniuri3 from './images/meniuri/meniuri3.webp';
import meniuri4 from './images/meniuri/meniuri4.webp';
import meniuri5 from './images/meniuri/meniuri5.webp';
import meniuri6 from './images/meniuri/meniuri6.webp';
import meniuri7 from './images/meniuri/meniuri7.webp';
import meniuri8 from './images/meniuri/meniuri8.webp';
import meniuri9 from './images/meniuri/meniuri9.webp';




export const Meniuri = () => {
    return(
        <div className='products'>
            <h1 className='all-products'>Meniuri</h1>
            <div className='align-products'>
                <div className='line-product-title'></div>
                <h2>Porc, vită, pui sau pește?</h2>
                <div className='line-product-title'></div>
            </div>
            <p className='paragraph-align-product'>Produsul tău preferat, alături de o porție de cartofi și băutura ta favorită. Alege meniul perfect pentru gustul tău!</p>
           <div id='product-section'>
                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Meniu Spicy Chicken McNuggets® (6 buc)</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={meniuri1} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>     <h1 className='color-title-product'>Meniu Spicy Chicken McNuggets® (9 buc)</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={meniuri2} alt='all-item-products' />
                        </Link>
                    </div>
                    

                    </div>

                    <div className='section-product-1'>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Meniu Big Mac®</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={meniuri3} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Meniu McChicken®</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={meniuri4} alt='all-item-products' />
                        </Link>
                    </div>

                    </div>

                    <div className='section-product-1'>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Meniu Quarter Pounder®</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={meniuri5} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Meniu Dublu Cheeseburger™</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={meniuri6} alt='all-item-products' />
                        </Link>
                    </div>

                    </div>

                    <div className='section-product-1'>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Meniu Chicken McNuggets® (6 buc)</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={meniuri7} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Meniu Fresh Deluxe™</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={meniuri8} alt='all-item-products' />
                        </Link>
                    </div>

                    </div>

                    <div className='section-product-1'>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>     <h1 className='color-title-product'>Meniu Filet-O-Fish®</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={meniuri9} alt='all-item-products' />
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