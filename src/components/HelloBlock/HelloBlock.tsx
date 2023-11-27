import React from "react";
import {
  CommentText,
  GitHubLink,
  SubTitle,
  Title,
  UperTitle,
} from "./HelloBlock.styled";

const HelloBlock = () => {
  return (
    <div>
      <UperTitle>Hi all. I am</UperTitle>
      <Title>Oleh Luzhniak</Title>
      <SubTitle>{">"} Front-end developer</SubTitle>
      <CommentText>// complete the game to continue</CommentText>
      <CommentText>// you can also see it on my Github page</CommentText>
      <GitHubLink>
        const <span>githubLink = </span>
        <a href="">“https://github.com/example/url”</a>
      </GitHubLink>
    </div>
  );
};

export default HelloBlock;
