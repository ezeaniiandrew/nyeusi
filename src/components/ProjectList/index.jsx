import { pastProjectsData } from "@/constants";
import styles from "./project-list.module.scss";
import { Link, ProjectCard } from "..";
import { MdArrowOutward } from "react-icons/md";

function ProjectList({ className }) {
  return (
    <div className={`${styles["projects-display"]} ${className}`}>
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
