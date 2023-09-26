import React from "react";
// import logo from "../images/logo.png";
// import idealogo from "../images/idealablogo.png";
import "./css/Footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="contain">
        <div className="column">
          <div className="f-heading">
            <h2>Contact Us</h2>
          </div>
          <div className="f-content">
            <ul>
              <li>
                <a href="#" className="fa">
                  <small>
                    Block A, Phase III,
                    <br />
                    Kalyani, Nadia - 741235, West Bengal
                  </small>
                </a>
              </li>
              <li>
                <a href="#" className="fa">
                  <small>www.jiscollege.ac.in</small>
                </a>
              </li>
              <li>
                <a href="#" className="fa">
                  <small>033 2580 8640 / 033 2580 8560</small>
                </a>
              </li>
              <li>
                <a href="#" className="fa">
                  <small>info.jiscollege@jisgroup.org</small>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="column">
          <div className="f-heading">
            <h2>Explore Us</h2>
          </div>
          <div className="f-content">
            <ul>
              <li>
                <a href="#" className="fa">
                  <small>Required Value</small>
                </a>
              </li>
              <li>
                <a href="#" className="fa">
                  <small>Required Value</small>
                </a>
              </li>
              <li>
                <a href="#" className="fa">
                  <small>Required Value</small>
                </a>
              </li>
              <li>
                <a href="#" className="fa">
                  <small>Required Value</small>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="column">
          <div className="f-heading">
            <h2>Labs</h2>
          </div>
          <div className="f-content">
            <ul>
              <li>
                <a href="#" className="fa">
                  <small>Required Value</small>
                </a>
              </li>
              <li>
                <a href="#" className="fa">
                  <small>Required Value</small>
                </a>
              </li>
              <li>
                <a href="#" className="fa">
                  <small>Required Value</small>
                </a>
              </li>
              <li>
                <a href="#" className="fa">
                  <small>Required Value</small>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="column">
          <div className="f-heading">
            <h2>Our Socials</h2>
          </div>
          <div className="f-content" id="social">
            <ul>
              <li>
                <a href="#" className="fa">
                  <i class="bx bxl-facebook bx-border-circle"></i>
                </a>
                <small>Facebook</small>
              </li>
              <li>
                <a href="#" className="fa">
                  <i class="bx bxl-instagram bx-border-circle"></i>
                </a>
                <small>Instagram</small>
              </li>
              <li>
                <a href="#" className="fa">
                  <i class="bx bxl-twitter bx-border-circle"></i>
                </a>
                <small>Twitter</small>
              </li>
              <li>
                <a href="#" className="fa">
                  <i class="bx bxl-linkedin bx-border-circle"></i>
                </a>
                <small>LinkedIn</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
