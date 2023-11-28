import { useState } from "react";
import FilterSkills from "../components/FilterSkills/FilterSkills";
import Gallery from "../components/Gallery/Gallery";
import Main from "../components/Main/Main";
import Sidebar from "../components/Sidebar/Sidebar";

const ProjectsPage = () => {
  const [filters, setFilters] = useState<string[]>([]);

  return (
    <Main>
      <Sidebar>
        <FilterSkills filters={filters} setFilters={setFilters} />
      </Sidebar>
      <Gallery filters={filters} />
    </Main>
  );
};

export default ProjectsPage;
