import React from 'react';
import { storiesOf } from '@storybook/react';
import Grade from './Grade';

storiesOf('Atoms/Grade', module).add('Primary', () => <Grade grade="9c">9c</Grade>);
