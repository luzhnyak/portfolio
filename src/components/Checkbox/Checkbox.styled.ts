import styled from "styled-components";

// type Props = {
//   $justifyContent: string | undefined;
// };

export const CheckboxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const CheckboxIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: 1px solid #607b96;
`;

export const Label = styled.label`
  /* background-color: blue; */
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Input = styled.input`
  appearance: none;
  width: 0;
  height: 0;
`;
