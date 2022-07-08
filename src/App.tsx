import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import Eclipses from './components/eclipses/Eclipses';
import Navbar from './components/navbar/Navbar';

const SiteWrapper = styled.div`
  width: 800px;
  position: relative;
`;

const App:React.FC = () => (
  <>
    <GlobalStyle />
    <SiteWrapper>
      <Navbar />
      <Eclipses />
    </SiteWrapper>
  </>
);

export default App;
