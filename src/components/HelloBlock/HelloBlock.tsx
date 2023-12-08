import {
  CommentText,
  Conntent,
  GitHubLink,
  SubTitle,
  Title,
  UperTitle,
  Wrapper,
} from "./HelloBlock.styled";

const HelloBlock = () => {
  return (
    <Wrapper>
      <Conntent>
        <UperTitle>Hi all. I am</UperTitle>
        <Title>Oleh Luzhniak</Title>
        <SubTitle>{">"} Front-end developer</SubTitle>
        <CommentText className="md">
          // complete the game to continue
        </CommentText>
        <CommentText>// you can also see it on my Github page</CommentText>
        <GitHubLink>
          const <span>githubLink = </span>
          <a href="https://github.com/luzhnyak" target="_blank">
            “https://github.com/luzhnyak”
          </a>
        </GitHubLink>
      </Conntent>
    </Wrapper>
  );
};

export default HelloBlock;
