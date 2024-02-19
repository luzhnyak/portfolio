import { FaEnvelope, FaRegFilePdf, FaTelegramPlane } from "react-icons/fa";
import { ContactsItem, ContactsList } from "./Contacts.styled";

const Contacts = () => {
  return (
    <ContactsList>
      <ContactsItem>
        <FaEnvelope size={16} />
        <a href="mailto:luzhnyak@gmail.com">luzhnyak@gmail.com</a>
      </ContactsItem>
      <ContactsItem>
        <FaTelegramPlane size={16} />
        <a href="https://t.me/oleghaker" target="_blank">
          Telegram
        </a>
      </ContactsItem>
      <ContactsItem>
        <FaRegFilePdf size={16} />
        <a href="/cv/oleh_luzhniak-cv_v2.pdf" target="_blank">
          Curriculum vitae
        </a>
      </ContactsItem>
    </ContactsList>
  );
};

export default Contacts;
