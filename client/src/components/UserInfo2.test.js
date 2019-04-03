import React from 'react';
import { shallow } from 'enzyme';

import UserInfo2 from './UserInfo2';
import props from './UserInfo2';

describe('UserInfo2', () => {
  it('should render correctly in debug mode', () => {
    const component = shallow(<UserInfo2 debug props={ props }/>);
    expect(component).toMatchSnapshot();
  });
});
