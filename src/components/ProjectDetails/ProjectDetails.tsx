import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Backdrop,
  ButtonClose,
  Img,
  Modal,
  Tag,
  Tags,
  Text,
  Title,
} from "./ProjectDetails.styled";
import { IoClose } from "react-icons/io5";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

type Props = {
  setIsModalShow: React.Dispatch<React.SetStateAction<boolean>>;
  project: IProject;
};

const ProjectDetails: React.FC<Props> = ({ setIsModalShow, project }) => {
  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.code === "Escape") {
        setIsModalShow(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsModalShow]);

  const handleClick = () => {
    setIsModalShow(false);
  };

  const { id, name, title, description, img, tags } = project;

  return createPortal(
    <Backdrop onClick={handleClick}>
      <Modal onClick={(event) => event.stopPropagation()}>
        <ButtonClose onClick={handleClick}>
          <IoClose size={24} />
        </ButtonClose>
        <div>
          <Title>
            Project {id}
            <span> // {name}</span>
          </Title>
          <Img src={img}></Img>
          <Text>{description}</Text>
          <Tags>
            {tags.map((tag) => {
              return <Tag>{tag}</Tag>;
            })}
          </Tags>
        </div>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

export default ProjectDetails;
