import React from 'react';

import './header.css';

const Header = ({ onServiseChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="null">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="null">People</a>
        </li>
        <li>
          <a href="null">Planets</a>
        </li>
        <li>
          <a href="null">Starships</a>
        </li>
      </ul>
      <button 
          onClick={onServiseChange}
          className="btn btn-primary btn-sm">
        Change Sesvise
      </button>
    </div>
  );
};

export default Header;