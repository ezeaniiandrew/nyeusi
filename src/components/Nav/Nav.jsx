import { useState } from "react";
import Link from "../Link/Link";
import styles from "./nav.module.scss";
import { MdClose, MdMenu } from "react-icons/md";
import { navLinks } from "@/constants";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav aria-labelledby="primary-navigation" className={styles.nav}>
      <h2 id="primary-navigation">
        nyeusi <span>&#174;</span>
      </h2>
      <span
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className={styles.hamburger}
      >
        {!isOpen ? <MdMenu /> : <MdClose />}
      </span>
      <ul>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              variant="outlined"
              Icon={link.icon}
              onClick={() => setIsOpen(!isOpen)}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
