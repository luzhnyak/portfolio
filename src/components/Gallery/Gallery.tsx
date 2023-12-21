import React, { useState } from "react";

import { GalleryWrapper } from "./Gallery.styled";
import Card from "../Card/Card";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import { projects } from "../../data/projects";
type Props = {
  filters: string[];
};

const Gallery: React.FC<Props> = ({ filters }) => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [selectProject, setSelectProject] = useState<IProject | null>(null);

  const filteredProjects = projects.filter((project) => {
    let k = false;
    project.tags.forEach((tag) => {
      if (filters.includes(tag)) {
        k = true;
      }
    });
    return k;
  });

  return (
    <>
      <GalleryWrapper>
        {filteredProjects.map((project) => {
          return (
            <Card
              key={project.id}
              project={project}
              isModalShow={isModalShow}
              setIsModalShow={setIsModalShow}
              setSelectProject={setSelectProject}
            />
          );
        })}
      </GalleryWrapper>
      {isModalShow && selectProject && (
        <ProjectDetails
          setIsModalShow={setIsModalShow}
          project={selectProject}
        />
      )}
    </>
  );
};

export default Gallery;
