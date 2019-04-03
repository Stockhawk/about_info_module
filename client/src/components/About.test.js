import React from 'react';
import { shallow } from 'enzyme';

import About from './About';

const props = {
  stockIngo: [
    {
      CEO: '',
      employees: '',
      HQc: '',
      HQs: '',
      founded: '',
      MC: '',
      AV: '',
      PER: '',
    },
  ],
};


describe('About', () => {
  it('should render correctly in debug mode', () => {
    const component = shallow(<About props={props}/>);
    expect(component).toMatchSnapshot();
  });
});
