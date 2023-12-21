import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";

import {
  FooterItem,
  FooterLink,
  FooterList,
  FooterSpan,
  FooterWrapper,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <nav>
        <FooterList>
          <FooterItem className="start">
            <FooterSpan>find me in:</FooterSpan>
          </FooterItem>
          <FooterItem>
            <FooterLink
              href="https://www.linkedin.com/in/luzhnyak/"
              target="_blank"
            >
              <FaLinkedinIn size={24} />
            </FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink
              href="https://www.facebook.com/luzhnyak/"
              target="_blank"
            >
              <FaFacebookF size={24} />
            </FooterLink>
          </FooterItem>
          <FooterItem className="end">
            <FooterLink href="https://github.com/luzhnyak" target="_blank">
              <span className="md">@luzhnyak </span>
              <FaGithub size={24} />
            </FooterLink>
          </FooterItem>
        </FooterList>
      </nav>
    </FooterWrapper>
  );
};

export default Footer;
