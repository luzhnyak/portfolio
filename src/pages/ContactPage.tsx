import Main from "../components/Main/Main";
import Contacts from "../components/Sidebar/Contacts";
import {
  ContactsItem,
  ContactsList,
} from "../components/Sidebar/Contacts.styled";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarBlock from "../components/Sidebar/SidebarBlock";
import { FaExternalLinkAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <Main>
      <Sidebar>
        <SidebarBlock title="contacts">
          <Contacts />
        </SidebarBlock>
        <SidebarBlock title="find-me-also-in">
          <ContactsList>
            <ContactsItem>
              <FaExternalLinkAlt size={16} />
              <a>YouTube channel</a>
            </ContactsItem>
            <ContactsItem>
              <FaExternalLinkAlt size={16} />
              <a>LinkedIn</a>
            </ContactsItem>
            <ContactsItem>
              <FaExternalLinkAlt size={16} />
              <a>Instagram accaunt</a>
            </ContactsItem>
          </ContactsList>
        </SidebarBlock>
      </Sidebar>
    </Main>
  );
};

export default ContactPage;
