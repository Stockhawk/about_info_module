import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';

import UserInfo2 from '../UserInfo2';

describe('UserInfo2', () => {
  const props = {
    stockInfo: [
      {
        AV: '',
        shares: '',
        PD: '',
      },
    ],
  };
  test('render correctly', () => {
    const wrapper = shallow(<UserInfo2 {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
});
