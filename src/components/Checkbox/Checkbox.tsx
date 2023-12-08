import React from "react";
import { FaCheck } from "react-icons/fa";
import { CheckboxIcon, CheckboxWrapper, Input, Label } from "./Checkbox.styled";

type Props = {
  id: string;
  name: string;
  checked: boolean | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
};

const Checkbox: React.FC<Props> = ({
  children,
  id,
  name,
  checked,
  onChange,
}) => {
  return (
    <CheckboxWrapper>
      <Label htmlFor={id}></Label>
      <CheckboxIcon>{checked && <FaCheck size={12} />}</CheckboxIcon>
      <Input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {children}
    </CheckboxWrapper>
  );
};

export default Checkbox;
