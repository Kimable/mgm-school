import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [menu, setMenu] = React.useState("navLinksToggleNone");
  const [menuIcon, setMenuIcon] = React.useState(true);

  const menuToggle = () => {
    menu === "navLinksToggleNone"
      ? setMenu("navLinksToggle")
      : setMenu("navLinksToggleNone");
    console.log("clicked");

    menuIcon === true ? setMenuIcon(false) : setMenuIcon(true);
  };

  return (
    <>
      <nav className="navigation">
        <div>
          <div className="navWrapper">
            <div className="logo-container">
              <div className="logo">
                <Image src="/img/mgm-logo.png" height={90.68} width={100} />
              </div>
            </div>
            <div className="navLinks">
              <Link href="/about">
                <a>About Us</a>
              </Link>

              <Link href="/admission">
                <a>Admissions</a>
              </Link>

              <Link href="/curriculum">
                <a>Curriculum</a>
              </Link>

              <Link href="/contact">
                <a>Contact Us</a>
              </Link>

              <Link href="/">
                <a>Home</a>
              </Link>
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
        <Link href="/about">
          <a>About Us</a>
        </Link>

        <Link href="/admission">
          <a>Admissions</a>
        </Link>

        <Link href="/curriculum">
          <a>Curriculum</a>
        </Link>

        <Link href="/contact">
          <a>Contact Us</a>
        </Link>

        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </>
  );
}
