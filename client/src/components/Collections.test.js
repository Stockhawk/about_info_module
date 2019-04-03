import React from 'react';
import { shallow } from 'enzyme';

import Collections from './Collections';

describe('App', () => {
  it('should render correctly in debug mode', () => {
    const component = shallow(<Collections debug/>);
    expect(component).toMatchSnapshot();
  });
});
