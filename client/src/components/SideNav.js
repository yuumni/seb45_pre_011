import React, { useState, useEffect } from "react";
import './SideNav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SideNav_Main() {

  return (
    <>
      <div className="sidebar-body">
        <div className="home-tab">Home</div>
        <div className='public-tab'>PUBLIC</div>
        <Link to='/' style={{textDecoration: 'none'}}>
          <div className="questions-tab-icon">
            <FontAwesomeIcon icon={faEarthAmericas} className="icon"/>
            <div className="questions-tab">Questions</div>
          </div>
        </Link>
        <div className="tags-tab">Tags</div>
        <div className="users-tab">Users</div>
        <div className="companies-tab">Companies</div>
      </div>
    </>
    
  );
}

export {SideNav_Main };
