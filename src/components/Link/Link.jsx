/* eslint-disable react/prop-types */
import clsx from "clsx";
import styles from "./link.module.scss";
import { NavLink } from "react-router-dom";

function Link({ children, Icon, variant, to, onClick }) {
  const validVariants = ["outlined", "solid", "text"];
  const linkStyles = clsx({
    [styles[variant]]: variant && validVariants.includes(variant),
  });

  return (
    <NavLink to={to} className={linkStyles} onClick={onClick}>
      {children}
      {Icon && <Icon />}
    </NavLink>
  );
}

export default Link;
