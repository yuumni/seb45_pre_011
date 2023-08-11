import React from "react";
import '../css/Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {


  return (
    <>
    <div className="header">
      <div className="header-center">
        <div className="logo">
          <img className='logo-icon' src='image/pngwing.com.png'/>
          <div className='logo-letter-first'>stack</div>
          <div className="logo-letter-second">overflow</div>
        </div>
        <div className="products-btn">
          Products
        </div>
        
        <div className="search-input">
          <FontAwesomeIcon icon={faSearch} className="search-icon"/>
          <input className="search-field" type='text' placeholder="Search..."/>
        </div>
        
        <div className="log-in-btn">
          Log in
        </div>

        <div className="sign-up-btn">
          Sign up
        </div>

      </div>
    </div> 
    </>
  );
}

export default Header;
