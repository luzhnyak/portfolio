import AboutContent from "../components/AboutContent/AboutContent";

const content = `
/**
* Education
*          
* IT School GoIT
* 2023
* Full Stack Developer
*
* Kamianets-Podilskyi State University
* 1999 – 2004
* Master, Physics and Informatics
*/
`.trim();

const AboutUniversityPages = () => {
  return <AboutContent content={content} />;
};

export default AboutUniversityPages;
