import Main from "../components/Main/Main";
import Contacts from "../components/Sidebar/Contacts";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarBlock from "../components/Sidebar/SidebarBlock";
import Work from "../components/Work/Work";
// import hljs from "highlight.js";
// import "highlight.js/styles/tomorrow-night-blue.css";

// import javascript from "highlight.js/lib/languages/javascript";
// import "highlightjs-line-numbers.js/dist/highlightjs-line-numbers.min.js";

// hljs.initLineNumbersOnLoad();

import "prismjs/themes/prism-tomorrow.css";
import CodeSnippet from "../components/CodeSnippet/CodeSnippet";
import { useEffect } from "react";
import WorkTab from "../components/Work/WorkTab";
// import "prismjs/themes/prism-okaidia.min.css";

// import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
// import "prismjs/plugins/line-highlight/prism-line-highlight.css";

// import { Highlight, themes } from "prism-react-renderer";

const code1 = `
function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}
`.trim();

const code2 = `
export function parseModelTuple(
  response: Response,
  value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value: any);
}
`.trim();

const AboutPage = () => {
  useEffect(() => {
    document.title = "Oleh Luzhniak - About me";
  }, []);

  return (
    <Main>
      <Sidebar>
        <SidebarBlock title="personal-info">contacts</SidebarBlock>
        <SidebarBlock title="contacts" topBorder>
          <Contacts />
        </SidebarBlock>
      </Sidebar>
      <Work>
        <WorkTab title="personal-info" rightBorder>
          Work
        </WorkTab>
        <WorkTab className="md">
          <CodeSnippet code={code1}></CodeSnippet>
          <CodeSnippet code={code2}></CodeSnippet>
        </WorkTab>
      </Work>
    </Main>
  );
};

export default AboutPage;
