import { FaEnvelope, FaTelegramPlane } from "react-icons/fa";
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
    </ContactsList>
  );
};

export default Contacts;
