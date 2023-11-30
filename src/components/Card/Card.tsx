import React from "react";
import {
  CardButton,
  CardContent,
  CardImg,
  CardText,
  CardTitle,
  CardWrapper,
} from "./Card.styled";

type Props = {
  id: number;
  img: string;
  text: string;
  url: string;
  name: string;
};

const Card: React.FC<Props> = ({ id, img, text, name }) => {
  return (
    <CardWrapper>
      <CardTitle>
        Project {id} <span>// {name}</span>
      </CardTitle>
      <CardContent>
        <CardImg src={img} />
        <CardText>{text}</CardText>
        <CardButton>view-project</CardButton>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
