import React from 'react';
import styled from 'styled-components';

const ContactContainerStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 34px;
    padding: 50px;
    background: ${({ theme }) => `linear-gradient(98.09deg, ${theme.primaryDarkBrighter} -31.03%, ${theme.secondaryLightBrighter} 79.54%)`};
`;

const ContactTextStyled = styled.span`
    font-weight: bold;
    font-size: 3rem;
    color: ${({ theme }) => theme.primaryDark};
`;

const Contact:React.FC = () => (
  <ContactContainerStyled>
    <ContactTextStyled>Let&apos;s get in touch</ContactTextStyled>
  </ContactContainerStyled>
);

export default Contact;
