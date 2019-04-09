import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';

import Hover from '../Hover.jsx';


describe('Hover', () => {

  const props = {
    tags: [
      {
        symbols: ['', '', '', '', ''],
        price: ['', '', '', '', ''],
      },
    ],
  };

  test('render', () => {
    const wrapper = shallow(<Hover {...props}/>);
    expect(wrapper.exists()).toBe(true);
  });
});
