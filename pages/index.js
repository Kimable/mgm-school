import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>MGM Boys School</title>
      </Head>

      <main>
        <section className={styles.heroContainer}>
          <div className="container">
            <div className={styles.hero}>
              <div className={styles.textContainer}>
                <div className="headerLine"></div>
                <h1>Learn With Us</h1>
                <p>
                  Learning has never been Easier and more inclusive! At MGM Boys
                  Academy, We take pride in helping each child achieve their
                  optimum potential and set them for success in life.
                </p>
                <Link href="/about">
                  <a className="btn">Learn More</a>
                </Link>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src="/img/Learning-cuate.png"
                  width={500}
                  height={500}
                  alt="Student Learning"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.curriculumSection}>
          <div className="container centerContent">
            <div className="headerLine"></div>
            <h2>Our Curriculum</h2>
            <p>
              The new competency based curriculum is going to transform
              education in Kenya and we are happy to be using it to enable our
              students achieve their dreams. We also offer the 8-4-4 curriculum
              as the CBC curriculum continues to be rolled out so that no child
              is left behind.
            </p>
            <a
              href="https://kicd.ac.ke/cbc-materials/curriculum-designs/"
              className="btn"
              target="_blank"
            >
              Learn More About CBC
            </a>
          </div>
        </section>
        <section className={styles.aboutSectionContainer}>
          <div className="container">
            <div className={styles.aboutSection}>
              <div className={styles.imageContainer}>
                <Image
                  src="/img/Questions-amico.png"
                  width={500}
                  height={500}
                  alt="About MGM illustration"
                />
              </div>
              <div className={styles.textContainer}>
                <div className="headerLine"></div>
                <h2>About Us</h2>
                <p>
                  MGM Boys Academy is a private school that is in a fast-growing
                  residential area along Kangundo Road. Malaa, Machakos County
                </p>
                <Link href="/about">
                  <a className="btn">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
