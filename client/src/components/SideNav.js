import React, { useState, useEffect } from "react";
import './SideNav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

function SideNav() {
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    // 다른 곳 클릭 시 activeTab을 null로 설정하여 스타일 제거
    const handleClickOutside = (event) => {
      if (activeTab && event.target.classList.contains("tab")) {
        setActiveTab(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="sidebar-body">
      <div
        className={`home-tab ${activeTab === "home" ? "active" : ""}`}
        onClick={() => handleTabClick("home")}
      >
        Home
      </div>
      <div
        className={`public-tab ${activeTab === "public" ? "active" : ""}`}
        onClick={() => handleTabClick("public")}
      >
        PUBLIC
      </div>
      <div
        className={`questions-tab-icon ${activeTab === "questions" ? "active" : ""}`}
        onClick={() => handleTabClick("questions")}
      >
        <FontAwesomeIcon icon={faEarthAmericas} className="icon"/>
        <div 
          className={`questions-tab ${activeTab === "questions" ? "active" : ""}`}
          onClick={() => handleTabClick("questions")}
        >Questions</div>
      </div>
      <div
        className={`tags-tab ${activeTab === "tags" ? "active" : ""}`}
        onClick={() => handleTabClick("tags")}
      >
        Tags
      </div>
      <div
        className={`users-tab ${activeTab === "users" ? "active" : ""}`}
        onClick={() => handleTabClick("users")}
      >
        Users
      </div>
      <div
        className={`companies-tab ${activeTab === "companies" ? "active" : ""}`}
        onClick={() => handleTabClick("companies")}
      >
        Companies
      </div>
    </div>
  );
}

export default SideNav;
