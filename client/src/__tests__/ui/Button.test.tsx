import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../ui/Button';

describe('UI Button component', () => {
 it('renders buttonText correctly', () => {
    const buttonText = 'Click me';
    const wrapper = shallow(<Button buttonText={buttonText} clickHandler={() => {}} />);
    expect(wrapper.text()).toEqual(buttonText);
  });

  it('test click handler on button click', () => {
    const clickHandlerMock = jest.fn();
    const wrapper = shallow(<Button buttonText="Click me" clickHandler={clickHandlerMock} />);
    wrapper.find('button').simulate('click');
    expect(clickHandlerMock).toHaveBeenCalled();
  });
  it('renders button with default variant if no variant is provided', () => {
    const wrapper = shallow(<Button buttonText="Click me" clickHandler={() => {}} />);
    expect(wrapper.find('.btn').hasClass('default')).toBe(true);
  });

  // Test case 4: Renders button with provided variant
  it('renders button with provided variant', () => {
    const wrapper = shallow(<Button buttonText="Click me" varient="primary" clickHandler={() => {}} />);
    expect(wrapper.find('.btn').hasClass('primary')).toBe(true);
  });
});
