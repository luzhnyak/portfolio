import styled from "styled-components";

// type Props = {
//   $justifyContent: string | undefined;
// };

export const GalleryWrapper = styled.div`
  /* background-color: aquamarine; */
  height: 90%;
  margin-top: 40px;

  overflow-y: scroll;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
