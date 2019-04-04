import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';

import UserInfo1 from '../UserInfo1';

describe('UserInfo1', () => {
  const props = {
    stockInfo: [
      {
        equity: '',
        cost: '',
        TR: '',
      },
    ],
  };
  test('render correctly', () => {
    console.log('props', props);
    const wrapper = shallow(<UserInfo1 {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
});
