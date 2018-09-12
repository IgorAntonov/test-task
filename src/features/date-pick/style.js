import React from 'react';
import styled from 'styled-components';

import { media } from 'Src/ui';

export const Wrapper = styled.section`
  padding: 1rem;
  width: 100%;
  ${media.mobile`
    width: 90%;
  `}
  ${media.tablet`
    width: 70%;
  `}
  ${media.desktop`
    width: 50%;
  `}
  
`;

export const MonthHeader = styled.div`
  display: flex;
  align-items: center;

  fill: #666;
`;

export const Month = styled.h3`
  padding-left: 0.8rem;
  margin: 0;

  color: #666;
  font-family: sans-serif;
  cursor: default;
`;

export const ScrollWrapper = styled.div`
  width: 100%;
`;

export const CalendarIcon = () => (
  <svg width="25" height="22" viewBox="0 0 48 48">
    <path d="M18 22h-4v4h4v-4zm8 0h-4v4h4v-4zm8 0h-4v4h4v-4zm4-14h-2V4h-4v4H16V4h-4v4h-2c-2.22 0-3.98 1.8-3.98 4L6 40c0 2.2 1.78 4 4 4h28c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zm0 32H10V18h28v22z" />
  </svg>
);
