import React, { useState, useEffect, useRef } from "react";
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setIsSearchDropdownOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
    <div className="header">
      <div className="header-center">
        <div className="logo-body">
          <img className='logo-icon' src='image/pngwing.com.png'/>
          <div className='logo-letter-first'>stack</div>
          <div className="logo-letter-second">overflow</div>
        </div>
        <div className="products-btn">
          Products
        </div>
        
        <div className="search-input" ref={searchInputRef}>
          <FontAwesomeIcon icon={faSearch} className="search-icon"/>
          <input
            className="search-field"
            type="text"
            placeholder="Search..."
            onClick={() => setIsSearchDropdownOpen(true)}
          />
          {isSearchDropdownOpen && <SearchDropdown />}
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


function SearchDropdown() {

  return ( 
        <div className="dropdown-body">
          <div className="triangle"></div>
          <div className="dropdown-section-first">
            <div className="left">
              <span>[tag]</span> search within a tag<br/>
              <span>user:1234</span> search by author<br/>
              <span>"words here"</span> exact phrase<br/>
              <span>collective:"Name"</span> collective content
            </div>
            <div className="right">
              <span>answers:0</span> unanswered questions<br/>
              <span>score:3</span> posts with a 3+ score<br/>
              <span>is:question</span> type of post<br/>
              <span>isaccepted:yes</span> search within status
            </div>
          </div>
          <div className="dropdown-section-second">
            <div className="ask-btn">Ask a question</div>
            <div className="search-help-btn">Search help</div>
          </div>
        </div>
  );
}

export { Header, SearchDropdown };
