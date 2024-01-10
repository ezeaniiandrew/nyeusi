import { CiMail, CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import styles from "./contact-address.module.scss";

function ContactAddress() {
  return (
    <ul className={styles.address}>
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
  );
}

export default ContactAddress;
