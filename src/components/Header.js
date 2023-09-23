import { useState, useEffect } from "react";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Event Calender</li>
          <li>Media</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
