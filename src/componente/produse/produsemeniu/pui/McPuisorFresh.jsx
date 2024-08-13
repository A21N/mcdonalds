





import '../../produsemeniu/produsemeniu.css';
import pui1 from '../../images/pui/pui1.jpg';
import dp1 from '../../images/product_details/pd1.jpg';
import dp2 from '../../images/product_details/pd2.webp';
import dp3 from '../../images/product_details/pd3.webp';
import dp4 from '../../images/product_details/pd4.png';
import dp5 from '../../images/product_details/pd5.webp';
import dp6 from '../../images/product_details/pd6.webp';
import dp7 from '../../images/product_details/pd7.webp';
import dp8 from '../../images/product_details/pd8.webp';


import React, { useState } from 'react';

export const McPuisorFresh = () => {

    const [closeInfoNutrition, setCloseInfoNutrition] = useState(false);

    const infoNutrition = () => {
        setCloseInfoNutrition(!closeInfoNutrition);
        setCloseInfoAlergeni(false);
    };

    const [closeInfoAlergeni, setCloseInfoAlergeni] = useState(false);

    const infoaAergeni = () => {
        setCloseInfoAlergeni(!closeInfoAlergeni);
        setCloseInfoNutrition(false);
    };


    return(
        <div className='body-independent-product'>
            <div className="menu-item-orientation">
                <div className='text-independent-product'>
                    <h1 className='big-title-product'>McPuișor Fresh</h1>
                    <p className='description-product-general'>Burger cu carne de pui și castraveți proaspeți</p>
                </div>
                <img src={pui1} alt='product-image-detail' />
            </div>
            <div className='background-ingredients'>
              <div className='ingredients'>
                  <h1>Ingrediente</h1>
                  <p className='description-ingredients'>{`McPuisor Fresh 130 g ℮
  Chiflă regular (50 g) (produs decongelat)[ faină albă de GRÂU (origine UE), apă, zahăr,  glazură (proteină vegetală (mazăre), dextroza)), ulei de floarea-soarelui, drojdie, sare iodată, faină fermentată din GRÂU,  ameliorator (emulsifiant: E472e, antioxidant: E300), enzime.). Poate conține SEMINȚE DE SUSAN] Carne de pui Junior (44 g), (din produs congelat) (dezosată, tocată, sarată, formată, acoperită cu pesmet, preprajită, coaptă și congelată rapid) [carne de pui 57% (carne de piept de pui, carne pulpa, piele de pui), făină de GRÂU, apa, ulei de floarea soarelui amidon din GRÂU, griș din GRU dur, sare, faina de porumb, pesmet (faina de GRAU, sare, agenti de afanare E503), ulei de rapita, drojdie, stabilizator: E450, extract de ardei rosu (E160c). Sos McChicken (apa, ulei rapita, dextroza, amidon din porumb modificat, otet, GALBENUS DE OU, sare, zahar, condimente (contine SEMINTE DE MUSTAR), extract de condimente, agent ingrosare E415), Salata iceberg, castravete proaspat, rosie.`}</p>
              </div>
            </div>
            <div className='drop-down-info'>
                <div className='product-information'>
                    <div className={!closeInfoNutrition?'info-nutrition':'info-nutrition-gray'} onClick={infoNutrition}>
                        <h2>Informații nutriționale</h2>
                    </div>
                    <div className={!closeInfoAlergeni?'info-alergeni':'info-alergeni-gray'} onClick={infoaAergeni}>
                        <h2>Alergeni</h2>
                    </div>
                </div>
                <div className={closeInfoNutrition?'info-details-nutrition':'info-details-nutrition-none'}>
                    <div className='align-x'>
                      <div className='exit-info-nutrition' onClick={infoNutrition}>
                          <div className='line-ext-one'></div>
                          <div className='line-ext-two'></div>
                      </div>
                    </div>
                    
                    <div className='container-inside-list1'>
                      <h4>Per produs</h4>
                      <div className='line-inside-nut'></div>
                      <div className='text-nutrition'>
                        <div className='left-nutrition-list'>
                          <div className='nuts'>Valoare Energetică (kJ/kcal): <span className='small-text-desc'>1071/255</span></div>
                          <div className='nuts'>Glucide(g):<span className='small-text-desc'> 41</span></div>
                          <div className='nuts'>Fibre(g):<span className='small-text-desc'> 2.7</span></div>
                          <div className='nuts'>Sare(g):<span className='small-text-desc'> 1.00</span></div>
                        </div>
                        <div className='right-nutrition-list'>
                          <div className='nuts'>Grasimi(g):<span className='small-text-desc'> 5.7 </span>din care: Acizi grasi saturati(g): <span className='small-text-desc'>0.6</span></div>
                          <div className='nuts'>din care Zaharuri (g):<span className='small-text-desc'>  6.4</span></div>
                          <div className='nuts'>Proteine(g):<span className='small-text-desc'> 8.2</span></div>
                          <div className='nuts'></div>
                        </div>
                      </div>
                    </div>
                    
                </div>
                <div className={closeInfoAlergeni?'info-details-alergeni':'info-details-alergeni-none'}>
                    
                  <div className='align-x'>
                      <div className='exit-info-alergeni' onClick={infoaAergeni}>
                          <div className='line-ext-one'></div>
                          <div className='line-ext-two'></div>
                      </div>
                  </div>
                  <div className='container-inside-list2'>
                    <div className='tittle-alergeni-inside-list'>
                      <h4>Alergeni</h4>
                    </div>
                      <div className='text-alergeni'>
                        <div className='left-alergeni-list'>
                          <div className='item-list-alergeni'>
                            <div className='alg'>Susan</div>
                            <div className='alg-bule'></div>
                          </div>
                          <div className='item-list-alergeni'>
                            <div className='alg'>Soia</div>
                            <div className='alg-bule'></div>
                          </div>
                          <div className='item-list-alergeni'>
                            <div className='alg'>Sulfiți</div>
                            <div className='alg-bule'></div>
                          </div>
                          <div className='item-list-alergeni'>
                            <div className='alg'>Muștar</div>
                            <div className='alg-bule'></div>
                          </div>
                          <div className='item-list-alergeni'>
                            <div className='alg'>Lapte</div>
                            <div className='alg-bule'></div>
                          </div>
                          <div className='item-list-alergeni'>
                            <div className='alg'>Gluten</div>
                            <div className='alg-bule'></div>
                          </div>
                          <div className='item-list-alergeni'>
                            <div className='alg'>Ouă</div>
                            <div className='alg-bule'></div>
                          </div>
                          <div className='item-list-alergeni'>
                            <div className='alg'>Țelină</div>
                            <div className='alg-bule'></div>
                          </div>
                          
                          
                        </div>
                        
                      </div>
                    </div>
                </div>
            </div>

            <div className='container-pd'>
              <div className='pd-item'>
                <img src={ dp1 } alt='detailed product' />
                <h2>Cheeseburger Fresh</h2>
              </div>
              <div className='pd-item'>
                <img src={ dp2 } alt='detailed product' />
                <h2>McCrispy®</h2>
              </div>
              <div className='pd-item'>
                <img src={ dp3 } alt='detailed product' />
                <h2>Deli Turkey cu ou</h2>
              </div>
              <div className='pd-item'>
                <img src={ dp4 } alt='detailed product' />
                <h2>Morning McPuișor®</h2>
              </div>
              <div className='pd-item'>
                <img src={ dp5 } alt='detailed product' />
                <h2>Meniu Quarter Pounder®</h2>
              </div>
              <div className='pd-item'>
                <img src={ dp6 } alt='detailed product' />
                <h2>Banana Bread</h2>
              </div>
              <div className='pd-item'>
                <img src={ dp7 } alt='detailed product' />
                <h2>Quarter Pounder®</h2>
              </div>
              <div className='pd-item'>
                <img src={ dp8 } alt='detailed product' />
                <h2>Filet-O-Fish®</h2>
              </div>
            </div>

        </div>
    )
}

    