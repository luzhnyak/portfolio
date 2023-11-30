import { useState } from "react";

import Main from "../components/Main/Main";
import Contacts from "../components/Sidebar/Contacts";
import {
  ContactsItem,
  ContactsList,
} from "../components/Sidebar/Contacts.styled";
import Sidebar from "../components/Sidebar/Sidebar";
import SidebarBlock from "../components/Sidebar/SidebarBlock";
import { FaExternalLinkAlt } from "react-icons/fa";
import Work from "../components/Work/Work";
import CodeSnippet from "../components/CodeSnippet/CodeSnippet";
import ContactForm from "../components/ContactForm/ContactForm";

const code = `const button = document.querySelector('#sendBtn');

const message = {
	name: "Jonathan Davis",
	email: "jonathan-davis@gmail.com",
	message: "Hey! Just checked your website
            and it looks awesome!
            Also, I checked your articled on Medium.
            Lerned a few nice tips. Thanks!",
	date: "Thu 21 Apr"
}

button.addEventListener('click', () => {
	form.send(message);
})`.trim();

const ContactPage = () => {
  const [name, setName] = useState("Jonathan Davis");
  const [email, setEmail] = useState("jonathan-davis@gmail.com");
  const [mesage, setMessage] = useState(
    "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. Lerned a few nice tips. Thanks!"
  );

  return (
    <Main>
      <Sidebar>
        <SidebarBlock title="contacts">
          <Contacts />
        </SidebarBlock>
        <SidebarBlock title="find-me-also-in" topBorder>
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
      <Work title="contacts" rightBorder>
        <ContactForm
          name={name}
          email={email}
          message={mesage}
          setEmail={setEmail}
          setName={setName}
          setMessage={setMessage}
        />
      </Work>
      <Work>
        <CodeSnippet code={code} />
      </Work>
    </Main>
  );
};

export default ContactPage;
