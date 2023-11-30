import React from "react";

import { IoClose } from "react-icons/io5";

import {
  WorkContentWrapper,
  WorkTitle,
  WorkTitleWrapper,
  WorkWrapper,
} from "./Work.styled";

type Props = {
  title?: string;
  rightBorder?: boolean;
  children: React.ReactNode;
};

const Work: React.FC<Props> = ({ title, children, rightBorder }) => {
  return (
    <WorkWrapper $rightBorder={rightBorder}>
      <WorkTitleWrapper $rightBorder={!!title}>
        {title && (
          <>
            <WorkTitle>
              <span>{title}</span>
            </WorkTitle>
            <IoClose size={18} />
          </>
        )}
      </WorkTitleWrapper>
      <WorkContentWrapper>{children}</WorkContentWrapper>
    </WorkWrapper>
  );
};

export default Work;
