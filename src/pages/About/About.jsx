import Button from "@/components/Button/Button";
import styles from "./about.module.scss";
import { MdArrowOutward } from "react-icons/md";
import heroImg from "@/assets/desktop-about-us-hero.jpg";
import ourServicesCardOneImageBig from "@/assets/our-service-card-one-big.webp";
import { aboutUsCardsData } from "@/constants";

function About() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>
        Welcome to Nyeusi Interior Design House, where we redefine the world of
        interior design with our focus on creating dark and luxurious spaces.
      </h1>
      <div className={styles.img}>
        <img src={heroImg} alt="" />
      </div>
      <p className={styles["subText--1"]}>
        At Nyeusi Interior Design House, our creative process is rooted in
        meticulous attention to detail and a commitment to the timeless art of
        design. Our journey begins with a deep understanding of your vision and
        requirements. We collaborate closely with you to ensure that every
        nuance is not only heard but celebrated. This partnership fuels our
        inspiration and guides our creative direction.
      </p>
      <p className={styles["subText--2"]}>
        At Nyeusi Interior Design House, our creative process is rooted in
        meticulous attention to detail and a commitment to the timeless art of
        design. Our journey begins with a deep understanding of your vision and
        requirements. We collaborate closely with you to ensure that every
        nuance is not only heard but celebrated. This partnership fuels our
        inspiration and guides our creative direction.
      </p>
      <section className={styles.services}>
        <h2 className={styles.heading}>Our services</h2>
        <p>
          Our dedication to quality and aesthetics is reflected in the diverse
          array of services we offer:
        </p>
        <div className={styles.cards}>
          {aboutUsCardsData.services.map((card, index) => (
            <div className={styles.card} key={index}>
              <div>
                <img
                  src={card.images.desktop}
                  alt=""
                  className={styles["card--img"]}
                />
              </div>
              <div className={styles.textbox}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={`${styles.services} ${styles["mt-50"]}`}>
        <h2 className={styles.heading}>Our Process</h2>
        <p>From concept to creation, our concept involves:</p>
        <div className={styles.cards}>
          {aboutUsCardsData.process.map((card, index) => (
            <div className={styles.card} key={index}>
              <div>
                <img
                  src={card.images.desktop}
                  alt=""
                  className={styles["card--img"]}
                />
              </div>
              <div className={styles.textbox}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default About;
