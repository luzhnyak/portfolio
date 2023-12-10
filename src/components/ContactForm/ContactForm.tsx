import React, { FormEvent, useRef } from "react";
import { Button, FormWrapper, Input, Textarea } from "./ContactForm.styled";
import emailjs from "@emailjs/browser";
type Props = {
  name: string;
  email: string;
  message: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setMessage: (value: string) => void;
};

const ContactForm: React.FC<Props> = ({
  name,
  email,
  message,
  setName,
  setEmail,
  setMessage,
}) => {
  const form: any = useRef();

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email send: ", result.text);
        },
        (error) => {
          console.log("Email send filed: ", error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <FormWrapper>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="">
          _name:
          <Input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="from_name"
          />
        </label>
        <label htmlFor="">
          _email:
          <Input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="from_email"
          />
        </label>
        <label htmlFor="">
          _message:
          <Textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            name="message"
          />
        </label>
        <Button>submit-message</Button>
      </form>
    </FormWrapper>
  );
};

export default ContactForm;
