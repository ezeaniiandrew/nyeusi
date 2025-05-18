import { useParams } from "react-router-dom";
import styles from "./project-detail.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/constants";

function ProjectDetail() {
  const { projectId } = useParams();
  const projectData = projects[projectId];
  const { title, year, images } = projectData;
  const [currentImage, setCurrentImage] = useState(images[0]);

  // Function to move to the next image
  const handleNext = () => {
    const currentIndex = images.findIndex((img) => img.id === currentImage.id);
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentImage(images[nextIndex]);
  };

  // Function to move to the previous image
  const handlePrevious = () => {
    const currentIndex = images.findIndex((img) => img.id === currentImage.id);
    const previousIndex =
      currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentImage(images[previousIndex]);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <h1>{title} </h1>
        <span>{year}</span>
      </div>
      <div className={styles.banner}>
        <AnimatePresence mode="wait" key={currentImage.id}>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            src={currentImage.src}
            alt={currentImage.alt}
            sizes="(max-width: 768px) 100vw, 66vw"
          />
        </AnimatePresence>
        <div className={styles.arrows}>
          <span onClick={handlePrevious}>
            <FaArrowLeft />
          </span>
          <span onClick={handleNext}>
            <FaArrowRight />
          </span>
        </div>
      </div>
      <div className={styles.thumbnails}>
        {images.map((image) => (
          <div
            onClick={() => setCurrentImage(image)}
            key={image.id}
            className={`${
              currentImage.id === image.id ? `${styles.active}` : ""
            }`}
          >
            <img
              key={image.id}
              onClick={() => setCurrentImage(image)}
              src={image.thumbnail}
              alt={image.alt}
              className={`${
                currentImage.id === image.id ? `${styles.active}` : ""
              }`}
              sizes="(max-width: 640px) 33vw, (max-width: 768px) 16vw, 33vw"
            />
          </div>
        ))}
      </div>
      <div className={styles.textbox}>
        <p>
          The “Contemporary Interior Box” apartment completely shows the
          impeccable touch that colors used with woods can give to an
          apartment&apos;s interior design, especially when there&apos;s nothing
          more than black and white in interior design.
        </p>
        <p>
          Being a modern apartment, as it was precisely designed in 2023, the
          apartment clearly depicts all that a modern house encompasses. The
          “Contemporary Interior Box” apartment is located in Kaunas, Lithuania,
          Europe.
        </p>
        <p>
          The flat covers a 55 square area, and was designed with the aim to
          separate spaces by contrast, giving a glowing edge. When it comes to
          the apartment&apos;s living room, the application of black and white
          interior design makes it very bright. This was the concept adopted by
          the numerous architects around the world.
        </p>
      </div>
    </section>
  );
}

export default ProjectDetail;
