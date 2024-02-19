import { AboutLink, Item, Menu } from "./AboutMenu.styled";

import {
  FaFolder,
  FaFileCode,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";

const AboutMenu = () => {
  return (
    <Menu>
      <Item>
        <FaChevronRight color="#81A1C1" />
        <FaFolder color="E99287" />
        <AboutLink to="">bio</AboutLink>
      </Item>
      <Item>
        <FaChevronRight color="#81A1C1" />
        <FaFolder color="#43D9AD" />
        <AboutLink to="work">work</AboutLink>
      </Item>
      <Item>
        <FaChevronRight color="#81A1C1" />
        <FaFolder color="#43D9AD" />
        <AboutLink to="interests">interests</AboutLink>
      </Item>
      <Item>
        <FaChevronDown color="#81A1C1" />
        <FaFolder color="#3A49A4" />
        <AboutLink to="university">education</AboutLink>
      </Item>
      {/* <Item className="tab">
        <FaFileCode color="#81A1C1" />
        <AboutLink to="university">university</AboutLink>
      </Item> */}
      <Item className="tab">
        <FaFileCode color="#81A1C1" />
        <AboutLink to="certifications">certifications</AboutLink>
      </Item>
    </Menu>
  );
};

export default AboutMenu;
