import Button from "@/components/Button/Button";
import styles from "./about.module.scss";
import { MdArrowOutward } from "react-icons/md";
import Link from "@/components/Link/Link";
import heroImg from "@/assets/desktop-about-us-hero.jpg";

function About() {
  return (
    <>
      <p className={styles.heading}>
        Welcome to Nyeusi Interior Design House, where we redefine the world of
        interior design with our focus on creating dark and luxurious spaces.
      </p>
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
      {/* <Link
        variant="solid"
        to="/contact"
        Icon={MdArrowOutward}
        className={styles.btn}
      >
        Contact us
      </Link> */}
    </>
  );
}

export default About;
