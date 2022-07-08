import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import Eclipses from './components/Eclipses';
import Navbar from './components/Navbar';

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
