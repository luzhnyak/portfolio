import React from "react";
import { SidebarTitle, SidebarTitleWrapper } from "./Sidebar.styled";
import { FaCaretDown } from "react-icons/fa";

type Props = {
  title?: string;
  children: React.ReactNode;
  topBorder?: boolean;
};

const SidebarBlock: React.FC<Props> = ({ title, children, topBorder }) => {
  return (
    <>
      {title && (
        <SidebarTitleWrapper $topBorder={topBorder}>
          <FaCaretDown />
          <SidebarTitle>{title}</SidebarTitle>
        </SidebarTitleWrapper>
      )}
      {children}
    </>
  );
};

export default SidebarBlock;
