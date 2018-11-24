import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios'; // when writing tests through a fake browser environment (command line), we have to make a mock request with moxios. Moxios tricks axios into thinking that a request was actually issued
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install(); // Essentially stops all axios requests from being made
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }] // the fake response array
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  // 1. Attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // 2. Find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');

  // 3. Introduce a TINY little pause. Moxios.wait waits until moxios is done its thing, and ready to make its thing
  moxios.wait(() => {
    wrapped.update();

    // 4. Expect to find the list of comments
    expect(wrapped.find('li').length).toEqual(2);

    // Tells Jest we're done with the test suite
    done();
    wrapped.unmount();
  });
});
