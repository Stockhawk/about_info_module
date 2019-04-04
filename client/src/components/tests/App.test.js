import React from 'react';
import { shallow, render } from 'enzyme';

import App from '../App';


describe('UserInfo1', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
