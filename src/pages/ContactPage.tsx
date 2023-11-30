import { useEffect, useState } from "react";

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
import Prism from "prismjs";
import CodeForm from "../components/CodeSnippet/CodeForm";

const splitMessage = (message: string): string => {
  const len = 36;
  const tab = 8;
  let newMessage = "";
  const words = message.split(" ");
  let countRow = 1;

  words.forEach((word) => {
    console.log(countRow * (len + tab) - tab);

    if ((newMessage + word).length >= countRow * (len + tab) - tab) {
      newMessage += `\n${"".padStart(tab)}${word}`;
      countRow += 1;
    } else {
      newMessage += ` ${word}`;
    }
  });

  return newMessage.trim();
};

const ContactPage = () => {
  const [name, setName] = useState("Jonathan Davis");
  const [email, setEmail] = useState("jonathan-davis@gmail.com");
  const [message, setMessage] = useState(
    "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. Lerned a few nice tips. Thanks!"
  );

  const code = `const button = document.querySelector('#sendBtn');

const message = {
	name: "${name}",
	email: "${email}",
	message: "${splitMessage(message)}",
	date: "${new Date().toLocaleString()}"
}

button.addEventListener('click', () => {
	form.send(message);
})`.trim();

  useEffect(() => {
    Prism.highlightAll();
  }, [name, email, message]);

  useEffect(() => {
    document.title = "Oleh Luzhniak - Contacts";
  }, []);

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
          message={message}
          setEmail={setEmail}
          setName={setName}
          setMessage={setMessage}
        />
      </Work>
      <Work>
        <CodeForm code={code} />
      </Work>
    </Main>
  );
};

export default ContactPage;
