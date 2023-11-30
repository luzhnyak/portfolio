import styled from "styled-components";

// type Props = {
//   $justifyContent: string | undefined;
// };

export const FormWrapper = styled.div`
  width: 372px;
  padding: 16px;
  /* border: 1px solid #1e2d3d; */
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px 15px;
  margin-top: 10px;
  margin-bottom: 24px;
  border: 1px solid #1e2d3d;
  border-radius: 8px;
  background: #011221;
  color: #465e77;
  font-size: 16px;
  font-weight: 450;
`;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  height: 145px;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 24px;
  border: 1px solid #1e2d3d;
  border-radius: 8px;
  background: #011221;
  color: #465e77;
  font-size: 16px;
  font-weight: 450;
  resize: none;
  scrollbar-color: #011221;
`;

export const Button = styled.button`
  color: #fff;
  font-size: 14px;
  font-weight: 450;
  padding: 10px 14px;
  border-radius: 8px;
  background: #1c2b3a;
  border: none;
`;
