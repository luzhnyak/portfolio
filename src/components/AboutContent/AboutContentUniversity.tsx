import React from "react";
import { ContentWrapper } from "./AboutContent.styled";

const AboutContentUniversity = () => {
  return (
    <ContentWrapper>
      <pre>
        <code>
          {`
1
2
3
4
5
6
7
8
10
`}
        </code>
      </pre>
      <pre>
        <code>
          {`
* Education
*          
* IT School GoIT
* 2023
* Full Stack Developer
*
* Kamianets-Podilskyi State University
* 1999 – 2004
* Master, Physics and Informatics
`}
        </code>
      </pre>
    </ContentWrapper>
  );
};

export default AboutContentUniversity;
