import React from 'react';
import '../../App.css';
import axios from 'axios';

const uri = 'http://localhost:4000/menu/';

export default function Menu() {
    function submitMenu() {
        console.log('menu data submit');
        const menuData = {
            category: 'steaks',
            name: 'ribyeye',
            price: 38
        }
        axios.post(uri + 'add', menuData).then(res => console.log('menu add res', res));
    }

    return (<button type="button" onClick={submitMenu()}>Menu</button>);
}

// import React from 'react';
// import { Link } from 'react-router-dom';
// // import { FaFire } from 'FaFire';

// function Pricing() {
//     return (
//         // <IconContext.Provider value={{color: '#fff', size: 64}}>
//         <div>
//             <div className="pricing__section">
//                 <div className="pricing__wrapper">
//                     <h1 className="pricing__heading">Menu</h1>
//                     <div className="pricing__conatainer">
//                         <Link to="/sign-up"
//                         className='pricing__conatainer-card'>
//                             <div className='pricing__conatainer-cardInfo'>
//                                 <div className="icon">
//                                     {/* <FaFire /> */}
//                                     </div>
//                                     <h3>Bottega steak</h3>
//                                     <h4>$108</h4>
//                                     <p></p>
//                                     <ul className='pricing__conatianer-features'>
//                                         <li>choose sides</li>
//                                         <li>choose sides</li>
//                                         <li>choose sides</li>
//                                     </ul>
//                                     {/* <Button buttonSize='btn--wide' buttonColor='primary'>
//                                         Choose meal
//                                     </Button> */}

//                                 </div>
                            
//                         </Link>
                        
//                     </div>

//                 </div>
//             </div>
//         </div>
//         // </IconContext.Provider>
//     )
// }

// export default Pricing;