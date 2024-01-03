import { MdArrowOutward } from "react-icons/md";
import Link from "@/components/Link/Link";
import styles from "./home.module.scss";
import { pastProjectsData } from "@/constants/index";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

function Home() {
  return (
    <>
      <section className={styles.container}>
        <h1>
          GAME CHANGERS IN BOLD LUXURIOUS INTERIORS THAT DARE TO STAND OUT
        </h1>
        <div className={styles.hero_textbox}>
          <p>
            We are a modern interior design house with a focus on cosy, sleek
            and rich inviting abodes dubbed in dark colors and textures turning
            your space into a luxurious space that your neigboUrs can&#39;t get
            enough of.
          </p>
          <Link to="/" variant="solid" Icon={MdArrowOutward}>
            hire us
          </Link>
        </div>
        <div className={styles.hero_img}></div>
        <div className={styles.more_info}>
          <p className={styles.one}>
            Welcome to the realm of Nyeusi Interior Design House, where the art
            of crafting dark luxurious interiors finds its ultimate expression.
            We are on a dedicated mission to bring forth a symphony of
            sophistication, aesthetics, and functionality in the realm of
            interior design.
          </p>
          <div className={styles.two}></div>
          <div className={styles.four}>
            <p>
              In the heart of Nyeusi, the allure of darkness and luxury is woven
              into our very essence. We have embarked on a journey that
              harmonizes the bold elegance of dark interiors with the allure of
              opulence. Our story is one of passion, artistry, and an unwavering
              commitment to creating spaces that define luxury.
            </p>
            <p>
              our mission is clear - to offer interior design and products that
              personify timeless elegance. We are driven by a passion for the
              dark aesthetic and a commitment to the enduring quality of our
              creations. We believe in delivering luxury, not as a mere concept,
              but as a tangible experience within the spaces we design.
            </p>
          </div>
          <div className={styles.three}></div>
        </div>
      </section>
      <section className={styles.projects}>
        <div className={styles.projects_textbox}>
          <h2>our past projects</h2>
          <p>
            Whether you are a connoisseur of dark luxurious interiors, an
            aspiring interior designer, or someone who appreciates the art of
            opulence, we invite you to embark on this journey with Nyeusi
            Interior Design House. Explore our creations, immerse yourself in
            our world, and let the allure of dark luxury enrich your spaces.
          </p>
        </div>
        <div className={styles.projects_display}>
          {pastProjectsData.map((project) => (
            <ProjectCard key={project.text} images={project.images}>
              <p>{project.text}</p>
              <Link to={project.to} variant="solid" Icon={MdArrowOutward}>
                View
              </Link>
            </ProjectCard>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
