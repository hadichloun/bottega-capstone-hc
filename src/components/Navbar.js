import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
         <nav className="navbar">
             <div className="navbar-container">
                 <Link to="/" className="navbar-logo"> 
                     Bottega's Grill <i class="fas fa-fire-alt"></i><i class="fas fa-fire"></i><i class="fas fa-circle-notch"></i><i class="fas fa-spinner"></i>
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
                         <Link to='/About Us' className='nav-links' onClick={closeMobileMenu}>
                             About Us
                         </Link>
                     </li>
                     <li className='nav-item'>
                         <Link to='/reservation' className='nav-links-mobile' onClick={closeMobileMenu}>
                             reservation
                         </Link>
                     </li>
                   </ul>
                 </div>
               </nav> 
        </>
    )
}

export default Navbar
