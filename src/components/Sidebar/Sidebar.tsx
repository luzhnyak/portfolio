import React from "react";
import { SidebarWrapper } from "./Sidebar.styled";

type Props = {
  children: React.ReactNode;
};

const Sidebar: React.FC<Props> = ({ children }) => {
  return <SidebarWrapper>{children}</SidebarWrapper>;
};

export default Sidebar;
