import React, { useState, useRef, useEffect } from 'react';
import { NavLink,Link } from "react-router-dom";
import { Button} from 'react-bootstrap'
import { FaBars } from 'react-icons/fa';
import { links} from './data';
import logo from '../logo.png';
import logo2 from '../AUM.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <NavLink to={url}>
                  <li key={id}>
                  <a href={url}>{text}</a>
                </li>
                </NavLink>
              );
            })}
          </ul>
        </div>
        <div className='login'>
            <button className='btn'>
          <Link className="nav-link" to="signup" >Sign up</Link>
          </button>
          <button className='btn' >
            <Link className="nav-link" to="login" >Login</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
