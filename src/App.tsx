import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/global';
import theme from './theme/theme';
import Eclipses from './components/eclipses/Eclipses';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';

const SiteWrapper = styled.div`
  width: 100%;
  max-width: 800px; 
  position: relative;
  padding: 10px;
`;

export const Heading1Styled = styled.h1`
  font-size: 4rem;
  line-height: 80%;
  margin: 20px 0;

  @media (min-width: ${theme.screen.tablet}) {
    font-size: 3rem;
  }
  @media (min-width: ${theme.screen.laptop}) {
    margin-top: 4px;
    margin-bottom: 25px;
    font-size: 6rem;
    position: relative;
    left: -5px;
    text-align: left;
  }
`;

export const Heading2Styled = styled.h2`
  font-size: 3rem;

  @media (min-width: ${theme.screen.tablet}) {
    font-size: 4rem;
    }
  @media (min-width: ${theme.screen.laptop}) {
    font-size: 5rem;
    
  }
`;

export const Heading3Styled = styled.h3`
  font-size: 1.6rem;
  letter-spacing: 0.2rem;
  font-weight: 400;
`;

export const SectionHeadingStyled = styled.h5`
  text-transform: uppercase;
  margin-top: 50px;
  margin-bottom: 5px;
  font-family: ${theme.secondaryFontFamily};
  font-weight: 400;
  letter-spacing: 0.13rem; 
`;

export const ParagraphStyled = styled.p`
  max-width: 300px;
  text-align: justify;
  font-family: ${theme.secondaryFontFamily};
  @media (min-width: ${theme.screen.tablet}) {
            max-width: 465px;
            font-size: 1.2rem;
    }
  @media (min-width: ${theme.screen.laptop}) {
    max-width: 406px;
    
  }
`;

export const SpanLight = styled.span`
  font-weight: 100;
  font-size: 1rem;
  margin: 5px 0;
`;

const App:React.FC = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <SiteWrapper>
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Eclipses />
      </SiteWrapper>
    </>
  </ThemeProvider>
);

export default App;
