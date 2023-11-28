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

export const FilterTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #1e2d3d;
  padding-left: 22px;
  color: #fff;
`;

export const FilterTitle = styled.div`
  padding: 10px;
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
