const Header = () => {
  return (
    <div id="header">
      <div id="logo">
        <h1 id="one">AICTE-IDEA_LAB</h1>
        <h1 id="two">JISCE</h1>
      </div>
      <div className="menu_links">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Event Calender</li>
          <li>Media</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="login">
        <button>Login / Register</button>
      </div>
    </div>
  );
};

export default Header;
