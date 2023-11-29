import styled from "styled-components";

// type Props = {
//   $justifyContent: string | undefined;
// };

export const SidebarWrapper = styled.aside`
  width: 289px;
  height: 100%;
  border-right: 1px solid #1e2d3d;

  color: #607b96;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

// flex-start

export const SidebarTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-top: 1px solid #1e2d3d;
  border-bottom: 1px solid #1e2d3d;
  padding-left: 22px;
  color: #fff;
`;

export const SidebarTitle = styled.div`
  padding: 10px;
`;
