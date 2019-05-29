import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import request from 'supertest';

describe('App renders UI properly', () => {

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders main action button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('button').exists()).toEqual(true);
  })
});

describe('Backend API is responding', () => {

  it('API request should respond with 200 status', async () => {
    request(`localhost:3000`).get(`/api`)
      .expect(200, {
        statusCode: 200,
      })
  });

  it('API responds with JSON content type', async () => {
    request(`localhost:3000`).get(`/api`)
      .expect('Content-Type', /json/);
  });

});