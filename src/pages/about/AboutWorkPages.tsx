import AboutContent from "../../components/AboutContent/AboutContent";

const content = `
/**
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
*/
`.trim();

const AboutWorkPages = () => {
  return <AboutContent content={content} />;
};

export default AboutWorkPages;
