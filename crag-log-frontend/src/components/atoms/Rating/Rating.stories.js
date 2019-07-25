import React from 'react';
import { storiesOf } from '@storybook/react';
import Rating from './Rating';

storiesOf('Molecules/Rating', module)
  .add('1', () => <Rating value="1" />)
  .add('2', () => <Rating value="2" />)
  .add('5', () => <Rating value="5" />);
