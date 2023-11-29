import React from "react";
import { SidebarTitle, SidebarTitleWrapper } from "./Sidebar.styled";
import { FaCaretDown } from "react-icons/fa";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const SidebarBlock: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      {title && (
        <SidebarTitleWrapper>
          <FaCaretDown />
          <SidebarTitle>{title}</SidebarTitle>
        </SidebarTitleWrapper>
      )}
      {children}
    </>
  );
};

export default SidebarBlock;
