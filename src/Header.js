import React from 'react';
import { NavLink } from 'react-router-dom';

// Header Component
const Header = ()=>{
    return (
      <header>
        <h1>RESTy</h1>
        <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
             </NavLink>
          </li>
          <li>
            <NavLink to="/history">
            History (Via Render())
             </NavLink>
          </li>
          <li>
            <NavLink to="/help">
            Help
             </NavLink>
          </li>
          <li>
            <NavLink to="/foo">
              Foo
             </NavLink>
          </li>
        </ul>
      </nav>
      </header>
    )
}

export default Header;