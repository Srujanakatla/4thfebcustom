// import React from "react";
// import "./header.css";

// const Header = () => {
//   return <header className="header">Header Section</header>;
// };

// export default Header;


import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MyWebsite</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

