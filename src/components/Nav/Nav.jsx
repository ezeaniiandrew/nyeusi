import { useState } from "react";
import Link from "../Link/Link";
import styles from "./nav.module.scss";
import { MdClose, MdMenu } from "react-icons/md";
import { navLinks } from "@/constants";
import { motion, cubicBezier } from "framer-motion";
import { useMediaQuery } from "@/hooks";
import { AnimatePresence } from "framer-motion";

const container = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2,
      when: "beforeChildren",
      staggerChildren: 0.4,
      ease: cubicBezier(0.1, 0.82, 0.92, 0.16),
    },
  },
};

const listVariant = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
  },
};
const item = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const HamburgerVariant = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("only screen and (max-width: 600px)");

  const listItem = {
    hidden:
      !isOpen && isMobile ? { x: 100, opacity: 0 } : { y: -100, opacity: 0 },
    visible: isOpen && isMobile ? { x: 0, opacity: 1 } : { y: 0, opacity: 1 },
  };

  return (
    <motion.nav
      aria-labelledby="primary-navigation"
      className={styles.nav}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 id="primary-navigation" variants={item}>
        nyeusi <span>&#174;</span>
      </motion.h2>
      <motion.span
        variants={item}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className={styles.hamburger}
      >
        <AnimatePresence>
          <motion.span
            key={isOpen ? "close" : "menu"}
            variants={HamburgerVariant}
          >
            {!isOpen ? <MdMenu /> : <MdClose />}
          </motion.span>
        </AnimatePresence>
      </motion.span>
      <motion.ul
        variants={isMobile ? listVariant : container}
        initial="hidden"
        animate={isOpen || !isMobile ? "visible" : "hidden"}
        transition={{
          staggerChildren: 0.4,
          duration: 0.4,
          ease: "easeInOut",
          when: isOpen ? "beforeChildren" : "afterChildren",
          delayChildren: isOpen ? 1 : 0,
          staggerDirection: isOpen ? 1 : -1,
        }}
      >
        {navLinks.map((link) => (
          <motion.li key={link.name} variants={isMobile ? listItem : item}>
            <Link
              to={link.path}
              variant="outlined"
              Icon={link.icon}
              onClick={() => setIsOpen(!isOpen)}
            >
              {link.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}

export default Nav;
