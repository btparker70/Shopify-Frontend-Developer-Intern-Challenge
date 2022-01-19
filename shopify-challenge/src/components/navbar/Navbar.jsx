import React from 'react';
import './navbar.css';
import logo from '../../assets/nasa-logo-web-rgb.png'

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#apod">APOD</a></p>
    <p><a href="#wgpt3">Mars Rover</a></p>
  </>
)

const Navbar = () => {

  return (
    <navbar className='navbar'>
    <div className="navbar-links">
      <div className="navbar-links_logo">
        <img style={{width: "70px"}} src={logo} alt="nasa logo"/>
      </div>
      <div className="navbar-links_container">
        <Menu />
      </div>
    </div>
    </navbar>
  )
}

export default Navbar;