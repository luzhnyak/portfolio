import { useState } from "react";
import {
  LogoLink,
  MenuItem,
  MenuLink,
  MenuList,
  ToggleMenu,
} from "./Header.styled";

import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isHideMobileMenu, setIsHideMobileMenu] = useState(true);

  const handleToggle = () => {
    setIsHideMobileMenu(!isHideMobileMenu);
  };

  return (
    <header>
      <nav>
        <MenuList onClick={() => setIsHideMobileMenu(true)}>
          <MenuItem className="start">
            <LogoLink to="/">Oleh Luzhniak</LogoLink>
          </MenuItem>
          <MenuItem className={`${isHideMobileMenu && "hide"}`}>
            <MenuLink to="/">_hello</MenuLink>
          </MenuItem>
          <MenuItem className={`${isHideMobileMenu && "hide"}`}>
            <MenuLink to="/about">_about-me</MenuLink>
          </MenuItem>
          <MenuItem className={`${isHideMobileMenu && "hide"}`}>
            <MenuLink to="/projects">_projects</MenuLink>
          </MenuItem>
          <MenuItem className={`${isHideMobileMenu && "hide"} end`}>
            <MenuLink to="/contact">_contact-me</MenuLink>
          </MenuItem>
        </MenuList>
        <ToggleMenu onClick={handleToggle}>
          <FaBars size={24} />
        </ToggleMenu>
      </nav>
    </header>
  );
};

export default Header;
