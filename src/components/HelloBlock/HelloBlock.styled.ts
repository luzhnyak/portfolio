import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 16px;
  /* margin-left: 280px; */
  margin-right: 130px;
  /* background-color: aliceblue; */
`;

export const UperTitle = styled.p`
  margin: 0px;
  color: #e5e9f0;

  font-family: Fira Code;
  font-size: 18px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
`;

export const Title = styled.h1`
  margin: 0px;
  color: #e5e9f0;
  font-family: Fira Code;
  font-size: 62px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SubTitle = styled.h2`
  margin: 0px;
  color: #4d5bce;

  font-family: Fira Code;
  font-size: 32px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  margin-bottom: 80px;
`;

export const CommentText = styled.p`
  margin: 0px;
  margin-bottom: 10px;
  color: #607b96;

  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
`;

export const GitHubLink = styled.p`
  margin: 0px;

  color: #4d5bce;

  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  & span {
    color: #43d9ad;
  }

  & a {
    color: #e99287;
  }
`;
