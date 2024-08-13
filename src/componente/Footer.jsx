import '../css/footer.css';


import gplay from '../images/gplay.svg';
import apple from '../images/apple.svg';




import facebook from '../images/social/facebook-f.svg';
import instagram from '../images/social/instagram-f.png';
import undelucram from '../images/social/undelucram-f.webp';
import youtube from '../images/social/youtube-f.png';


export const Footer = () => {
    return (
        <section id="footer">
            <div id="footer-top-line"></div>
            <footer>
                <div className="footer-left">
                    <div className='footer-despre'>
                        <h3>Despre noi</h3>
                        <p>Despre noi</p>
                        <p>Despre companie</p>
                        <p>Povestea lui Ray Kroc</p>
                        <p>Caritate</p>
                    </div>
                    <div className='footer-restaurante'>
                        <h3>Restaurante</h3>
                        <p>Restaurante</p>
                    </div>
                    <div className='footer-contact'>
                        <h3>Contact</h3>
                        <p>Contact</p>
                        <p>Carieră</p>
                        <p>Presa</p>
                    </div>
                </div>
                <div className="footer-right">
                    <div className='footer-utile'>
                        <h3 className='footer-text-right'>Linkuri utile</h3>
                        <p className='footer-text-right'>Termeni și condiții</p>
                        <p className='footer-text-right'>Politică de confidențialitate</p>
                        <p className='footer-text-right'>CCTV</p>
                        <p className='footer-text-right'>Declarație cookie</p>
                        <p className='footer-text-right'>Regulamente</p>
                        <p className='footer-text-right'>Autoritatea Națională pentru Protecția Consumatorilor</p>
                        <p className='footer-text-right'>Prevenire și reducere deșeuri</p>
                        <p className='footer-text-right'>Gramaje, Alergeni, Ingrediente</p>
                        <p className='footer-text-right'>Autorizații și Avize</p>
                        <p className='footer-text-right'>Telefonul Consumatorilor: 021-9551</p>
                    </div>
                    <div className='social-media'>
                        <a href='https://www.facebook.com/McDonalds.ro/'>
                            <img src={facebook} alt='Facebook' />
                        </a>
                        <a href='https://www.youtube.com/user/McDonaldsRomania'>
                        <img src={youtube} alt='YouTube' />
                        </a>
                        <a href='https://www.instagram.com/mcdonalds_ro'>
                        <img src={instagram} alt='Instagram' />
                        </a>
                        <a href='https://www.undelucram.ro/ro/prezentare-mcdonald-s-totul-despre-mediul-de-lucru-interviu-74'>
                        <img src={undelucram} alt='Undelucram' />
                        </a>
                        
                    </div>
                </div>
            </footer>
            <div className='app-copy-elements'>
                <div className='app-elements'>
                    <p>Instalează aplicația McDonald's</p>
                    <div className='app-section'>
                        <a href='https://play.google.com/store/apps/details?id=com.mcdonalds.mobileapp&pli=1'>
                            <img src={gplay} alt='Google Play' />
                        </a>
                        <a href='https://apps.apple.com/ro/app/mcdonalds/id1217507712'>
                            <img src={apple} alt='Apple Store' />
                        </a>
                    </div>
                </div>
                <div className='copy-elements'>
                    <h3>© 2023-2024 McDonald's Corporation</h3>
                </div>
            </div>
        </section>

    );

}