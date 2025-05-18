import { pastProjectsData } from "@/constants";
import styles from "./project-list.module.scss";

function ProjectList() {
  return (
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
  );
}

export default ProjectList;
