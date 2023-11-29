import styled from "styled-components";

// type Props = {
//   $justifyContent: string | undefined;
// };

export const WorkWrapper = styled.aside`
  /* width: 289px; */
  height: 100%;
  border-right: 1px solid #1e2d3d;
  flex: 1;
  color: #607b96;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

// flex-start

export const WorkTitleWrapper = styled.div`
  /* width: 289px; */
  display: flex;
  align-items: center;
  gap: 50px;
  border-top: 1px solid #1e2d3d;
  border-bottom: 1px solid #1e2d3d;
  border-right: 1px solid #1e2d3d;
  padding-left: 14px;
`;

export const WorkTitle = styled.div`
  padding: 10px;
`;
