import React from 'react'
import './navbar.css'


import { useState, useRef } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {

  const navRef = useRef();

    const showNavbar = () => {
         navRef.current.classList.toggle('responsive_nav');
     }

  const [activeNav, setActiveNav] = useState('#');      

  const [isNavShow, setIsNavShow] = useState(false);

  return (
    
		<header className='container navbar'>
		<a href='/home' className="logo">
          <h2>Askerine <br /> Foundation</h2>
        </a>
			<nav className='nav-items' ref={navRef}>
				<a href="/home">About Me</a>
				<a href="/visa">Careers</a>	
				<a href="/blog">Blog</a>			
        		
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaRegWindowClose />
				</button>
			</nav>
      <a href='' className="btn boton">Donate</a>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBarsStaggered />
			</button>
	</header>
	
   
  )
}

export default Navbar