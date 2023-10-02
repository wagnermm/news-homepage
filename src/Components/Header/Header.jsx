import React from 'react';
import { useState } from 'react';
import './Header.css';
import Logo from '../Images/logo.svg';

const Header=()=> {
    const [active, setActive] = useState("nav-mobile");
    const [toggleIcon, setToggleIcon] = useState("btn-mobile");
    const navToggle = ()=> { 
        active === 'nav-mobile' ? setActive('nav-mobile nav-active') : setActive('nav-mobile');
        toggleIcon === 'btn-mobile' ? setToggleIcon('btn-mobile toggle') : setToggleIcon('btn-mobile');
      };
    const [close, setClose] = useState("close-menu");
    const closeMenu=()=> {
        close === "menu-close" ? setClose('menu-close nav__active') : setClose("menu-close");
        active === 'nav-mobile' ? setActive('nav-mobile nav-active') : setActive('nav-mobile');
        toggleIcon === 'btn-mobile' ? setToggleIcon('btn-mobile toggle') : setToggleIcon('btn-mobile');
      }
    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="logo"/>
            </div>
            <nav className="nav-bar">
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="#news">New</a></li>
                    <li><a href="#popular">Popular</a></li>
                    <li><a href="#trending">Trending</a></li>
                    <li><a href="#categories">Categories</a></li>
                </ul>
            </nav>
            <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
            <nav className={active}>
                <div onClick={closeMenu} className="close-menu">X</div>
                <ul className={close}>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="#news">New</a></li>
                    <li><a href="#popular">Popular</a></li>
                    <li><a href="#trending">Trending</a></li>
                    <li><a href="#categories">Categories</a></li>
                </ul>   
            </nav>
        </div>  
        )
    }
export default Header