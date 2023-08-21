import React from "react";
import './Mypage.css';

function Mypage() {

  return (
    <>
    <div className="myPage-wrapper">

      <div className="profile-board">
        <div className="profile-image"></div>
        <div className="profile-inform">
          <div className="user-name"></div>
          <div className="user-inform"></div>
        </div>
      </div>
      <div className="nav-tab-wrapper">
        <div className="nav-tab a"></div>
        <div className="nav-tab b"></div>
        <div className="nav-tab c"></div>
        <div className="nav-tab d"></div>
      </div>


    </div>
    
    </>
  );

}

export default Mypage;