import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/admission">
              <a>Addmission</a>
            </Link>
          </div>
          <div className="footer-logo">
            <img src="/img/mgm-logo.png" alt="MGM Logo" />
          </div>
          <div className="footer-social">
            <span className="icon-text">
              <i className="material-icons">facebook</i>
              <a href="/contact">Facebook</a>
            </span>

            <span className="icon-text">
              <i className="material-icons">whatsapp</i>
              <a href="#">WhatsApp</a>
            </span>
          </div>
        </div>
        <hr />
        <p>Copyright &copy; 2021 | MGM Boys Academy</p>
      </div>
    </footer>
  );
}
