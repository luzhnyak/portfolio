import React from "react";
import { ContentWrapper } from "./AboutContent.styled";

const ContentWork = () => {
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
11
12
`}
        </code>
      </pre>
      <pre>
        <code>
          {`
* Work
*          
* ARS-ceramica (Computer systems engineer)
* January 2006 - March 2023 (17 years 3 months)
* Maintenance of: computer equipment, 
* video surveillance systems, security signaling, 
* telephony.
*
* Ukravto (Analyst manager)
* July 2004 - May 2005 (11 months)
* Analyzed product sales. Ordered goods from suppliers.
`}
        </code>
      </pre>
    </ContentWrapper>
  );
};

export default ContentWork;
