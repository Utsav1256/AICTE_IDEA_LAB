import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleDocumentClick = (e) => {
    if (!e.target.matches("#header, #toggle")) {
      setIsActive(false);
    }
  };

  const handleToggleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    // Clean up the event listener when the component unmounts
    // return () => {
    //   document.removeEventListener("click", handleDocumentClick);
    // };
  }, []);
  return (
    <div id="header">
      <div id="logo">
        <h1 id="one">AICTE-IDEA_LAB</h1>
        <h1 id="two">JISCE</h1>
      </div>
      <div
        id="toggle"
        className={isActive ? "active" : ""}
        onClick={handleToggleClick}
      ></div>

      <div id="menu_links" className={isActive ? "active" : ""}>
        <ul>
          <li>
            <Link id="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link id="link" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link id="link" to="/event-calender">
              Event Calender
            </Link>
          </li>
          <li>
            <Link id="link" to="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link id="link" to="/contact-us">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
