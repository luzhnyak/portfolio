import styled from "styled-components";

type Props = {
  $topBorder: boolean | undefined;
};

export const SidebarWrapper = styled.aside`
  /* flex-basis: 389px; */
  width: 300px;
  height: 100%;
  border-right: 1px solid #1e2d3d;
  color: #607b96;
  font-size: 16px;

  font-weight: 400;
  line-height: normal;
  overflow: auto;
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin-top: 58px;
  }
`;

// flex-start

export const SidebarTitleWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 43px;
  border-top: ${(props) => (props.$topBorder ? "1px solid #1e2d3d" : "none")};
  border-bottom: 1px solid #1e2d3d;
  padding: 0;
  padding-left: 22px;
  color: #fff;
`;

export const SidebarTitle = styled.div`
  /* padding: 10px; */
  cursor: pointer;
`;
