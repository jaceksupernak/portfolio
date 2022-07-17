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
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Eclipses from './components/eclipses/Eclipses';
import BottomLine from './components/bottomline/BottomLine';

const App:React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SiteWrapper>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Eclipses />
    </SiteWrapper>
    <BottomLine />
  </ThemeProvider>
);

export default App;
