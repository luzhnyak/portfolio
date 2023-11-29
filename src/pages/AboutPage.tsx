import Main from "../components/Main/Main";
import Contacts from "../components/Sidebar/Contacts";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarBlock from "../components/Sidebar/SidebarBlock";
import Work from "../components/Work/Work";

const AboutPage = () => {
  return (
    <Main>
      <Sidebar>
        <SidebarBlock title="personal-info">contacts</SidebarBlock>
        <SidebarBlock title="contacts">
          <Contacts />
        </SidebarBlock>
      </Sidebar>
      <Work title="personal-info">Work</Work>
      <Work title=" d">Work</Work>
    </Main>
  );
};

export default AboutPage;
