import styled from "styled-components";

// type Props = {
//   $justifyContent: string | undefined;
// };

export const GalleryWrapper = styled.div`
  /* background-color: aquamarine; */
  padding-top: 40px;
  padding-bottom: 40px;
  height: 100%;
  width: 100%;
  /* margin-top: 40px; */

  overflow-y: scroll;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media only screen and (max-width: 767px) {
    overflow-y: inherit;
  }
`;
