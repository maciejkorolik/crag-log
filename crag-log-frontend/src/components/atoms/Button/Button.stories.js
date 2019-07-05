import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Atoms/Button', module)
  .add('Primary', () => <Button>normal button</Button>)
  .add('Secondary', () => <Button secondary>secondary button</Button>);
