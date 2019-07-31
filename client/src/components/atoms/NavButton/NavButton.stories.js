import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import routesIcon from 'assets/icons/routes.svg';
import statsIcon from 'assets/icons/stats.svg';
import NavButton from './NavButton';

const GreenBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  background: ${({ theme }) => theme.color1};
`;

storiesOf('Atoms/NavButton', module)
  .addDecorator(story => <GreenBackground>{story()}</GreenBackground>)
  .add('Not active', () => <NavButton icon={routesIcon}>Routes</NavButton>)
  .add('active', () => (
    <NavButton className="active" icon={statsIcon}>
      Stats
    </NavButton>
  ));
