import React, { RefObject, useEffect, useRef } from "react";
import headerStyles from "./header.styles";
import Logo from "@assets/images/logo/logo_dark.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const shrink = "shrink";
const scroll = "scroll";

const headerNavItem: HeaderNavItem[] = [
  { display: "Home", path: "/" },
  { display: "Movies", path: "/movie" },
  { display: "TV Series", path: "/tv" },
];

const _shrinkHeader = (ref: RefObject<HTMLDivElement>) => {
  const { body, documentElement } = document;
  if (body.scrollTop > 100 || documentElement.scrollTop > 100) {
    ref.current?.classList.add(shrink);
  } else {
    ref.current?.classList.remove(shrink);
  }
};

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef<HTMLDivElement>(null);
  const active = headerNavItem.findIndex((e) => e.path === pathname);
  const styles = headerStyles();

  useEffect(() => {
    const event = () => _shrinkHeader(headerRef);
    window.addEventListener(scroll, event);
    return () => window.removeEventListener(scroll, event);
  }, []);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.headerWrap}>
        <Link className={styles.logo} to='/'>
          <img src={Logo} alt='#Logo' />
        </Link>

        <ul className={styles.headerNav}>
          {headerNavItem.map((props, index) => (
            <li
              key={props.display}
              className={active === index ? "active" : ""}
            >
              <Link to={props.path}>{props.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
