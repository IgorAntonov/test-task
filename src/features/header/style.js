import React from 'react';
import styled from 'styled-components';

import { media } from 'Src/ui';

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #e0e2e5;
`;

export const Main = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${media.mobile`
    width: 50%;
  `}
  min-height: 3rem;
`;

export const Title = styled.h2`
  margin: 0.5rem 0;
  color: #3f51b5;
  cursor: default;
`;

export const Tooltip = styled.p`
  margin: 0.5rem 0;

  color: #666;
  cursor: default;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 3rem;
  height: 3rem;
  padding: 0;
  border: none;
  
  background-color: transparent;
  fill: #3f51b5;
  cursor: pointer;
  outline: none;
  
  transition: 0.1s transform;
  :active {
    transform: translateX(-5%);
  }
`;

export const Icon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <path d="M30.83 32.67l-9.17-9.17 9.17-9.17L28 11.5l-12 12 12 12z" />
  </svg>
);
