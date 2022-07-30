import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFooterStyles from "./Footer.styles";
import bgFooter from "@assets/images/bgFooter.jpg";
import Line from "@components/Line";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import { Button, ButtonOutline } from "@components/Button";
import { Modal, ModalContent } from "@components/Modal";

const Footer = () => {
  const styles = useFooterStyles({ src: bgFooter });
  const [active, setActive] = useState(false);

  // go to other site
  const onHref = (href: string) => {
    if (!href) {
      setActive(true);
      return;
    }
    window.open(href, "_blank");
  };

  const onClose = () => setActive(() => false);

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
            <div className='btns'>
              <Button
                className={"btn"}
                onClick={() => onHref("")}
                mainColor='#1da1f2'
              >
                <BsTwitter />
              </Button>
              <ButtonOutline
                className={"btn"}
                onClick={() => onHref("https://github.com/enviel97/MovieTMDB")}
              >
                <BsGithub />
              </ButtonOutline>
              <Button
                className={"btn"}
                onClick={() => onHref("")}
                mainColor='#0d8af0'
              >
                <BsFacebook />
              </Button>
            </div>
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
      <Modal id='notice' active={active}>
        <ModalContent onClose={onClose}>
          This link is not available
        </ModalContent>
      </Modal>
    </footer>
  );
};

export default Footer;
