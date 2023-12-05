import AboutContent from "../../components/AboutContent/AboutContent";

const content = `
/**
* Certifications
*          
* Основи Web UI розробки 2022
* 
* Introduction to TensorFlow for Artificial
* Intelligence, Machine Learning, and Deep Learning
* 
* Convolutional Neural Networks in TensorFlow
*/
`.trim();

const AboutCertificationsPage = () => {
  return <AboutContent content={content} />;
};

export default AboutCertificationsPage;
