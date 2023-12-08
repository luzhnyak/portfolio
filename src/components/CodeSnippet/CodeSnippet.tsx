import React from "react";
import { useEffect } from "react";
import Prism from "prismjs";

import { FaStar, FaCommentDots } from "react-icons/fa";

import {
  Avatar,
  CodeSnippetContent,
  CodeSnippetTitleWrapper,
  CodeSnippetWrapper,
  DateCreate,
  Details,
  UserName,
} from "./CodeSnippet.styled";

type Props = {
  data: {
    code: string;
    user?: string;
    dateCreate?: string;
    countStar?: number;
  };
};

const CodeSnippet: React.FC<Props> = ({
  data: { code, dateCreate = "5 months ago", countStar = 3, user = "username" },
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <CodeSnippetWrapper>
      <CodeSnippetTitleWrapper>
        <div>
          <Avatar src="https://avatars.githubusercontent.com/u/28703144?s=60&v=4" />
        </div>
        <div>
          <UserName>{`@${user}`}</UserName>
          <DateCreate>{`Created ${dateCreate}`}</DateCreate>
        </div>

        <Details className="end">
          <FaCommentDots />
          details
        </Details>
        <Details>
          <FaStar />
          {`${countStar} stars`}
        </Details>
      </CodeSnippetTitleWrapper>
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

export default CodeSnippet;
