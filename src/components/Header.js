import React from 'react'
import "./Header.css";
import Logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';

export const Header=()=> {
  return (
    <header>
      <Link className='logo'>
        <img src={Logo} alt="Shop Mate" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items"><span>Cart: 2</span></Link>
    </header>
  )
}
