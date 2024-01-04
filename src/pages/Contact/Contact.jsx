import { CiMail, CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import styles from "./contact.module.scss";
import instagramLogo from "@/assets/instagram-logo.jpg";

function Contact() {
  return (
    <section className={styles.wrapper}>
      <article className={styles.col_1}>
        <div>
          <h2>Contact Us</h2>
          <p>
            At Nyeusi Interior Design House, we&#39;re here to help you realize
            your vision of dark luxurious interiors. Whether you have questions,
            need to discuss your project, or simply want to connect with us,
            we&#39;re just a message or call away.
          </p>
        </div>
        <div>
          <ul>
            <li>
              <span>
                <BsTelephone />
              </span>
              +254712345678
            </li>
            <li>
              <span>
                <CiMail />
              </span>
              nyeusiinteriordesign@gmail.com
            </li>
            <li>
              <span>
                <CiLocationOn />
              </span>
              tom mboya street, nairobi, kenya.
            </li>
          </ul>
          <div>
            <span>
              <FaXTwitter />
            </span>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FaYoutube />
            </span>
            <span>
              <img src={instagramLogo} alt="go to our instagram page" />
            </span>
            {/* <span>
              <FaInstagramSquare />
            </span> */}
          </div>
        </div>
      </article>
      <div>image</div>
      <form>form</form>
      <p>
        Feel free to connect with Nyeusi Interior Design House for inquiries,
        collaborations, or to share your vision for your dark luxurious
        interiors. We eagerly anticipate the opportunity to bring your dreams to
        life.
      </p>
    </section>
  );
}

export default Contact;
