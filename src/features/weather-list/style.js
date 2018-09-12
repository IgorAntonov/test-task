import styled from 'styled-components';

import { media } from 'Src/ui';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${media.tablet`
    width: 75%;
  `}
  ${media.desktop`
    width: 55%;
  `}
`;

export const Header = styled.h3`
  font-family: sans-serif;
  color: #666;
  cursor: default;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
