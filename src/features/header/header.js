import React from 'react';

import {
  Wrapper, Main, Title,
  Tooltip, Icon, BackButton
} from './style';

export const Header = () => (
  <Wrapper>
    <Main>
      <BackButton>
        <Icon />
      </BackButton>
      <Title>
        Калининград
      </Title>
    </Main>
    <Tooltip>
      Шаг 1 из 5. Выберите дату:
    </Tooltip>
  </Wrapper>
);
