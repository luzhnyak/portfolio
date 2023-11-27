import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaFlask,
  FaNodeJs,
} from "react-icons/fa";

import { TbBrandJavascript } from "react-icons/tb";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import { FilterItem, FilterList } from "./FilterSkills.styled";

const FilterSkills = () => {
  return (
    <FilterList>
      <FilterItem>
        <label htmlFor="html">
          <input type="checkbox" id="html" name="skill" />
          <FaHtml5 size={24} />
          HTML
        </label>
      </FilterItem>
      <FilterItem>
        <label htmlFor="css">
          <input type="checkbox" id="css" name="skill" />
          <FaCss3Alt size={24} />
          CSS
        </label>
      </FilterItem>
      <FilterItem>
        <label htmlFor="javascript">
          <input type="checkbox" id="javascript" name="skill" />
          <TbBrandJavascript size={24} />
          JavaScript
        </label>
      </FilterItem>
      <FilterItem>
        <label htmlFor="typescript">
          <input type="checkbox" id="typescript" name="skill" />
          <SiTypescript size={24} />
          TypeScript
        </label>
      </FilterItem>
      <FilterItem>
        <label htmlFor="react">
          <input type="checkbox" id="react" name="skill" />
          <FaReact size={24} />
          React
        </label>
      </FilterItem>
      <FilterItem>
        <label htmlFor="next">
          <input type="checkbox" id="next" name="skill" />
          <SiNextdotjs size={24} />
          Next.js
        </label>
      </FilterItem>
      <FilterItem>
        <label htmlFor="node">
          <input type="checkbox" id="node" name="skill" />
          <FaNodeJs size={24} />
          Node.js
        </label>
      </FilterItem>
      <FilterItem>
        <label htmlFor="python">
          <input type="checkbox" id="python" name="skill" />
          <FaPython size={24} />
          Python
        </label>
      </FilterItem>
      <FilterItem>
        <label htmlFor="flask">
          <input type="checkbox" id="flask" name="skill" />
          <FaFlask size={24} />
          Flask
        </label>
      </FilterItem>
    </FilterList>
  );
};
export default FilterSkills;
