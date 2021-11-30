import React, { useRef, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [menu, setMenu] = useState("navLinksToggleNone");
  const [menuIcon, setMenuIcon] = useState(true);

  const menuToggle = () => {
    menu === "navLinksToggleNone"
      ? setMenu("navLinksToggle")
      : setMenu("navLinksToggleNone");

    menuIcon === true ? setMenuIcon(false) : setMenuIcon(true);
  };

  const closeNav = () => {
    setMenu("navLinksToggleNone");
    setMenuIcon(true);
  };

  return (
    <>
      <nav className="navigation">
        <div>
          <div className="navWrapper">
            <div className="logo-container">
              <div className="logo">
                <img src="/img/mgm-logo.png" alt="MGM School Logo" />
              </div>
            </div>
            <div className="navLinks">
              <NavLinks />
            </div>
            <div onClick={menuToggle} className="menu">
              {menuIcon ? (
                <i className="material-icons">menu</i>
              ) : (
                <i className="material-icons">close</i>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* For mobile Phones */}
      <div className={menu}>
        <NavLinks close={closeNav} />
      </div>
    </>
  );
}

// Nav Components
function NavLinks({ close }) {
  return (
    <>
      <Link href="/about">
        <a onClick={close}>About Us</a>
      </Link>

      <Link href="/admission">
        <a onClick={close}>Admissions</a>
      </Link>

      <Link href="/curriculum">
        <a onClick={close}>Curriculum</a>
      </Link>

      <Link href="/contact">
        <a onClick={close}>Contact Us</a>
      </Link>

      <Link href="/">
        <a onClick={close}>Home</a>
      </Link>
    </>
  );
}
