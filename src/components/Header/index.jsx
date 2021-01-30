import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink to="/contato">Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
}
