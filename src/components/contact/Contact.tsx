import React from 'react';
import Button from '../button/Button';
import wavyLine from '../../assets/wavy_line.png';
import emailIcon from '../../assets/email_icon.png';
import {
  ContactContainerStyled,
  ContactTextStyled,
  WavyLineStyled,
  ButtonStyleWrapper,
} from './Contact.styled';

const Contact:React.FC = () => (
  <ContactContainerStyled id="contact">

    <ContactTextStyled>
      Let&apos;s get in touch!
      <WavyLineStyled src={wavyLine} alt="underline" />
    </ContactTextStyled>

    <ButtonStyleWrapper>
      <Button
        type="tertiary"
        text="jjsupernak@gmail.com"
        href="mailto:jjsupernak@gmail.com"
        width="480px"
        height="115px"
        fontSize="2rem"
        icon={{
          src: emailIcon,
          alt: 'envelope',
          height: '70px',
          width: '70px',
          gapToText: '20px',
        }}
        toLowerCase
        lightWeight
      />
    </ButtonStyleWrapper>

  </ContactContainerStyled>
);

export default Contact;
