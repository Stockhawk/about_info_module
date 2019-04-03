import React from 'react';
import { shallow } from 'enzyme';

import UserInfo1 from './UserInfo1';

const props = {
  stockIngo: [
    {
      equity: '',
      cost: '',
      TR: '',
    },
  ],
};


describe('UserInfo1', () => {
  it('should render correctly in debug mode', () => {
    const component = shallow(<UserInfo1 debug props={ props }/>);
    expect(component).toMatchSnapshot();
  });
});
