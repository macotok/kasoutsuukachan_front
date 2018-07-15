import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="m-list02">
    <ul className="m-list02-listBlock">
      <li className="m-list02-list">
        <Link to="/about" className="m-list02-link">
          このサイトについて
        </Link>
      </li>
      <li className="m-list02-list">
        <Link to="/terms" className="m-list02-link">
          利用規約
        </Link>
      </li>
      <li className="m-list02-list">
        <Link to="/contact" className="m-list02-link">
          お問い合わせ
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
