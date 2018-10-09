import React from 'react';
import SummaryView from '../client/src/components/SummaryView';

test('App renders component correctly', () => {
  const component = global.shallow(<SummaryView />);
  expect(component).toMatchSnapshot();
});
