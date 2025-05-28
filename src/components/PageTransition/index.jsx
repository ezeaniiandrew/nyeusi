import { motion, cubicBezier } from "framer-motion";
import style from "./page-transition.module.scss";

function PageTransition() {
  return (
    <motion.div
      className={style.transition}
      initial={{ opacity: 1 }}
      animate={{
        opacity: [1, 1, 0],
        transitionEnd: {
          display: "none",
        },
      }}
      transition={{
        duration: 2,
        times: [0, 0.95, 1],
        ease: [0.15, 0.45, 0.85, 1],
      }}
    >
      <motion.div
        className={style.rect}
        initial={{ scaleY: 0 }}
        animate={{
          scaleY: [0, 1, 1, 0],
        }}
        transition={{
          duration: 1.7,
          times: [0, 0.35, 0.65, 1],
          ease: cubicBezier(0.39, 0.74, 1, 0.91),
        }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: "easeInOut",
          }}
        >
          nyeusi
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}

export default PageTransition;
