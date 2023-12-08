import styled from "styled-components";

// type Props = {
//   $justifyContent: string | undefined;
// };

export const CodeSnippetWrapper = styled.div`
  /* max-width: 700px; */
  padding: 16px;
`;

export const CodeSnippetTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  margin-bottom: 12px;
  text-align: left;
  .end {
    margin-left: auto;
  }
`;

export const CodeSnippetContent = styled.div`
  border-radius: 15px;
  border: 1px solid #1e2d3d;
  background: #011221;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  display: block;
  width: 36px;
  height: 36px;
`;

export const UserName = styled.p`
  padding: 0;
  margin: 0;
  margin-bottom: 2px;
  color: #5565e8;
  font-size: 14px;
  font-weight: 700;
`;

export const DateCreate = styled.p`
  padding: 0;
  margin: 0;
  color: #607b96;
  font-size: 12px;
  font-weight: 450;
`;

export const Details = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #607b96;
  font-size: 14px;
  font-weight: 450;
`;
