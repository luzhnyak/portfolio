import styled from "styled-components";

export const FilterWrapper = styled.div`
  /* width: 100%; */
  color: #607b96;
  font-family: Fira Code;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FilterList = styled.ul`
  list-style: none;
`;

export const FilterItem = styled.li`
  margin-bottom: 16px;
  & label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
  }
`;
