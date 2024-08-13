import ronaldMcd from './produse/images/happyminion/ronaldMcd.jpg';
import './produse/css/happyminion.css';

export const Ronaldprogramm = () => {


    const ronaldMobile = {
        data: ['1 iunie 2024', '6 iunie 2024', 
            '7 iunie 2024', '8 iunie 2024', 
            '9 iunie 2024', '11 iunie 2024', 
            '12 iunie 2024', '13 iunie 2024', 
            '15 iunie 2024', '16 iunie 2024',
            '18 iunie 2024', '19 iunie 2024',
            '20 iunie 2024', '21 iunie 2024',
            '22 iunie 2024', '29 iunie 2024', 
            '30 iunie 2024'
            ],
        ora: ['07.30', '12.00', '14.00', '16.00',
            '18.00', '17.00', '19.00', '14.00', '17.00',
            '19.00', '11.00', '13.00', '16.00', '12.00',
            '16.00', '18.00', '12.00', '17.00', '19.00',
            '17.00', '13.00', '17.00', '17.00', '11.00',
            '13.00', '18.00', '13.00', '18.00', '12.00',
            '16.00', '18.00', '16.00', '18.00', '12.00', 
            '14.00', '16.00', '18.00', '12.00', '17.00',
            '11.00', '13.00', '12.00', '15.00'
            ],
        restaurant: ['PROGRAMUL COMPLET', 'ROMANA', 'BRINCOVEANU', 
            'BERCENI', 'BRAGADIRU', 
            'RAHOVA', 'RM VALCEA DRIVE THRU', 
            'RM VALCEA MALL', 'PITESTI DRIVE THRU NORD', 
            'PITESTI DRIVE THRU GARA', 'PITESTI MALL', 
            'BRASOV DRIVE THRU', 'BRASOV IN STORE', 
            'BRASOV CORESI', 'ALBA IULIA', 
            'SIBIU SELIMBAR', 'SIBIU IN STORE', 
            'SLATINA', 'CRAIOVA MALL', 
            'CRAIOVA DRIVE THRU', 
            'CRAIOVA PROMENADA', 'DORBETTA-TURNU SEVERIN', 
            'TÂRGU JIU', 'TÂRGU MUREȘ', 
            'CLUJ DRIVE THRU', 'CLUJ IN STORE', 
            'ZALĂU', 'SATU MARE', 'BAIA MARE', 
            'ORADEA IN STORE', 'ORADEA DRIVE THRU', 
            'ORADEA LACUL ROȘU', 'ARAD IN STORE', 
            'ARAD DRIVE THRU', 'TM IN STORE', 'TM DUMBRĂVIȚA', 
            'TM CIRC', 'TM DRIVE THRU', 
            'TM MALL', 'DEVA', 'ORHIDEEA', 
            'VIRTUȚII', 'PROGRESULUI', 'SUN PLAZA'
            ]
    }

 
    return(
        <>
        <img src={ronaldMcd} alt='happy meal' id='ronald-large' />
        <h1 className='heading-minions'>PROGRAMARE SHOW RONALD LUNA IUNIE  2024</h1>
        <h2 className='heading-minions'>Micuțului tău i-a fost dor de veselul Ronald McDonald®? A venit timpul să se reîntâlnească!</h2>
        <div className='ronald-calendat'>


        <table className='ronald-desktop'>
            <thead>
                <tr>
                    <th>Luni</th>
                    <th>Marți</th>
                    <th>Miercuri</th>
                    <th>Joi</th>
                    <th>Vineri</th>
                    <th>Sâmbătă</th>
                    <th>Duminică</th>
                </tr>
            </thead>
            <tbody>
                <tr className='bold-table'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        Romana 07:30<br />
                        Brincoveanu 12:00<br />
                        Berceni 14:00<br />
                        Bragadiru<br />
                        Rahova 18:00
                    </td>
                    <td></td>
                </tr>
                <tr className='bold-table'>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        RM Valcea Drive Thru 17:00<br />
                        RM Valcea Mall 19:00
                    </td>
                    <td>
                        Pitesti Drive Thru Nord 14:00<br />
                        Pitesti Drive Thru Gara 17:00<br />
                        Pitesti Mall 19:00
                    </td>
                    <td>
                        Brasov Drive Thru 14:00<br />
                        Brasov In Store 13:00<br />
                        Brasov Coresi 16:00
                    </td>
                    <td>
                        Alba Iulia 12:00<br />
                        Sibiu Selimbar 16:00<br />
                        Sibiu In Store 18:00
                    </td>
                </tr>
                <tr className='bold-table'>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        Slatina 12:00<br />
                        Craivoa Mall 17:00<br />
                        Craivoa Drive Thru 19:00
                    </td>
                    <td>
                        Craivoa Promenada 17:00
                    </td>
                    <td>
                        Dorbeta-Turnu Severin 13:00<br />
                        Targu Jiu 17:00
                    </td>
                    <td></td>
                    <td>
                        Targu Mures 17:00
                    </td>
                    <td>
                        Cluj Drive Thru 11:00<br />
                        Cluj In Store 13:00<br />
                        Zalau 18:00
                    </td>
                </tr>
                <tr className='bold-table'>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>
                        Satu Mare 13:00<br />
                        Baia Mare 18:00
                    </td>
                    <td>
                        Oradea In Store 12:00<br />
                        Oradea Drive Thru 16:00<br />
                        Oradea Lacul Rosu 18:00
                    </td>
                    <td></td>
                    <td>
                        Arad In Store 16:00<br />
                        Arad Drive Thru 18:00
                    </td>
                    <td>
                        TM In Store 12:00<br />
                        TM Dumbravita 14:00<br />
                        TM Circ 16:00<br />
                        TM Drive Thru 18:00
                    </td>
                    <td>
                        TM Mall 12:00<br />
                        Deva 17:00
                    </td>
                    <td></td>
                </tr>
                <tr className='bold-table'>
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        Orhideea 11:00<br />
                        Virtutii 13:00
                    </td>
                    <td>
                        Progresului 12:00<br />
                        Sun Plaza 15:00
                    </td>
                </tr>
            </tbody>
        </table>


        <table className='ronald-mobile'>
            
            <tbady>
                <thead>
                    <tr>
                        <th className='par-rnd'>Data</th>
                        <th className='par-rnd'>Ora</th>
                        <th className='par-rnd'>Restaurant</th>
                    </tr>
                </thead>
                <tr>
                    <td></td>
                    <td></td>
                    <td id='program-align-especialy'>{ronaldMobile.restaurant[0]}</td>
                </tr>
                <tr>
                    <td><p className='par-rnd'>{ronaldMobile.data[0]}</p></td>
                    <td>
                        <div className='rndright rndbtn'>{`${ronaldMobile.ora[0]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[1]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[2]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[3]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[4]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[5]}`}</div>
                    </td>
                    <td>
                        <div className='rndbtn'>{ronaldMobile.restaurant[1]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[2]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[3]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[4]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[5]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[6]}</div>
                    </td>
                </tr>
                <tr>
                    <td><p className='par-rnd'>{ronaldMobile.data[1]}</p></td>
                    <td>
                        <div className='rndbtn'>{`${ronaldMobile.ora[6]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[7]}`}</div>
                       
                    </td>
                    <td>
                        <div className='rndbtn'>{ronaldMobile.restaurant[1]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[2]}</div>
                    </td>
                </tr>
                <tr>
                    <td><p className='par-rnd'>{ronaldMobile.data[2]}</p></td>
                    <td>
                        <div className='rndright rndbtn'>{`${ronaldMobile.ora[8]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[9]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[10]}`}</div>
                    </td>
                    <td>
                        <div className='rndbtn'>{ronaldMobile.restaurant[1]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[2]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[3]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[4]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[5]}</div>
                    </td>
                </tr>
                <tr>
                    <td><p className='par-rnd'>{ronaldMobile.data[3]}</p></td>
                    <td>
                        <div className='rndright rndbtn'>{`${ronaldMobile.ora[11]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[12]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[13]}`}</div>
                    </td>
                    <td>
                        <div className='rndbtn'>{ronaldMobile.restaurant[1]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[2]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[3]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[4]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[5]}</div>
                    </td>
                </tr>
                <tr>
                    <td><p className='par-rnd'>{ronaldMobile.data[4]}</p></td>
                    <td>
                        <div className='rndright rndbtn'>{`${ronaldMobile.ora[14]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[15]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[16]}`}</div>
                    </td>
                    <td>
                        <div className='rndbtn'>{ronaldMobile.restaurant[7]}</div>
                    
                    </td>
                </tr>
                <tr>
                    <td><p className='par-rnd'>{ronaldMobile.data[5]}</p></td>
                    <td>
                        <div className='rndright rndbtn'>{`${ronaldMobile.ora[25]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[26]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[27]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[28]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[29]}`}</div>
                    </td>
                    <td>
                        <div className='rndbtn'>{ronaldMobile.restaurant[1]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[2]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[3]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[4]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[5]}</div>
                    </td>
                </tr>
                <tr>
                    <td><p className='par-rnd'>{ronaldMobile.data[6]}</p></td>
                    <td>
                        <div className='rndright rndbtn'>{`${ronaldMobile.ora[30]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[31]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[32]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[33]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[34]}`}</div>
                    </td>
                    <td>
                        <div className='rndbtn'>{ronaldMobile.restaurant[1]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[2]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[3]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[4]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[5]}</div>
                    </td>
                </tr>
                <tr>
                    <td><p className='par-rnd'>{ronaldMobile.data[7]}</p></td>
                    <td>
                        <div className='rndright rndbtn'>{`${ronaldMobile.ora[35]}`}</div>
                    </td>
                    <td>
                        <div className='rndbtn'>{ronaldMobile.restaurant[1]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[2]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[3]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[4]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[5]}</div>
                    </td>
                </tr>
                <tr>
                    <td><p className='par-rnd'>{ronaldMobile.data[8]}</p></td>
                    <td>
                        <div className='rndright rndbtn'>{`${ronaldMobile.ora[40]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[41]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[42]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[43]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[44]}`}</div>
                    </td>
                    <td>
                        <div className='rndbtn'>{ronaldMobile.restaurant[1]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[2]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[3]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[4]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[5]}</div>
                    </td>
                </tr>
                <tr>
                    <td><p className='par-rnd'>{ronaldMobile.data[9]}</p></td>
                    <td>
                        <div className='rndright rndbtn'>{`${ronaldMobile.ora[0]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[1]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[2]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[3]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[4]}`}</div>
                    </td>
                    <td>
                        <div className='rndbtn'>{ronaldMobile.restaurant[1]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[2]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[3]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[4]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[5]}</div>
                    </td>
                </tr>
                <tr>
                    <td><p className='par-rnd'>{ronaldMobile.data[10]}</p></td>
                    <td>
                        <div className='rndright rndbtn'>{`${ronaldMobile.ora[0]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[1]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[2]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[3]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[4]}`}</div>
                    </td>
                    <td>
                        <div className='rndbtn'>{ronaldMobile.restaurant[1]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[2]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[3]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[4]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[5]}</div>
                    </td>
                </tr>
                <tr>
                    <td><p className='par-rnd'>{ronaldMobile.data[11]}</p></td>
                    <td>
                        <div className='rndright rndbtn'>{`${ronaldMobile.ora[0]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[1]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[2]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[3]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[4]}`}</div>
                    </td>
                    <td>
                        <div className='rndbtn'>{ronaldMobile.restaurant[1]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[2]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[3]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[4]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[5]}</div>
                    </td>
                </tr>
                <tr>
                    <td><p className='par-rnd'>{ronaldMobile.data[12]}</p></td>
                    <td>
                        <div className='rndright rndbtn'>{`${ronaldMobile.ora[0]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[1]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[2]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[3]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[4]}`}</div>
                    </td>
                    <td>
                        <div className='rndbtn'>{ronaldMobile.restaurant[1]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[2]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[3]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[4]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[5]}</div>
                    </td>
                </tr>
                <tr>
                    <td><p className='par-rnd'>{ronaldMobile.data[13]}</p></td>
                    <td>
                        <div className='rndright rndbtn'>{`${ronaldMobile.ora[0]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[1]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[2]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[3]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[4]}`}</div>
                    </td>
                    <td>
                        <div className='rndbtn'>{ronaldMobile.restaurant[1]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[2]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[3]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[4]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[5]}</div>
                    </td>
                </tr>
                <tr>
                    <td><p className='par-rnd'>{ronaldMobile.data[14]}</p></td>
                    <td>
                        <div className='rndright rndbtn'>{`${ronaldMobile.ora[0]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[1]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[2]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[3]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[4]}`}</div>
                    </td>
                    <td>
                        <div className='rndbtn'>{ronaldMobile.restaurant[1]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[2]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[3]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[4]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[5]}</div>
                    </td>
                </tr>
                <tr>
                    <td><p className='par-rnd'>{ronaldMobile.data[15]}</p></td>
                    <td>
                        <div className='rndright rndbtn'>{`${ronaldMobile.ora[0]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[1]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[2]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[3]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[4]}`}</div>
                    </td>
                    <td>
                        <div className='rndbtn'>{ronaldMobile.restaurant[1]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[2]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[3]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[4]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[5]}</div>
                    </td>
                </tr>
                <tr>
                    <td><p className='par-rnd'>{ronaldMobile.data[16]}</p></td>
                    <td>
                        <div className='rndright rndbtn'>{`${ronaldMobile.ora[0]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[1]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[2]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[3]}`}</div>
                        <div className='alignrnd rndright'>{`${ronaldMobile.ora[4]}`}</div>
                    </td>
                    <td>
                        <div className='rndbtn'>{ronaldMobile.restaurant[1]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[2]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[3]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[4]}</div>
                        <div className='alignrnd'>{ronaldMobile.restaurant[5]}</div>
                    </td>
                </tr>
             

            </tbady>

        </table>
            
        </div>

        </>
    )
}