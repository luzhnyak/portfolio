import React from "react";
import { useEffect } from "react";
import Prism from "prismjs";

import { FaStar, FaCommentDots } from "react-icons/fa";

import {
  CodeSnippetContent,
  CodeSnippetTitleWrapper,
  CodeSnippetWrapper,
  DateCreate,
  Details,
  UserName,
} from "./CodeSnippet.styled";

type Props = {
  code: string;
};

const CodeSnippet: React.FC<Props> = ({ code }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <CodeSnippetWrapper>
      <CodeSnippetTitleWrapper>
        <div>
          <UserName>@username</UserName>
          <DateCreate>Created 5 months ago</DateCreate>
        </div>

        <Details>
          <FaCommentDots />
          details
        </Details>
        <Details>
          <FaStar />3 stars
        </Details>
      </CodeSnippetTitleWrapper>
      <CodeSnippetContent>
        <pre
          className="line-numbers"
          style={{ backgroundColor: "transparent" }}
        >
          <code className="language-javascript">{code}</code>
        </pre>
      </CodeSnippetContent>
    </CodeSnippetWrapper>
  );
};

export default CodeSnippet;
