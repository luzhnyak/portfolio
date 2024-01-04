import styled from "styled-components";

export const LayoutWrapper = styled.div`
  position: relative;
  margin: 16px;
  border-radius: 8px;
  border: 1px solid #1e2d3d;
  background-color: #011627;
  overflow: hidden;
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-rows: 56px 1fr 50px;
    height: calc(100vh - 32px);
  }
  /* padding: 16px; */
`;
