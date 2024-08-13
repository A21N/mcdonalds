import './css/generalcssproduct.css';
import glovo from './images/mcdelivery/glovo.webp';
import tazz from './images/mcdelivery/tazz.webp';
import bolt from './images/mcdelivery/bolt.webp';


export const Mcdelivery = () => {
    return(
        <div className='products'>
            <div className='align-all-products'>
                <p className='paragraph-align-delivery'>Îți livrăm când jobul s-a mutat acasă sau când ai poftă să mănânci ceva bun.</p>
                <br />
                <p className='paragraph-align-delivery'>{`Comandă-ți produsele preferate prin Glovo sau Tazz by eMAG, accesează de mai jos pagina partenerului prin care vrei să plasezi comandă și verifică dacă adresa ta se află în zona de livrare a restaurantelor McDonald’s.`}</p>
            </div>
            <div className='social-delivery'>
                <a href={`https://glovoapp.com/ro/en/bucharest/mcdonald-s/`}>
                    <img src={glovo} alt='glovo' className='delivery-icon' />
                </a>
                <a href={`https://tazz.ro/`}>
                    <img src={tazz} alt='tazz' className='delivery-icon' />
                </a>
                <a href={`https://food.bolt.eu/ro-RO/landing`}>
                    <img src={bolt} alt='bolt' className='delivery-icon' />
                </a>
            </div>

            

        </div>
    )
}