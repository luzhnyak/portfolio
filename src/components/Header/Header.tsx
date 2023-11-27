import { LogoLink, MenuItem, MenuLink, MenuList } from "./Header.styled";

const Header = () => {
  return (
    <header>
      <nav>
        <MenuList>
          <MenuItem className="start">
            <LogoLink to="/">Oleh Luzhniak</LogoLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/">_hello</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/about">_about-me</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/projects">_projects</MenuLink>
          </MenuItem>
          <MenuItem className="end">
            <MenuLink to="/contact">_contact-me</MenuLink>
          </MenuItem>
        </MenuList>
      </nav>
    </header>
  );
};

export default Header;
