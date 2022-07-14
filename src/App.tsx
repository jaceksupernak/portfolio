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

export const SectionHeaderStyled = styled.h5`
  text-transform: uppercase;
  margin-top: 50px;
  margin-bottom: 5px;
  font-family: ${theme.secondaryFontFamily};
  font-weight: 400;
  letter-spacing: 0.13rem; 
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
