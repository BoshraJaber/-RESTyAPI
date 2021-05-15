import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'

// Header Component
const Header = ()=>{
    return (
      <header>
        <h1>RESTy</h1>
        <nav className="nav">
        <ul id="nav">
          <li>
            <NavLink exact to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink exact to="/history"> History  </NavLink>
          </li>
          <li>
            <NavLink to="/help"> Help </NavLink>
          </li>
          {/* <li>
            <NavLink to="/foo">
              Foo
             </NavLink>
          </li> */}
        </ul>
      </nav>
      </header>
    )
}

export default Header;