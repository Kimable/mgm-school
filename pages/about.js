import React from "react";
import Head from "next/head";

export default function about() {
  return (
    <div>
      <Head>
        <title>About | MGM Boys School</title>
      </Head>
      <div className="container">
        <div className="headerLine"></div>
        <h2>About Us</h2>
        <p>
          MGM Boys Academy is a private school that is in a fast-growing
          residential area along Kangundo Road. Malaa, Machakos County, that is
          offering the 8-4-4 system of secondary education but will be
          transitioning to the new Kenyan system of education the CBC
          (Competency based curriculum) 2-6-6-3.
        </p>
        <p>
          Therefore, the school has been set up to incorporate the extra classes
          to facilitate the transition. This will also include the training of
          teachers in preparation of the same. Making MGM Boys a pioneer in the
          secondary CBC program.
        </p>
      </div>
    </div>
  );
}
