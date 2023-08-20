import React from "react";
import './Footer.css'

function Footer({containerHeight}) {


  return (
    <>
      <div className="footer" >
        <img src='image/pngwing.com.png' className="a"/>
        <ul className="a">
          <li className="a">STACK OVERFLOW</li>
          <li className="a">Questions</li>
          <li className="a">Help</li>
        </ul>

        <ul className="a">
          <li className="a">PRODUCTS</li>
          <li className="a">Teams</li>
          <li className="a">Advertising</li>
          <li className="a">Collectives</li>
          <li className="a">Talent</li>
        </ul>

        <ul className="a">
          <li className="a">COMPANY</li>
          <li className="a">About</li>
          <li className="a">Press</li>
          <li className="a">Work Here</li>
          <li className="a">Legal</li>
          <li className="a">Privacy Policy</li>
          <li className="a">Terms of Service</li>
          <li className="a">Contact Us</li>
          <li className="a">Cookie Settings</li>
          <li className="a">Cookie Policy</li>
        </ul>

        <ul className="a">
          <li className="a">STACK EXCHANGE NETWORK</li>
          <li className="a">Technology</li>
          <li className="a">Culture & recreation</li>
          <li className="a">Life & arts</li>
          <li className="a">Science</li>
          <li className="a">Professional</li>
          <li className="a">Business</li>

          <li className="remote a">API</li>
          <li className="a">Data</li>
        </ul>

        <div className="sns-license-wrapper">

        <div className='sns'>
          <span className="span-sns">Blog </span>&nbsp;&nbsp;
          <span className="span-sns">Facebook </span>&nbsp;&nbsp;
          <span className="span-sns">Twitter </span>&nbsp;&nbsp;
          <span className="span-sns">LinkedIn </span> &nbsp;&nbsp;
          <span className="span-sns">Instagram </span>
        </div>

        <div className="license">
          Site design / logo © 2023 Stack Exchange Inc; user<br/>contributions licensed under <span>CC BY-SA</span>.<br/>rev 2023.8.18.43586
        </div>

        </div>
        

      </div>
    </>
  );
}

export default Footer;