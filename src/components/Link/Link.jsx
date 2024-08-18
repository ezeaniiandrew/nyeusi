/* eslint-disable react/prop-types */
import clsx from "clsx";
import styles from "./link.module.scss";
import { NavLink } from "react-router-dom";

function Links({ children, Icon, variant, to, onClick, className }) {
  const validVariants = ["outlined", "solid", "text"];
  const linkStyles = clsx({
    [styles[variant]]: variant && validVariants.includes(variant),
    [className]: className,
  });

  return (
    <NavLink to={to} className={linkStyles} onClick={onClick}>
      {children}
      {Icon && <Icon />}
    </NavLink>
  );
}

export default Links;
