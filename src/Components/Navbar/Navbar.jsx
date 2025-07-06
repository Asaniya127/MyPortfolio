import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/saniya.svg';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const menuRef = useRef();
  const location = useLocation();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  return (
    <div className='navbar'>
      <img src={logo} alt='Logo' className='logo' />
      <img src={menu_open} onClick={openMenu} alt='Open Menu' className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt='Close Menu' className='nav-mob-close' />
        
        <li>
          <Link to='/' className='nav-link'>
            <p>Home</p>
          </Link>
          {location.pathname === '/' && <img src={underline} alt='underline' />}
        </li>
        <li>
          <Link to='/about' className='nav-link'>
            <p>About Me</p>
          </Link>
          {location.pathname === '/about' && <img src={underline} alt='underline' />}
        </li>
        {/* <li>
          <Link to='/services' className='nav-link'>
            <p>Services</p>
          </Link>
          {location.pathname === '/services' && <img src={underline} alt='underline' />}
        </li> */}
        <li>
          <Link to='/work' className='nav-link'>
            <p>Projects</p>
          </Link>
          {location.pathname === '/work' && <img src={underline} alt='underline' />}
        </li>
        <li>
          <Link to='/contact' className='nav-link'>
            <p>Contact</p>
          </Link>
          {location.pathname === '/contact' && <img src={underline} alt='underline' />}
        </li>
      </ul>
      <div className='nav-connect'>
        <Link className='nav-link' to='/contact'>Connect With Me</Link>
      </div>
    </div>
  );
};

export default Navbar;
