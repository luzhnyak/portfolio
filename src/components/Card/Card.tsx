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
  isModalShow: boolean;
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const Card: React.FC<Props> = ({ id, img, text, name, setIsModalShow }) => {
  return (
    <CardWrapper>
      <CardTitle>
        Project {id} <span>// {name}</span>
      </CardTitle>
      <CardContent>
        <CardImg src={img} />
        <CardText>{text}</CardText>
        <CardButton
          onClick={() => {
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
