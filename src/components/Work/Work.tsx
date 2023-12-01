import React from "react";

import { WorkWrapper } from "./Work.styled";

type Props = {
  children: React.ReactNode;
};

const Work: React.FC<Props> = ({ children }) => {
  return <WorkWrapper>{children}</WorkWrapper>;
};

export default Work;
