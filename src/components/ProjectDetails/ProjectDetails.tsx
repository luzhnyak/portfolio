import { createPortal } from "react-dom";
import { Backdrop, Modal } from "./ProjectDetails.styled";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

type Props = {
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectDetails: React.FC<Props> = ({ setIsModalShow }) => {
  return createPortal(
    <Backdrop onClick={() => setIsModalShow(false)}>
      <Modal>Modal</Modal>
    </Backdrop>,
    modalRoot
  );
};

export default ProjectDetails;
