import { useState } from "react";
import Link from "../Link/Link";
import styles from "./nav.module.scss";
import { MdClose, MdMenu } from "react-icons/md";
import { routes } from "@/constants/index";

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
        {routes.map((route) => (
          <li key={route.name}>
            <Link
              to={route.path}
              variant="outlined"
              Icon={route.icon}
              onClick={() => setIsOpen(!isOpen)}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
