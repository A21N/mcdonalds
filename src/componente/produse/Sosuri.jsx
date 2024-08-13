import './css/generalcssproduct.css';
import { Link } from 'react-router-dom';
import sosuri1 from './images/sosuri/sosuri1.webp';
import sosuri2 from './images/sosuri/sosuri2.webp';
import sosuri3 from './images/sosuri/sosuri3.webp';
import sosuri4 from './images/sosuri/sosuri4.webp';
import sosuri5 from './images/sosuri/sosuri5.webp';
import sosuri6 from './images/sosuri/sosuri6.webp';
import sosuri7 from './images/sosuri/sosuri7.webp';
import sosuri8 from './images/sosuri/sosuri8.webp';



export const Sosuri = () => {
    return(
        <div className='products'>
            <h1 className='all-products'>Sosuri</h1>
            <div className='align-products'>
                <div className='line-product-title'></div>
                <h2>Tu alegi sosul</h2>
                <div className='line-product-title'></div>
            </div>
            <p className='paragraph-align-product'>Cu ce sos preferi să fie cartofii? Sau poate azi ai adăuga ceva special burgerului tău? Câte sosuri, atâtea opțiuni.</p>
           <div id='product-section'>
                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>     <h1 className='color-title-product'>1000 Island Dressing</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={sosuri1} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Vinaigrette</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={sosuri2} alt='all-item-products' />
                        </Link>
                    </div>
                    

                    </div>

                    <div className='section-product-1'>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Ketchup</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={sosuri3} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>   <h1 className='color-title-product'>Sour</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={sosuri4} alt='all-item-products' />
                        </Link>
                    </div>

                    </div>

                    <div className='section-product-1'>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Dulce-acrișor</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={sosuri5} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>     <h1 className='color-title-product'>Usturoi</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={sosuri6} alt='all-item-products' />
                        </Link>
                    </div>

                    </div>

                    <div className='section-product-1'>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Maioneză</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={sosuri7} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Sos Yogurt</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={sosuri8} alt='all-item-products' />
                        </Link>
                    </div>

                    </div>

                    

                

                  
            </div>
        </div>
    )
}