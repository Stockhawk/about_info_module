import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';

import About from '../About';


describe('About', () => {
  const props = {
    stockInfo: [
      {
        CEO: '',
        employees: '',
        description: '',
        HQc: '',
        HQs: '',
        founded: '',
        MC: '',
        AV: '',
        PER: '',
      },
    ],
  };
  test('should render correctly', () => {
    const wrapper = shallow(<About {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
});
