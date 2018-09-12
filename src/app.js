import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';

import './ui/global-styles';
import { Header } from './features/header';

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const App = () => (
  <Grid>
    <Header />
  </Grid>
);

export const HotApp = hot(module)(App);
