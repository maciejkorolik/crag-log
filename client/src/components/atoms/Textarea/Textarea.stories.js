import React from 'react';
import { storiesOf } from '@storybook/react';
import Textarea from './Textarea';

storiesOf('Atoms/Textarea', module)
  .add('Normal', () => <Textarea placeholder="login" />)
  .add('width/height defined', () => (
    <Textarea placeholder="width/height defined" width="200px" height="200px" />
  ));
