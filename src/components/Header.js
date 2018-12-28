import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="top-header">
    <div className="logo"><img className="fluid-img"  src="/i/logo.svg" /></div>
    <ul className="main-nav">
      <li><NavLink exact to='/' activeStyle={{background: 'tomato'}}>Home</NavLink></li>
      <li><NavLink exact to='/about' activeClassName='myActiveClass'>About</NavLink></li>
      <li><NavLink exact to='/teachers' activeClass='myActiveClass'>Teachers</NavLink></li>
      <li><NavLink exact to='/courses' activeClass='myActiveClass'>Courses</NavLink></li>
    </ul>    
  </header>
);

export default Header;