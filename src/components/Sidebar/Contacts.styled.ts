import styled from "styled-components";

export const ContactsList = styled.ul`
  margin-left: 0;
  padding: 16px;
  list-style: none;
`;

export const ContactsItem = styled.li`
  margin-left: 0;

  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  & a {
    color: #607b96;
  }
`;
