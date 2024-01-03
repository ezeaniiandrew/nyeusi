/* eslint-disable react/prop-types */
import styles from "./project-card.module.scss";

function ProjectCard({ children, images }) {
  const [mobileImage, desktopImage] = images;

  return (
    <article className={styles.card}>
      <div className={styles.card_img}>
        <img
          src={mobileImage}
          alt=""
          srcSet={`${mobileImage} 320w, ${desktopImage} 626w`}
          sizes="(min-width: 1024px) 45vw,"
          loading="lazy"
        />
      </div>
      <div className={styles.card_body}>{children}</div>
    </article>
  );
}

export default ProjectCard;
