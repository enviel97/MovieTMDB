import React from "react";
import { Link } from "react-router-dom";
import useFooterStyles from "./Footer.styles";
import bgFooter from "@assets/images/bgFooter.jpg";

const Footer = () => {
  const styles = useFooterStyles({ src: bgFooter });

  return (
    <footer className={`${styles.background} ${styles.footer}`}>
      <div className={`${styles.footerContent}`}>
        <div className='menus'>
          <div className='menu'>
            <h1 className='title'>Title</h1>
            <Link to='/'>Home</Link>
            <Link to='/'>Contact us</Link>
            <Link to='/'>Term of services</Link>
            <Link to='/'>About us</Link>
          </div>
          <div className='menu'>
            <h1 className='title'>Title</h1>
            <Link to='/'>Live</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Premium</Link>
            <Link to='/'>Private policy</Link>
          </div>
          <div className='menu'>
            <h1 className='title'>Title</h1>
            <Link to='/'>You must watch</Link>
            <Link to='/'>Recent release</Link>
            <Link to='/'>Top IMDB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
