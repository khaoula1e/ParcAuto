import React, { useState, useRef, useEffect } from 'react';
import { NavLink,Link,useNavigate } from "react-router-dom";
import { Button} from 'react-bootstrap'
import { FaBars } from 'react-icons/fa';
import { auth } from '../firebase-config';

import { links} from './data';
import logo from '../logo.png';
import logo2 from '../AUM.svg'

function Navbar (props)  {
  const admin = 'CvCsGXFQbdY9a7p2vtWQbY7Bdrh1';
  const navigate = useNavigate();
  const user = auth.currentUser;
   console.log(user);
   const nav=useNavigate();
   const logout=()=>{
    auth.signOut().then(()=>{
      nav("/login", { replace: true });

    })
  }
  
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
        {user==null&& <>
      <div className='login'>
            <button className='btn'>
          <Link className="nav-link" to="signup" >Sign up</Link>
          </button>
          <button className='btn' >
            <Link className="nav-link" to="login" >Login</Link>
          </button>
        </div>
    </>}
    {user!=null &&
<>
  <div className='login'>
      <Button variant="primary" onClick={logout}>
          Log out
        </Button>
        </div>
</>
}

    
        </div>
      </div>
    </nav>
  );
};

export default Navbar;