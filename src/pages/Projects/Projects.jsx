import styles from "./project.module.scss";
import imageOne from "@/assets/project-adorable-one-big.webp";
import imageTwo from "@/assets/project-adorable-two-big.webp";
import imageThree from "@/assets/project-adorable-three-big.webp";
import imageFour from "@/assets/project-adorable-four-big.webp";
import imageFive from "@/assets/project-adorable-five-big.webp";
import imageSix from "@/assets/project-adorable-six-big.webp";
import { Link } from "@/components";
import { MdArrowOutward } from "react-icons/md";
import { pastProjects } from "@/constants";

function Projects() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>
        Whether you are a connoisseur of dark luxurious interiors, an aspiring
        interior designer, or someone who appreciates the art of opulence, we
        invite you to embark on this journey with Nyeusi Interior Design House.
        Explore our creations, immerse yourself in our world, and let the allure
        of dark luxury enrich your spaces.
      </h1>
      <div className={styles.container}>
        {/* contemporary project */}
        <div className={`${styles["grid-gallery"]}`}>
          {pastProjects.contemporary.map((project, index) => {
            return (
              <>
                {index + 1 === 8 ? (
                  <Link
                    key={index}
                    to="/"
                    variant="solid"
                    Icon={MdArrowOutward}
                    className={`${styles["grid-gallery-item--8"]}`}
                  >
                    View more
                  </Link>
                ) : (
                  <div
                    className={`${styles[`grid-gallery-item--${index + 1}`]}`}
                  >
                    {index + 1 === 2 ? (
                      <>
                        <h2>{project.title}</h2>
                        <p>{project.year}</p>
                      </>
                    ) : (
                      <img
                        src={project.desktop}
                        alt=""
                        className={`${styles["grid-gallery-img"]}`}
                      />
                    )}
                  </div>
                )}
              </>
            );
          })}
        </div>

        {/* snohetta project */}
        <div className={` ${styles["grid-gallery"]}`}>
          {pastProjects.snohetta.map((project, index) => {
            return (
              <>
                {index + 1 === 8 ? (
                  <Link
                    key={index}
                    to="/"
                    variant="solid"
                    Icon={MdArrowOutward}
                    className={`${styles["grid-gallery-item--8"]}`}
                  >
                    View more
                  </Link>
                ) : (
                  <div
                    className={`${styles[`grid-gallery-item--${index + 1}`]}`}
                  >
                    {index + 1 === 2 ? (
                      <>
                        <h2>{project.title}</h2>
                        <p>{project.year}</p>
                      </>
                    ) : (
                      <img
                        src={project.desktop}
                        alt=""
                        className={`${styles["grid-gallery-img"]}`}
                      />
                    )}
                  </div>
                )}
              </>
            );
          })}
        </div>

        {/* gordon project */}
        <div className={`${styles["grid-gallery"]}`}>
          {pastProjects.gordon.map((project, index) => {
            return (
              <>
                {index + 1 === 8 ? (
                  <Link
                    key={index}
                    to="/"
                    variant="solid"
                    Icon={MdArrowOutward}
                    className={`${styles["grid-gallery-item--8"]}`}
                  >
                    View more
                  </Link>
                ) : (
                  <div
                    className={`${styles[`grid-gallery-item--${index + 1}`]}`}
                  >
                    {index + 1 === 2 ? (
                      <>
                        <h2>{project.title}</h2>
                        <p>{project.year}</p>
                      </>
                    ) : (
                      <img
                        src={project.desktop}
                        alt=""
                        className={`${styles["grid-gallery-img"]}`}
                      />
                    )}
                  </div>
                )}
              </>
            );
          })}
        </div>

        {/* adorable project */}
        <div className={`${styles["grid-gallery"]}`}>
          {pastProjects.adorable.map((project, index) => {
            return (
              <>
                {index + 1 === 8 ? (
                  <Link
                    key={index}
                    to="/"
                    variant="solid"
                    Icon={MdArrowOutward}
                    className={`${styles["grid-gallery-item--8"]}`}
                  >
                    View more
                  </Link>
                ) : (
                  <div
                    className={`${styles[`grid-gallery-item--${index + 1}`]}`}
                  >
                    {index + 1 === 2 ? (
                      <>
                        <h2>{project.title}</h2>
                        <p>{project.year}</p>
                      </>
                    ) : (
                      <img
                        src={project.desktop}
                        alt=""
                        className={`${styles["grid-gallery-img"]}`}
                      />
                    )}
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      <p className={styles["subText--1"]}>
        Our commitment to excellence extends to every facet of interior design.
        We don't just offer exceptional furniture; we weave it seamlessly into
        your design, ensuring that every element complements the whole. The
        result is a harmonious, functional, and beautiful environment that
        transcends mere aesthetics.
      </p>
      <p className={styles["subText--2"]}>
        Our commitment to excellence extends to every facet of interior design.
        We don't just offer exceptional furniture; we weave it seamlessly into
        your design, ensuring that every element complements the whole. The
        result is a harmonious, functional, and beautiful environment that
        transcends mere aesthetics.
      </p>
    </section>
  );
}

export default Projects;
