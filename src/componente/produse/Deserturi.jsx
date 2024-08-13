import './css/generalcssproduct.css';
import { Link } from 'react-router-dom';
import deserturi1 from './images/deserturi/deserturi1.jpg';
import deserturi2 from './images/deserturi/deserturi2.jpg';
import deserturi3 from './images/deserturi/deserturi3.webp';
import deserturi4 from './images/deserturi/deserturi4.jpg';
import deserturi5 from './images/deserturi/deserturi5.webp';
import deserturi6 from './images/deserturi/deserturi6.webp';
import deserturi7 from './images/deserturi/deserturi7.webp';
import deserturi8 from './images/deserturi/deserturi8.png';
import deserturi9 from './images/deserturi/deserturi9.webp';
import deserturi10 from './images/deserturi/deserturi10.webp';



export const Deserturi = () => {
    return(

        <div className='products'>
            <h1 className='all-products'>Deserturi</h1>
            <div className='align-products'>
                <div className='line-product-title'></div>
                <h2>Poftă de dulce?</h2>
                <div className='line-product-title'></div>
            </div>
            <p className='paragraph-align-product'>Ce să fie, plăcintă, înghețată, iaurt cu fructe sau shake?</p>
            <div id='product-section'>
                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>McFlurry® Snickers</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={deserturi1} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>     <h1 className='color-title-product'>McFlurry® Twix</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={deserturi2} alt='all-item-products' />
                        </Link>
                    </div>
                </div>

                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>McSundae® Căpșune</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={deserturi3} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>McSundae® Ciocolată</h1></Link>
                        <Link to='/mcpuisorfresh'><button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={deserturi4} alt='all-item-products' />
                        </Link>
                    </div>
                </div>

                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>McSundae ® Caramel</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={deserturi5} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>     <h1 className='color-title-product'>Plăcintă cu vişine</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={deserturi6} alt='all-item-products' />
                        </Link>
                    </div>
                </div>

                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Îngheţată la cornet</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={deserturi7} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>     <h1 className='color-title-product'>Shake Căpşune</h1></Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={deserturi8} alt='all-item-products' />
                        </Link>
                    </div>
                </div>

                <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>    <h1 className='color-title-product'>Shake Vanilie</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={deserturi9} alt='all-item-products' />
                        </Link>
                    </div>

                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'>     <h1 className='color-title-product'>Shake Ciocolată</h1></Link>
                        <Link to='/mcpuisorfresh'>  <button className='color-button-product'>Află mai multe</button></Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={deserturi10} alt='all-item-products' />
                        </Link>
                    </div>
                </div>

                   
            </div>


        </div>
        
    )
}