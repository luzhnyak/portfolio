import styled from "styled-components";

type Props = {
  $justifyContent: string | undefined;
};

export const MainWrapper = styled.main<Props>`
  display: flex;
  justify-content: ${(props) =>
    props.$justifyContent ? props.$justifyContent : "flex-start"};
  align-items: flex-start;
  /* flex-wrap: wrap; */
  height: calc(100vh - 138px);
  /* background-color: aqua; */
  /* height: 100%; */

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    height: 100%;
    min-height: calc(100vh - 84px);
  }
`;
