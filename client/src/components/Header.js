import React from 'react';

function Header() {

    return (
        <div id="header-body">
            <span id="title">
                <img id="logo" src="../logo.png" alt="SOF_logo" />
            </span>
            <div id="search-box">검색창</div>
            <div id="account-box">
                <img id="account-logo" src="../logo.png" alt="account_logo" />
                <a href="https://www.naver.com">외부 링크</a>
            </div>
        </div>
    );
}

export default Header;