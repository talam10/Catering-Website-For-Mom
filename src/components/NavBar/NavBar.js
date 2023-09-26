import React, {useState} from 'react'

import {Link, NavLink} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../../assets/Pitha/logo.png'
import './navbar.css'

const NavBar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    }

  return (
    <div className='header'>
        <div className='container'>
            <div className='nav-bar'>
                <Link to="/">
                  <img src={logo} alt="logo" width={95} />
                </Link>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li onClick={handleClick}>
                        <NavLink className="nav-link" to="/"> Home </NavLink>
                    </li>

                    <li onClick={handleClick}>
                        <NavLink className="nav-link" to="/menu"> Menu </NavLink>
                    </li>

                    <li onClick={handleClick}>
                        <NavLink className="nav-link" to="delivery/"> Delivery </NavLink>
                    </li>

                    <li onClick={handleClick}>
                        <NavLink className="nav-link" to="/about"> About </NavLink>
                    </li>

                    <li onClick={handleClick}>
                        <NavLink className="nav-link" to="/contact"> Contact </NavLink>
                    </li>

                    <li onClick={handleClick}>
                        <button> Order Now </button>
                    </li>
                </ul>

                <div className="menuIcon" onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color:"#ffff"}} />) : (<FaBars size={20} style={{color:"#ffff"}} />)}

                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar




