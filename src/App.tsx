import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/global';
import theme from './theme/theme';
import Eclipses from './components/eclipses/Eclipses';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

const SiteWrapper = styled.div`
  width: 100%;
  max-width: 800px; 
  position: relative;
  padding: 10px;
`;

const App:React.FC = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <SiteWrapper>
        <Navbar />
        <Hero />
        <Eclipses />
      </SiteWrapper>
    </>
  </ThemeProvider>
);

export default App;
