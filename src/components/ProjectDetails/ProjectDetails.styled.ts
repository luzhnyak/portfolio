import styled from "styled-components";

// type Props = {
//   setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
// };

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.6);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Modal = styled.div`
  width: 600px;
  height: 400px;
  border-radius: 8px;
  position: absolute;
  background-color: #011221;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
