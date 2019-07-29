import React from 'react';
import { storiesOf } from '@storybook/react';
import ColumnChart from './ColumnChart';

const mockData = [
  { grade: '4b', value: 1 },
  { grade: '4c', value: 1 },
  { grade: '5a', value: 2 },
  { grade: '5b', value: 1 },
  { grade: '5c', value: 3 },
  { grade: '6a+', value: 1 },
  { grade: '6b', value: 5 },
];

storiesOf('Molecules/ColumnChart', module).add('Normal', () => <ColumnChart data={mockData} />);
