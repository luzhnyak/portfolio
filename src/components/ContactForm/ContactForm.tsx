import React from "react";
import { Button, FormWrapper, Input, Textarea } from "./ContactForm.styled";

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
  return (
    <FormWrapper>
      <form>
        <label htmlFor="">
          _name:
          <Input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label htmlFor="">
          _email:
          <Input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label htmlFor="">
          _message:
          <Textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <Button>submit-message</Button>
      </form>
    </FormWrapper>
  );
};

export default ContactForm;
