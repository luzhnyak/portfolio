import styled from "styled-components";

type Props = {
  $rightBorder: boolean | undefined;
};

export const WorkWrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* flex-wrap: wrap; */
  height: 100%;
  flex: 1;
  overflow: auto;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const WorkTabWrapper = styled.section<Props>`
  display: flex;
  flex-direction: column;

  /* background-color: antiquewhite; */
  /* width: 289px; */
  height: 100%;
  border-right: ${(props) =>
    props.$rightBorder ? "1px solid #1e2d3d" : "none"};
  flex: 1;
  color: #607b96;
  font-size: 16px;
  font-weight: 400;
`;

export const WorkContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #1e2d3d;
  height: 100%;
  overflow: auto;
  /* background-color: gray; */
  /* gap: 50px; */
`;

export const WorkTitleWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 43px;
  padding-left: 14px;
  padding-right: 14px;
  width: 230px;

  border-right: ${(props) =>
    props.$rightBorder ? "1px solid #1e2d3d" : "none"};

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const WorkTitle = styled.div`
  padding: 10px;
`;
