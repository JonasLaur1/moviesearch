import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBox from './SearchBox';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure this import is at the top if not already in index.js or App.js

const Header = ({ searchValue, setSearchValue }) => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MovieApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">Favorites</Link>
            </li>
          </ul>
          {location.pathname === '/' && (
            <div className="d-flex ms-auto">
              <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
