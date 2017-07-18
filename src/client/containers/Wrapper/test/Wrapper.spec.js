import React from 'react';
import { expect } from 'chai'
import { mount, shallow } from 'enzyme';
import AdsTable from '../../AdsTable';
import Wrapper from '../index';

describe('<Wrapper />', () => {
  const wrapper = shallow(<Wrapper />);
  it('should render one AdsTable component', () => {
    expect(wrapper.find(AdsTable)).to.have.length(1);
  })
})