
import '../css/restaurante.css';
import restaurante1 from './produse/images/reastaurante/restaurante1.png';
import restaurante2 from './produse/images/reastaurante/restaurante2.webp';











export const Restaurante = () => {
    return(
        <div className="container-restaurante">
        <img src={restaurante1} alt='restaurante-1' className='size-image-restaurante'/>
        <img src={restaurante2} alt='restaurante-2' className='size-image-restaurante'/> 
        </div>
    )
}
