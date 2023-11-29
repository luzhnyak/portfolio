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
import { FilterItem, FilterList, FilterWrapper } from "./FilterSkills.styled";

const skills = [
  {
    name: "html",
    title: "HTML",
    icon: <FaHtml5 size={24} />,
  },
  {
    name: "css",
    title: "CSS",
    icon: <FaCss3Alt size={24} />,
  },
  {
    name: "javascript",
    title: "JavaScript",
    icon: <TbBrandJavascript size={24} />,
  },
  {
    name: "typescript",
    title: "TypeScript",
    icon: <SiTypescript size={24} />,
  },
  {
    name: "react",
    title: "React",
    icon: <FaReact size={24} />,
  },
  {
    name: "next",
    title: "Next.js",
    icon: <SiNextdotjs size={24} />,
  },
  {
    name: "node",
    title: "Node.js",
    icon: <FaNodeJs size={24} />,
  },
  {
    name: "python",
    title: "Python",
    icon: <FaPython size={24} />,
  },
  {
    name: "flask",
    title: "Flask",
    icon: <FaFlask size={24} />,
  },
];

type Props = {
  filters: string[];
  setFilters: any;
};

const FilterSkills: React.FC<Props> = ({ filters, setFilters }) => {
  const handleChange = (event: any) => {
    if (event.target.checked) {
      setFilters((prev: any) => [...prev, event.target.name]);
    } else {
      setFilters((prev: any) =>
        prev.filter((item: string) => item !== event.target.name)
      );
    }
  };

  return (
    <FilterWrapper>
      <FilterList>
        {skills.map(({ name, title, icon }) => {
          return (
            <FilterItem key={name}>
              <label htmlFor={name}>
                <input
                  type="checkbox"
                  id={name}
                  name={name}
                  onChange={handleChange}
                />
                {icon}
                {title}
              </label>
            </FilterItem>
          );
        })}
      </FilterList>
    </FilterWrapper>
  );
};
export default FilterSkills;
