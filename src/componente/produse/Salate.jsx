import './css/generalcssproduct.css';
import { Link } from 'react-router-dom';
import salate1 from './images/salate/salate1.jpg';
import salate2 from './images/salate/salate2.jpg';
import salate3 from './images/salate/salate3.webp';
import salate4 from './images/salate/salate4.webp';
import salate5 from './images/salate/salate5.webp';
import salate6 from './images/salate/salate6.webp';





export const Salate = () => {
    return(

        <div className='products'>
            <h1 className='all-products'>Salate</h1>
            <div className='align-products'>
                <div className='line-product-title'></div>
                <h2>Salate sățioase</h2>
                <div className='line-product-title'></div>
            </div>
            <p className='paragraph-align-product'>Salatele McDonald’s sunt create din cele mai proaspete ingrediente. Savurează-le alături de sosul tău preferat!</p>
            <div id='product-section'>
                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Salatzikos cu pui crocant</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Salatzikos cu telemea</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={salate1} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Salatzikos cu telemea</h1></Link>
                        <Link to='/mcpuisorfresh'><button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={salate2} alt='all-item-products' />
                        </Link>
                    </div>
                </div>

                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>     <h1 className='color-title-product'>1000 Island Dressing</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={salate3} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Vinaigrette</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={salate4} alt='all-item-products' />
                        </Link>
                    </div>
                </div>

                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Salată Coleslaw</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={salate5} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Sos Yogurt</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={salate6} alt='all-item-products' />
                        </Link>
                    </div>
                </div>

            </div>


        </div>
        
    )
}