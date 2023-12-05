import AboutContent from "../../components/AboutContent/AboutContent";

const content = `
/**
* My interests are marked by diversity and activity,
* reflecting my love for nature and physical engagement.
* 
*          
* Fishing:
* Since my early childhood, fishing has evolved from a mere
* hobby to a true passion. Ventures to serene water bodies,
* the tranquility, and the harmony of nature during fishing
* inspire me. I believe in the importance of preserving the
* natural environment and ethical fishing, where each caught
* specimen is returned to the water. My experiences and
* achievements in this pursuit add color to my life.
* 
* Cycling:
* Cycling is another significant passion of mine. I adore
* the feeling of the wind on my face during a swift ride
* and discovering new places and routes on two wheels.
* Cycling for me is not just physical activity but also
* a way to maintain a healthy lifestyle
* and high energy levels.
*
* These two pursuits not only define my personality but
* also testify to my dedication to nature, health, and
* an active way of life. I am confident that these diverse
* interests will help me apply and develop various skills
* in different aspects of life.
*/
`.trim();

const AboutInterestsPage = () => {
  return <AboutContent content={content} />;
};

export default AboutInterestsPage;
