import styled from "styled-components";

// type Props = {
//   setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
// };

export const Backdrop = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Modal = styled.div`
  width: 800px;

  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 32px);

  border-radius: 8px;
  position: absolute;
  background-color: #011221;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ButtonClose = styled.button`
  position: absolute;
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  color: #1e2d3d;
  :hover {
    color: white;
    /* border: 1px solid #fff; */
  }
`;

export const Title = styled.h2`
  color: #5565e8;
  font-size: 16px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-left: 16px;

  & span {
    color: #607b96;
    font-weight: 450;
  }
`;

export const Content = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  border-radius: 15px;
  border: 1px solid #1e2d3d;
  background: #011221;

  overflow: hidden;
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  /* height: 500px; */
`;

export const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: top;
`;

export const Text = styled.p`
  margin: 16px 22px;
  color: #607b96;
  font-size: 18px;
  font-weight: 450;
  line-height: 150%; /* 27px */
  overflow-y: hidden;
`;

export const Tags = styled.ul`
  display: flex;
  list-style: none;
  gap: 8;
  margin: 0 22px 30px 22px;
  color: #607b96;
  font-size: 16px;
  font-weight: 300;
  line-height: 150%; /* 27px */
  overflow-y: hidden;
  & b {
    margin-right: 4px;
  }
`;

export const Tag = styled.li`
  &:not(:last-child)::after {
    content: ",";
    margin-right: 4px;
  }
`;
