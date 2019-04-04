import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';

import Collections from '../Collections';

describe('Collection', () => {
  test('render', () => {
    const wrapper = shallow(<Collections />);
    expect(wrapper.exists()).toBe(true);
  });
});
