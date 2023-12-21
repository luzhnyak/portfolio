import React from "react";
import {
  CardButton,
  CardContent,
  CardImg,
  CardText,
  CardTitle,
  CardWrapper,
} from "./Card.styled";
import { IProject } from "../../types";

type Props = {
  project: IProject;
  isModalShow: boolean;
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectProject: React.Dispatch<React.SetStateAction<IProject | null>>;
};

const Card: React.FC<Props> = ({
  project,
  setIsModalShow,
  setSelectProject,
}) => {
  const { id, img, description, name } = project;
  return (
    <CardWrapper>
      <CardTitle>
        Project {id} <span>// {name}</span>
      </CardTitle>
      <CardContent>
        <CardImg src={`../../../public/${name}/${img[0]}`} />
        <CardText>{description}</CardText>
        <CardButton
          onClick={() => {
            setSelectProject(project);
            setIsModalShow(true);
          }}
        >
          view-project
        </CardButton>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
