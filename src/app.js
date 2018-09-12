import React from 'react';
import { hot } from 'react-hot-loader';

import './ui/global-styles';

const App = () => (
  <div>Hello</div>
);

export const HotApp = hot(module)(App);
