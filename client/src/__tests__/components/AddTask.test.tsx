import React from 'react';
import { shallow } from 'enzyme';
import AddTask from "../../components/AddTask"

describe('AddTask component', () => {
  test('should render AddTask component', () => {
    const wrapper = shallow(<AddTask />);
    const AppComponent = wrapper.find("[data-test-id='add-task-component']");
    expect(AppComponent.length).toBe(1);
  })
});