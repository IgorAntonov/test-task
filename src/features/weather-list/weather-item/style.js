import styled from 'styled-components';

import { media } from 'Src/ui';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid #e0e2e5;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Time = styled.div`
  flex: 1;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: sans-serif;
  cursor: default;
`;

export const Temp = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  font-family: sans-serif;
  color: #3f51b5;
  cursor: default;
`;

export const Info = styled.div`
  padding-top: 0.7rem;

  font-family: sans-serif;
  color: #666;
  cursor: default;
`;

export const NoForecast = styled.div`
  text-align: right;
  flex: 1;
  padding: 0.7rem 0;

  font-family: sans-serif;
  color: #666;
  cursor: default;

  font-size: 0.9rem;
  text-align: right;
  ${media.mobile`
    font-size: 1.1rem;
    flex: 2;
  `}
`;
