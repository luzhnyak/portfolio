import React from "react";

import imgWebstudio from "/webstudio.jpg";
import imgBookshelf from "/bookshelf.jpg";
import { GalleryWrapper } from "./Gallery.styled";
import Card from "../Card/Card";

const projects = [
  {
    id: 1,
    name: "_webstudio",
    title: "WebStudio",
    description: "Навчальний проект в онлайн школі GoIT",
    img: imgWebstudio,
    url: "",
    tags: ["html", "css", "javascript"],
  },
  {
    id: 2,
    name: "_bookshelf",
    title: "Bookshelf",
    description: "Проєкт інтернет-магазину для пошуку книжок.",
    img: imgBookshelf,
    url: "",
    tags: ["html", "css", "javascript"],
  },
  {
    id: 3,
    name: "webstudio",
    title: "WebStudio",
    description: "Навчальний проект в онлайн школі GoIT",
    img: imgWebstudio,
    url: "",
    tags: ["html", "css"],
  },
  {
    id: 4,
    name: "webstudio",
    title: "WebStudio",
    description: "Навчальний проект в онлайн школі GoIT",
    img: imgWebstudio,
    url: "",
    tags: ["html", "css"],
  },
  {
    id: 5,
    name: "webstudio",
    title: "WebStudio",
    description: "Навчальний проект в онлайн школі GoIT",
    img: imgWebstudio,
    url: "",
    tags: ["html", "css"],
  },
  {
    id: 6,
    name: "_webstudio",
    title: "WebStudio",
    description: "Навчальний проект в онлайн школі GoIT",
    img: imgWebstudio,
    url: "",
    tags: ["html", "css"],
  },
  {
    id: 7,
    name: "_webstudio",
    title: "WebStudio",
    description: "Навчальний проект в онлайн школі GoIT",
    img: imgWebstudio,
    url: "",
    tags: ["html", "css"],
  },
  {
    id: 8,
    name: "webstudio",
    title: "WebStudio",
    description: "Навчальний проект в онлайн школі GoIT",
    img: imgWebstudio,
    url: "",
    tags: ["html", "css"],
  },
];

type Props = {
  filters: string[];
};

const Gallery: React.FC<Props> = ({ filters }) => {
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
    <GalleryWrapper>
      {filteredProjects.map(({ id, description, img, url, name }) => {
        return (
          <Card
            key={id}
            id={id}
            img={img}
            text={description}
            url={url}
            name={name}
          />
        );
      })}
    </GalleryWrapper>
  );
};

export default Gallery;
