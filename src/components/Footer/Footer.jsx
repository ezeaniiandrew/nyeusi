import { navLinks } from "@/constants";
import Link from "../Link/Link";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <>
      <div className={styles.company}>
        <p>
          <span>Nyeusi</span>
          Interior
          <span>design house</span>
        </p>
        <p>/nyeusi/ (noun)</p>
        <p>An East African Swahili word used to refer to the color black </p>
      </div>
      <div className={styles.description}>
        <p>
          We believe that the way to create a design that is unique and truly
          yours is by working with a designer you are in sync with that is why
          we will pair with a designer(s) that you truly resonate with, some
          with over 30 years experience.{" "}
        </p>
      </div>
      <div className={styles.nav}>
        <div className={styles.links}>
          <p>Links</p>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} variant="text">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contacts}>
          <p>contact information</p>
          <ul>
            <li>
              <Link to="mailto: nyeusiinteriordesign@gmail.com" variant="text">
                nyeusiinteriordesign@gmail.com
              </Link>
            </li>
            <li>
              <Link to="tel: +254712345678" variant="text">
                +254712345678
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.socials}>
          <p>our socials</p>
          <ul>
            {["twitter", "facebook", "instagram"].map((item) => (
              <li key={item}>
                <Link to="#" variant="text">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p>
          Designed by
          <a href="https://linktr.ee/UI_Alchemist"> UI Alchemist</a> and built
          by
          <a href="https://linktr.ee/ezeaniiandrew"> Andrew Ezeani</a>
        </p>
      </div>
    </>
  );
}

export default Footer;
