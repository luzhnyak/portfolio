import { useEffect, useState } from "react";
import FilterSkills from "../components/FilterSkills/FilterSkills";
import Gallery from "../components/Gallery/Gallery";
import Main from "../components/Main/Main";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarBlock from "../components/Sidebar/SidebarBlock";
import Work from "../components/Work/Work";
import WorkTab from "../components/Work/WorkTab";

const ProjectsPage = () => {
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    document.title = "Oleh Luzhniak - Projects";
  }, []);

  return (
    <Main>
      <Sidebar>
        <SidebarBlock title="projects">
          <FilterSkills filters={filters} setFilters={setFilters} />
        </SidebarBlock>
      </Sidebar>
      <Work>
        <WorkTab title="Projects">
          <Gallery filters={filters} />
        </WorkTab>
      </Work>
    </Main>
  );
};

export default ProjectsPage;
