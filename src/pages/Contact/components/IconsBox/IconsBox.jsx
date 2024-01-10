import { FaXTwitter } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import styles from "./icons-box.module.scss";

function IconsBox() {
  return (
    <div className={styles.icons_box}>
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
        <FaInstagramSquare />
      </span>
    </div>
  );
}

export default IconsBox;
