// make sure to change links for each comp in navbar to return to the exact path
// dont forget to add  mobile link as well
// inside the ul  add classname with value if true, else set it to menu
// make navbar disappear when on mobile and get hamburger icon to drop down for resize
// create another link tag for the path /onclick for closeMobileMenu
// create a function =()=> to set click and check

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    }
   // passing an empty array to refresh mobile
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
         <nav className="navbar">
             <div className="navbar-container">
                 <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> 
                  <div>BOTTEGA</div> 
                  {/* <i class="fas fa-wine-glass-alt"></i> */}
                 </Link>
                 <div className='menu-icon' onClick={handleClick}>
                     <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                 </div>
                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                     <li className='nav-item'>
                         <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                             Home
                         </Link>
                     </li>
                     <li className='nav-item'>
                         <Link to='/Menu' className='nav-links' onClick={closeMobileMenu}>
                             Menu
                         </Link>
                     </li>
                     <li className='nav-item'>
                         <Link to='/About-Us' className='nav-links' onClick={closeMobileMenu}>
                             About Us
                         </Link>
                     </li>
                     {/* had to create another reservation button for mobile mode stretch */}
                     <li className='nav-item'>
                         <Link to='/Reservations' className='nav-links-mobile' onClick={closeMobileMenu}>
                             Reservations
                         </Link>
                     </li>
                     {/* had to create another reservation button for mobile mode stretch */}
                   </ul>
                   {button && <Button buttonStyle='btn--outline'>Reservations</Button>}
                 </div>
               </nav> 
        </>
    )
}

export default Navbar

