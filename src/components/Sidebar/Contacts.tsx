import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { ContactsItem, ContactsList } from "./Contacts.styled";

const Contacts = () => {
  return (
    <ContactsList>
      <ContactsItem>
        <FaEnvelope size={16} />
        <a href="mailto:luzhnyak@gmail.com">luzhnyak@gmail.com</a>
      </ContactsItem>
      <ContactsItem>
        <FaPhoneAlt size={16} />
        <a href="tel:">+38 (097) 258 10 00</a>
      </ContactsItem>
    </ContactsList>
  );
};

export default Contacts;
