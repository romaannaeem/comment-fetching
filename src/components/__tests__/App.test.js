import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />); // documentation calls this 'wrapped', hence name choice. Calling it 'component' would be more clear
});

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1); // find() returns an array of every instance found of whatever it has as a parameter. CommentBox in this case. Thus we can call .length after
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
