import React from "react";

import { IoClose } from "react-icons/io5";

import {
  WorkContentWrapper,
  WorkTabWrapper,
  WorkTitle,
  WorkTitleWrapper,
} from "./Work.styled";

type Props = {
  title?: string;
  rightBorder?: boolean;
  children: React.ReactNode;
  className?: string;
};

const WorkTab: React.FC<Props> = ({
  title,
  children,
  rightBorder,
  className,
}) => {
  return (
    <WorkTabWrapper $rightBorder={rightBorder} className={className}>
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
    </WorkTabWrapper>
  );
};

export default WorkTab;
