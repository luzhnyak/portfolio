import { useState } from "react";
import FilterSkills from "../components/FilterSkills/FilterSkills";
import Gallery from "../components/Gallery/Gallery";
import Main from "../components/Main/Main";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarBlock from "../components/Sidebar/SidebarBlock";

const ProjectsPage = () => {
  const [filters, setFilters] = useState<string[]>([]);

  return (
    <Main>
      <Sidebar>
        <SidebarBlock title="projects">
          <FilterSkills filters={filters} setFilters={setFilters} />
        </SidebarBlock>
      </Sidebar>
      <Gallery filters={filters} />
    </Main>
  );
};

export default ProjectsPage;
