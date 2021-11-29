import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="description" content="We are MGM Boys School" />
        <link rel="icon" href="/img/mgm-logo.png" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
