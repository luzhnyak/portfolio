import React from "react";
import { ContentWrapper } from "./AboutContent.styled";
import { generateNumberOfRow } from "../../helpers/generateNumberOfRow";

type Props = {
  content: string;
};

const AboutContent: React.FC<Props> = ({ content }) => {
  const namberOfRow = generateNumberOfRow(content);

  return (
    <ContentWrapper>
      <pre>
        <code>{namberOfRow}</code>
      </pre>
      <pre>
        <code>{content}</code>
      </pre>
    </ContentWrapper>
  );
};
export default AboutContent;
