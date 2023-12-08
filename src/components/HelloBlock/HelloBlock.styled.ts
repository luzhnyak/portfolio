import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  /* padding: 16px; */

  /* background-color: aliceblue; */
  @media only screen and (max-width: 1399px) {
    padding: 0 50px;
    width: 100%;
  }
`;

export const Conntent = styled.div`
  /* background-color: gray; */
`;

export const UperTitle = styled.p`
  margin: 0px;
  color: #e5e9f0;
  font-size: 18px;
  font-weight: 450;
  @media only screen and (max-width: 767px) {
    margin-top: 96px;
  }
`;

export const Title = styled.h1`
  margin-top: 10px;
  color: #e5e9f0;
  font-size: 62px;
  font-weight: 400;
  @media only screen and (max-width: 767px) {
    /* font-size: 54px; */
  }
`;

export const SubTitle = styled.h2`
  margin: 0px;
  color: #4d5bce;
  font-size: 32px;
  font-weight: 450;
  margin-bottom: 80px;
  @media only screen and (max-width: 767px) {
    margin-top: 5px;
    margin-bottom: 195px;
    font-size: 28px;
    color: #43d9ad;
  }
`;

export const CommentText = styled.p`
  margin: 0px;
  margin-bottom: 10px;
  color: #607b96;
  font-size: 16px;
  font-weight: 450;
  @media only screen and (max-width: 767px) {
    margin-bottom: 16px;
  }
`;

export const GitHubLink = styled.p`
  margin: 0px;
  color: #4d5bce;
  font-size: 16px;
  font-weight: 500;

  & span {
    color: #43d9ad;
  }

  & a {
    color: #e99287;
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 85px;
  }
`;
