import React, { ReactNode } from "react";
import { ContentWrapper } from "./AboutContent.styled";
import { generateNumberOfRow } from "../../helpers/generateNumberOfRow";

type Props = {
  content: ReactNode | ReactNode[];
};

const AboutContent: React.FC<Props> = ({ content }) => {
  const namberOfRow = generateNumberOfRow(32);

  return (
    <ContentWrapper>
      <pre>
        <code>{namberOfRow}</code>
      </pre>
      <div>{content}</div>
    </ContentWrapper>
  );
};
export default AboutContent;
