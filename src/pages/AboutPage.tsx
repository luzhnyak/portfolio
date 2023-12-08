import Main from "../components/Main/Main";
import Contacts from "../components/Sidebar/Contacts";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarBlock from "../components/Sidebar/SidebarBlock";
import Work from "../components/Work/Work";

import "prismjs/themes/prism-tomorrow.css";
import CodeSnippet from "../components/CodeSnippet/CodeSnippet";
import { useEffect } from "react";
import WorkTab from "../components/Work/WorkTab";
import AboutMenu from "../components/AboutMenu/AboutMenu";
import { Outlet } from "react-router-dom";

import { codeList } from "../data/codeList";
import { useMediaQuery } from "../hooks/useMediaQuery";

const AboutPage = () => {
  const matches = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    document.title = "Oleh Luzhniak - About me";
  }, []);

  return (
    <Main>
      <Sidebar>
        <SidebarBlock title="personal-info">
          <AboutMenu />
        </SidebarBlock>
        <SidebarBlock title="contacts" topBorder>
          <Contacts />
        </SidebarBlock>
      </Sidebar>
      <Work>
        <WorkTab title="personal-info" rightBorder>
          <Outlet />
        </WorkTab>
        {!matches && (
          <WorkTab>
            <CodeSnippet data={codeList[0]}></CodeSnippet>
            <CodeSnippet data={codeList[1]}></CodeSnippet>
          </WorkTab>
        )}
      </Work>
    </Main>
  );
};

export default AboutPage;
