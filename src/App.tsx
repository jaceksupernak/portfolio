import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/global';
import theme from './theme/theme';
import { SiteWrapper } from './theme/styledElements';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Eclipses from './components/eclipses/Eclipses';

const App:React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SiteWrapper>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Eclipses />
    </SiteWrapper>
  </ThemeProvider>
);

export default App;
