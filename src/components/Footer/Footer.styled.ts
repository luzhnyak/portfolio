import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const FooterList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #1e2d3d;
`;

export const FooterItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 12px;
  border-right: 1px solid #1e2d3d;
  &.end {
    margin-left: auto;
    border-left: 1px solid #1e2d3d;
    border-right: none;
  }
  &.start {
    padding: 12px 20px 12px 24px;
  }
`;

export const FooterLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #607b96;
`;

export const FooterSpan = styled.span`
  color: #607b96;
`;
