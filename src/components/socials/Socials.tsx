import React from 'react';
import SocialIcon from '../socialicon/SocialIcon';
import githubIcon from '../../assets/github_icon.png';
import linkedinIcon from '../../assets/linkedin_icon.png';
import twitterIcon from '../../assets/twitter_icon.png';
import SocialsStyled from './Socials.styled';

const Socials:React.FC = () => (
  <SocialsStyled>

    <SocialIcon
      src={githubIcon}
      href="https://github.com/jaceksupernak"
      alt="GitHub"
    />
    <SocialIcon
      src={linkedinIcon}
      href="https://www.linkedin.com/in/jacek-supernak"
      alt="LinkedIn"
    />
    <SocialIcon
      src={twitterIcon}
      href="https://twitter.com/jacek_supernak"
      alt="Twitter"
    />

  </SocialsStyled>

);

export default Socials;
