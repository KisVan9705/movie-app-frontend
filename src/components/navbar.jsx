import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, signOut } from "../utils/authentication";

function Navbar() {
  const navigate = useNavigate();
  function signOut() {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <nav className='navbar'>
      <a href='/' className='navbar-brand'>
        <img src='./src/assets/imdb_logo.png' alt='IMDB Logo' />
        <span className='navbar-title'>IMDb</span>
      </a>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <a href='/' className='nav-link'>
            Movies & TV
          </a>
        </li>
        <li className='nav-item'>
          <a href='/' className='nav-link'>
            Celebs
          </a>
        </li>
        <li className='nav-item'>
          <a href='/' className='nav-link'>
            TV Shows
          </a>
        </li>
        <li className='nav-item'>
          <a href='/' className='nav-link'>
            News & Awards
          </a>
        </li>
        <li className='nav-item'>
          <a href='/' className='nav-link'>
            <i className='fas fa-search'></i>
          </a>
        </li>
      </ul>
      {!isAuthenticated() ? (
        <Link to='/login' className='navbar-user'>
          <i className='fas fa-user'></i>

          <span>Sign In</span>
        </Link>
      ) : (
        <Link className='navbar-user' onClick={signOut}>
          <i className='fas fa-user'></i>

          <span>Sign Out</span>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
