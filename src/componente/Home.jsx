import { Slideshow } from "./Slideshow";
import { Link } from 'react-router-dom';
import mcs1 from '../images/mcs1.jpg';
import mcs2 from '../images/mcs2.jpg';
import mcs3 from '../images/mcs3.jpg';
import mcs4 from '../images/mcs4.jpg';
import mcs5 from '../images/mcs5.jpg';
import mcs6 from '../images/mcs6.jpg';
import '../css/home.css';


export const Home = () => {
    return(
        <div>
         <Slideshow />
            <div className="galery-home">
                <div className="gal-1">
                    <div className="back-bome-elements-1">
                        <h2 className="pos-elements home-color">Livrăm prin</h2>
                        <h1 className="home-color">McDelivery™</h1>
                        <h2 className="pos-elements home-color">Venim noi la tine!</h2>
                        <Link to='./mcdelivery' className="home-decoration-none">
                        <button className="home-buttons">COMANDĂ ACUM</button>
                        </Link>
                    </div>
                    <div className="back-bome-elements-2">
                        <h2 className="pos-elements home-color">Instalează</h2>
                        <h1 className="home-color">Aplicația McDonald's®</h1>
                        <h2 className="pos-elements home-color">Produse pe gustul tău</h2>
                        <Link to='./mcapp' className="home-decoration-none">
                        <button className="home-buttons">Află mai multe</button>
                        </Link>
                    </div>
                </div>
                <div className="gal-2">
                    <div className="back-bome-elements-3">
                        <h2 className="pos-elements home-color">Alege o</h2>
                        <h1 className="home-color">Carieră la Mec</h1>
                        <h2 className="pos-elements home-color">Vino alături de noi!</h2>
                        <Link to='/cariere' className="home-decoration-none">
                        <button className="home-buttons">Aplică acum</button>
                        </Link>
                    </div>
                    <div className="back-bome-elements-4">
                        <h2 className="pos-elements home-color">Descoperă toate</h2>
                        <h1 className="home-color">Produsele noastre</h1>
                        <h2 className="pos-elements home-color">Produse iconice și noutăți</h2>
                        <Link to='./produse' className="home-decoration-none">
                        <button className="home-buttons">Descoperă produsele</button>
                        </Link>
                    </div>
                </div>
                <div className="gal-3">
                    <div className="back-bome-elements-5">
                        <h2 className="pos-elements home-color">Investim în</h2>
                        <h1 className="home-color">Experiența viitorului</h1>
                        <h2 className="pos-elements home-color">Restaurante moderne</h2>
                    </div>
                    <div className="back-bome-elements-6">
                        <h2 className="pos-elements home-color">Bucură-te de</h2>
                        <h1 className="home-color">Gustul McCafé®</h1>
                        <h2 className="pos-elements home-color">Venim noi la tine!</h2>
                        <Link to='./mccafe' className="home-decoration-none">
                        <button className="home-buttons">Descoperă produsele</button>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="galery-home-small">
                <div className="gal-1-small">
                    <img src={mcs1} alt="mc" className="size-home-img-small" />
                    <div className="text-elements-small">
                        <h2 className="pos-elements home-color-small">Livrăm prin</h2>
                        <h1 className="home-color-small">McDelivery™</h1>
                        <h2 className="home-color-small">Venim noi la tine!</h2>
                        <Link to='./mcdelivery' className="home-decoration-none">
                        <button className="home-buttons">COMANDĂ ACUM</button>
                        </Link>
                    </div>
                    <img src={mcs2} alt="mc" className="size-home-img-small" />
                    <div className="text-elements-small">
                        <h2 className="pos-elements home-color-small">Instalează</h2>
                        <h1 className="home-color-small">Aplicația McDonald's®</h1>
                        <h2 className="home-color-small">Produse pe gustul tău</h2>
                        <Link to='./mcapp' className="home-decoration-none">
                            <button className="home-buttons">Află mai multe</button>
                        </Link>
                    </div>
                </div>
                <div className="gal-2-small">
                    <img src={mcs3} alt="mc" className="size-home-img-small" />
                    <div className="text-elements-small">
                        <h2 className="pos-elements home-color-small">Alege o</h2>
                        <h1 className="home-color-small">Carieră la Mec</h1>
                        <h2 className="home-color-small">Vino alături de noi!</h2>
                        <Link to='/cariere' className="home-decoration-none">
                        <button className="home-buttons">Aplică acum</button>
                        </Link>
                    </div>
                    <img src={mcs4} alt="mc" className="size-home-img-small" />
                    <div className="text-elements-small">
                        <h2 className="pos-elements home-color-small">Descoperă toate</h2>
                        <h1 className="home-color-small">Produsele noastre</h1>
                        <h2 className="home-color-small">Produse iconice și noutăți</h2>
                        <Link to='./produse' className="home-decoration-none">
                        <button className="home-buttons">Descoperă produsele</button>
                        </Link>
                    </div>
                </div>
                <div className="gal-3-small">
                    <img src={mcs5} alt="mc" className="size-home-img-small" />
                    <div className="text-elements-small">
                        <h2 className="pos-elements home-color-small">Investim în</h2>
                        <h1 className="home-color-small">Experiența viitorului</h1>
                        <h2 className="home-color-small">Restaurante moderne</h2>
                    </div>
                    <img src={mcs6} alt="mc" className="size-home-img-small" />
                    <div className="text-elements-small">
                        <h2 className="pos-elements home-color-small">Bucură-te de</h2>
                        <h1 className="home-color-small">Gustul McCafé®</h1>
                        <h2 className="home-color-small">Venim noi la tine!</h2>
                        <Link to='./mccafe' className="home-decoration-none">
                        <button className="home-buttons">Descoperă produsele</button>
                        </Link>
                    </div>
                   
                </div>
            </div>

        </div>
    )
}