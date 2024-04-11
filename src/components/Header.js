import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = ({ userName }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <header className={isScrolled ? "header isScrolled" : "header"}>
      <div className='headerBar'>
        <div className='headerLeft'>
          <div className='goHome'>
            <Link to='/'>Home</Link>
          </div>
        </div>
        <div className='headerCenter'>
          <Link to='/PortfolioPage'>{userName}의 포트폴리오</Link>
        </div>
        <div className='headerRight'>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
