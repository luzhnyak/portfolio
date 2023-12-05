import AboutContent from "../components/AboutContent/AboutContent";
import { aboutData } from "../data/aboutData";

type Props = {
  slug: "bio" | "work" | "university" | "interests" | "certifications";
};

const AboutContentPages: React.FC<Props> = ({ slug }) => {
  const content = aboutData[slug];
  return <AboutContent content={content} />;
};

export default AboutContentPages;
