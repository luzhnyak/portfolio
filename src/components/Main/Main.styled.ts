import styled from "styled-components";

type Props = {
  $justifyContent: string | undefined;
};

export const MainWrapper = styled.main<Props>`
  display: flex;
  justify-content: ${(props) =>
    props.$justifyContent ? props.$justifyContent : "flex-start"};
  align-items: center;
  height: calc(100vh - 144px);
  /* background-color: aqua; */
`;
