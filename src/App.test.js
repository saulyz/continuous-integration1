import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App renders UI properly', () => {

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders main action button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('button').exists()).toEqual(true);
  })
});