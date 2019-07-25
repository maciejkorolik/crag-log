import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select';

storiesOf('Atoms/Select', module)
  .add('Normal', () => (
    <Select placeholder="login">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </Select>
  ))
  .add('width defined', () => (
    <Select width="200px">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </Select>
  ));
