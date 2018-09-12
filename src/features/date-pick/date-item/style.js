import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;

  font-family: sans-serif;
  color: #333;
`;

export const Day = styled.p`
  margin: 0;

  text-transform: uppercase;
  font-size: 0.9rem;
`;

export const Date = styled.p`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 50%;

  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.3s all;
  ${({ isSelected }) => isSelected && css`
    color: #3f51b5;
    background-color: #e8eaf6;
  `}
  :hover {
    background-color: #e8eaf6;
  }
`;

export const DummyData = styled.p`
  margin: 0;
`;
