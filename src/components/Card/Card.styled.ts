import styled from "styled-components";

// type Props = {
//   $justifyContent: string | undefined;
// };

export const CardWrapper = styled.div`
  width: 360px;
`;

export const CardTitle = styled.h2`
  color: #5565e8;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 14px;

  & span {
    color: #607b96;
    font-weight: 450;
  }
`;

// export const CardWrapper = styled.div`
//   width: 360px;
// `;

export const CardContent = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  border-radius: 15px;
  border: 1px solid #1e2d3d;
  background: #011221;

  overflow: hidden;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 146px;
  object-fit: cover;
`;

export const CardText = styled.p`
  margin-top: 24px;
  margin-bottom: 22px;
  margin-left: 30px;
  margin-right: 30px;
  color: #607b96;
  font-family: Fira Code;
  font-size: 18px;
  font-style: normal;
  font-weight: 450;
  line-height: 150%; /* 27px */
  overflow-y: hidden;
  height: 54px;
`;

export const CardButton = styled.button`
  display: block;
  margin-top: 0px;
  margin-bottom: 22px;
  margin-left: 30px;
  margin-right: 30px;
  padding: 10px 14px;
  background-color: #1c2b3a;
  color: #fff;
  border-radius: 8px;
  border: none;
  text-align: right;
  font-size: 14px;
  font-weight: 450;

  &:hover {
    background-color: #1c5b3a;
  }
`;
