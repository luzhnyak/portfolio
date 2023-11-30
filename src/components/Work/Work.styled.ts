import styled from "styled-components";

type Props = {
  $rightBorder: boolean | undefined;
};

export const WorkWrapper = styled.section<Props>`
  /* width: 289px; */
  height: 100%;
  border-right: ${(props) =>
    props.$rightBorder ? "1px solid #1e2d3d" : "none"};
  flex: 1;
  color: #607b96;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const WorkContentWrapper = styled.div`
  /* width: 289px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #1e2d3d;
  height: 90%;
  /* background-color: antiquewhite; */
  gap: 50px;
`;

export const WorkTitleWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  height: 41px;
  padding-left: 14px;
  padding-right: 14px;
  width: 230px;

  border-right: ${(props) =>
    props.$rightBorder ? "1px solid #1e2d3d" : "none"};
`;

export const WorkTitle = styled.div`
  padding: 10px;
`;
