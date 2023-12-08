import React, { useState } from "react";
import { SidebarTitle, SidebarTitleWrapper } from "./Sidebar.styled";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

type Props = {
  title?: string;
  children: React.ReactNode;
  topBorder?: boolean;
};

const SidebarBlock: React.FC<Props> = ({ title, children, topBorder }) => {
  const [isShowBlock, setIsShowBlock] = useState(true);

  const handleClick = () => {
    setIsShowBlock(!isShowBlock);
  };

  return (
    <>
      {title && (
        <SidebarTitleWrapper $topBorder={topBorder}>
          {isShowBlock ? <FaCaretDown /> : <FaCaretRight />}
          <SidebarTitle onClick={handleClick}>{title}</SidebarTitle>
        </SidebarTitleWrapper>
      )}
      {isShowBlock && children}
    </>
  );
};

export default SidebarBlock;
