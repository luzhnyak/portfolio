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

import ContactForm from "../components/ContactForm/ContactForm";
import Prism from "prismjs";
import CodeForm from "../components/CodeSnippet/CodeForm";
import WorkTab from "../components/Work/WorkTab";
import { useMediaQuery } from "../hooks/useMediaQuery";

const splitMessage = (message: string): string => {
  const len = 36;
  const tab = 8;
  let newMessage = "";
  const words = message.split(" ");
  let countRow = 1;

  words.forEach((word) => {
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  const matches = useMediaQuery("(max-width: 767px)");

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
              <a
                href="https://www.youtube.com/@GoldFishNetinua"
                target="_blank"
              >
                YouTube channel
              </a>
            </ContactsItem>
            <ContactsItem>
              <FaExternalLinkAlt size={16} />
              <a href="https://www.linkedin.com/in/luzhnyak/" target="_blank">
                LinkedIn
              </a>
            </ContactsItem>
            <ContactsItem>
              <FaExternalLinkAlt size={16} />
              <a
                href="https://www.instagram.com/oleg.luzhnyak/"
                target="_blank"
              >
                Instagram accaunt
              </a>
            </ContactsItem>
          </ContactsList>
        </SidebarBlock>
      </Sidebar>
      <Work>
        <WorkTab title="contacts" rightBorder>
          <ContactForm
            name={name}
            email={email}
            message={message}
            setEmail={setEmail}
            setName={setName}
            setMessage={setMessage}
          />
        </WorkTab>
        {!matches && (
          <WorkTab>
            <CodeForm code={code} />
          </WorkTab>
        )}
      </Work>
    </Main>
  );
};

export default ContactPage;
