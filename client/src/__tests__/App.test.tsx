import React from 'react';
import { shallow } from 'enzyme';
import App from "../App"

describe('App component', () => {
  test('should render App component', () => {
    const wrapper = shallow(<App />);
    const AppComponent = wrapper.find("[data-test-id='task-manager-app']");
    expect(AppComponent.length).toBe(1);
  })
});