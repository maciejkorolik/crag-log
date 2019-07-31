import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Atoms/Input', module)
  .add('Normal', () => <Input placeholder="login" />)
  .add('Date', () => <Input type="date" />)
  .add('smaller', () => <Input placeholder="smaller" small />)
  .add('width defined', () => <Input placeholder="width defined" small width="200px" />);
