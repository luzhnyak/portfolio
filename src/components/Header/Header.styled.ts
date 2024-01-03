import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #1e2d3d;
  @media only screen and (max-width: 767px) {
    width: 100%;
    background-color: #011627;
    flex-direction: column;
    position: absolute;
    z-index: 100;
  }
`;

export const MenuItem = styled.li`
  padding: 17px 32px;
  border-right: 1px solid #1e2d3d;
  &.end {
    margin-left: auto;
    border-left: 1px solid #1e2d3d;
    border-right: none;
    @media only screen and (max-width: 767px) {
      margin: 0;
      border: none;
    }
  }
  &.start {
    padding: 17px 16px 17px 32px;
    width: 300px;
  }

  &:has(.active) {
    border-bottom: 3px solid #fea55f;
  }

  @media only screen and (max-width: 767px) {
    margin: 0;
    border: none;

    &.hide {
      display: none;
    }
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

export const ToggleMenu = styled.button`
  display: none;
  position: absolute;
  top: 16px;
  right: 20px;
  background-color: transparent;
  border: none;
  color: #607b96;

  @media only screen and (max-width: 767px) {
    display: flex;
    z-index: 200;
  }
`;
