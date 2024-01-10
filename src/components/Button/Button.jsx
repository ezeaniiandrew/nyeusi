/* eslint-disable react/prop-types */
import { Button as AriaButton } from "react-aria-components";
import styles from "./button.module.scss";

function Button({ children }) {
  return <AriaButton className={styles.btn}>{children}</AriaButton>;
}

export default Button;
