import React from "react";
import { Link } from "react-router-dom";
import useFooterStyles from "./Footer.styles";
import bgFooter from "@assets/images/bgFooter.jpg";
import Line from "@components/Line";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import { Button } from "@components/Button";
const IconsList = () => {
  const onHref = (href: string) => {
    window.location.href = href;
  };

  return (
    <div className='btns'>
      <Button className={"btn"} onClick={() => onHref("")} mainColor='#1da1f2'>
        <BsTwitter />
      </Button>
      <Button className={"btn"} onClick={() => onHref("")} mainColor='#000000'>
        <BsGithub />
      </Button>
      <Button className={"btn"} onClick={() => onHref("")} mainColor='#0d8af0'>
        <BsFacebook />
      </Button>
    </div>
  );
};

const Footer = () => {
  const styles = useFooterStyles({ src: bgFooter });

  return (
    <footer className={`${styles.background} ${styles.footer}`}>
      <div className={`${styles.footerContent}`}>
        <div className='menus'>
          <div className='menu left'>
            <>
              <h1 className='title'>About Us</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatum ad veniam hic dolorum velit, reiciendis quo officia
                dicta voluptas sunt cupiditate fugiat quia aspernatur eum, alias
                quam doloremque ex consectetur?
              </p>
            </>
            <Line>Social</Line>
            <IconsList />
          </div>
          <div className='menu right'>
            <h1 className='title'>Useful link</h1>
            <Link to='/'>Home</Link>
            <Link to='/'>Contact us</Link>
            <Link to='/'>Term of services</Link>
          </div>
          <div className='menu right'>
            <h1 className='title'>Feature</h1>
            <Link to='/'>Live</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Premium</Link>
            <Link to='/'>Private policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
