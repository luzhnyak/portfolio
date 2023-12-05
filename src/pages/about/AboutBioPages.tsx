import AboutContent from "../../components/AboutContent/AboutContent";

const content = `
/**
* About me 
*
* I am a junior Full Stack Developer with a passion 
* for technology and software development.
* During my education at GoIT IT school, I acquired 
* a solid understanding of essential technologies 
* and programming languages, including HTML, CSS, 
* JavaScript, and React.
*
* My experience includes working on a variety of projects, 
* including two group projects where I served as a Team Lead.
* This allowed me to develop skills in teamwork, 
* project organization, and management.
* 
* Before embarking on my formal IT education, 
* I actively honed my skills by creating websites 
* for myself and friends. This experience allowed me 
* to experiment freely and refine my knowledge.
* 
* I have a strong drive for improvement and creativity, 
* always eager to learn new technologies and apply them to 
* different projects. I approach each task meticulously 
* and strive to find optimal technical solutions. 
*
* I am seeking opportunities for further professional 
* growth and to collaborate on exciting projects in the 
* software development field.
*/
`.trim();

const AboutBioPages = () => {
  return <AboutContent content={content} />;
};

export default AboutBioPages;
