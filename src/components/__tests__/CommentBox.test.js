import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from '../../Root';

let wrapped;

// this beforeEach will run before ALL tests, even the ones inside describe blocks
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and 2 buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
  // this beforeEach will only run for the tests in the describe block
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      // When simulating an event, use the HTML name (change), not the React name(onChange)

      target: { value: 'new comment' } // gets passed into the handleChange event as a parameter (inside CommentBox.js, of course)
    });
    wrapped.update(); // Because React's setState updates the component asynchronously, we have to make sure the component is updated before making any assertions
  });

  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('has a text area that gets emptied on form submit', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
