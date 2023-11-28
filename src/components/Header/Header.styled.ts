import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #1e2d3d;
`;

export const MenuItem = styled.li`
  padding: 17px 32px;
  border-right: 1px solid #1e2d3d;
  &.end {
    margin-left: auto;
    border-left: 1px solid #1e2d3d;
    border-right: none;
  }
  &.start {
    padding: 17px 154px 17px 32px;
  }
`;

export const MenuLink = styled(NavLink)`
  color: #607b96;

  &.active {
    color: #fff;
  }
`;

export const LogoLink = styled(Link)`
  color: #607b96;
`;
