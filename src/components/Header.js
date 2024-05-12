import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdShoppingCart, MdLockOpen, MdOutlineShoppingCart } from "react-icons/md";

const Header = ({ cart }) => {
  const location = useLocation();
  const [scroll, setScroll] = useState(false);

  // 현재 경로를 확인하여 헤더 스타일 결정
  const getHeaderStyle = () => {
    return location.pathname === '/' ? 'header-main' : '';
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${getHeaderStyle()}`}>
      <div className="header-inner">
        <Link to="/" className='logo'>
          <img src={process.env.PUBLIC_URL + "./images/Header/logo.svg"} alt="logo" />
        </Link>
        <div className='nav'>
          <Link to="/look-book">LOOKBOOK</Link>
          <Link to="/outer">OUTER</Link>
          <Link to="/other">OTHER</Link>
          <Link to="/member">MEMBER</Link>
        </div>
        <div className="user-info">
          <Link to="/login">LOGIN</Link>
          <Link>
            JOIN US
            <span className='join-point-icon' style={{backgroundImage: 'url(/images/Header/join-us-ani.png)'}}>+3,000KRW</span>
          </Link>
          <Link to="/cart"><MdShoppingCart /> {cart}</Link>
        </div>
      </div>
      <div className={`mobile-ver ${scroll ? 'scroll' : ''}`}>
        <Link to="/login"><MdLockOpen className='MdLockOpen'/></Link>
        <Link to="/cart"><MdOutlineShoppingCart className='MdOutlineShoppingCart'/><span>{cart}</span></Link>
      </div>
    </div>
  );
};

export default Header;