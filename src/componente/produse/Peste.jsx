import './css/generalcssproduct.css';
import peste1 from './images/peste/peste1.webp';
import { Link } from 'react-router-dom';


export const Peste = () => {
    return(
        <div className='products'>
            <h1 className='all-products'>Peşte</h1>
            <div className='align-products'>
                <div className='line-product-title'></div>
                <h2>Sandviș light</h2>
                <div className='line-product-title'></div>
            </div>
            <p className='paragraph-align-product'>Poftă de pește? Adaugă la meniul tău sandvișul Fillet-o-Fish</p>
           <div id='product-section'>
            

                


                    
                    <div className='section-product-1'>
                    <div className='grid-name'>
                        <div className='aliniere-product'>
                        <Link to='/mcpuisorfresh' className='no-underline-title-products'> <h1 className='color-title-product'>Filet-O-Fish®</h1> </Link>
                        <Link to='/mcpuisorfresh'> <button className='color-button-product'>Află mai multe</button> </Link>
                        </div>
                        <Link to='/mcpuisorfresh' className='size-link-of-img'>
                        <img src={peste1} alt='all-item-products' />
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