import React from "react";
import { useEffect } from "react";
import Prism from "prismjs";

import { CodeSnippetContent, CodeSnippetWrapper } from "./CodeSnippet.styled";

type Props = {
  code: string;
};

const CodeForm: React.FC<Props> = ({ code }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <CodeSnippetWrapper className="md">
      <CodeSnippetContent>
        <pre
          className="line-numbers"
          style={{ backgroundColor: "transparent", overflow: "hidden" }}
        >
          <code className="language-javascript">{code}</code>
        </pre>
      </CodeSnippetContent>
    </CodeSnippetWrapper>
  );
};

export default CodeForm;
