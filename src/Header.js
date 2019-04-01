import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header>
        <img
          className="headerImg"
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
          alt="problem"
        />
        <h1>Meme Generator</h1>
      </header>
    </div>
  );
};

export default Header;
