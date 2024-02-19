export interface IProject {
  id: number;
  name: string;
  title: string;
  description: string;
  img: string[];
  url?: string;
  urlGit?: string;
  tags: string[];
  technologies: string[];
}
