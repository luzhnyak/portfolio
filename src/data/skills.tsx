import {
  FaReact,
  FaHtml5,
  // FaCss3Alt,
  FaPython,
  FaFlask,
  FaNodeJs,
} from "react-icons/fa";

import { TbBrandJavascript } from "react-icons/tb";
import { SiTypescript, SiNextdotjs, SiCsharp } from "react-icons/si";

export const skills = [
  {
    name: "html/css",
    title: "HTML/CSS",
    icon: <FaHtml5 size={24} />,
    checked: true,
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
  {
    name: "c#",
    title: "C#",
    icon: <SiCsharp size={24} />,
  },
];
