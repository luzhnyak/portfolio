import styled from "styled-components";

export const FilterWrapper = styled.div`
  /* width: 100%; */
  padding: 16px;
  color: #607b96;
  font-size: 16px;
  font-weight: 400;
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
