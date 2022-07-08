import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import Navbar from './components/Navbar';

const SiteWrapper = styled.div`
 width: 800px;
 background-color: green;
`;

const App:React.FC = () => (
  <>
    <GlobalStyle />
    <SiteWrapper>
      <Navbar />
    </SiteWrapper>
  </>
);

export default App;
