import React from "react";

import { FaCaretDown, FaRegWindowClose } from "react-icons/fa";
import { WorkTitle, WorkTitleWrapper, WorkWrapper } from "./Work.styled";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const Work: React.FC<Props> = ({ title, children }) => {
  return (
    <WorkWrapper>
      <WorkTitleWrapper>
        <WorkTitle>{title}</WorkTitle>
        <FaRegWindowClose />
      </WorkTitleWrapper>

      {children}
    </WorkWrapper>
  );
};

export default Work;
