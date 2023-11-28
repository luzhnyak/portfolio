import React from "react";
import { MainWrapper } from "./Main.styled";

type Props = {
  children: React.ReactElement | React.ReactElement[];
  justifyContent?: string;
};

const Main: React.FC<Props> = ({ justifyContent, children }) => {
  return <MainWrapper $justifyContent={justifyContent}>{children}</MainWrapper>;
};

export default Main;
