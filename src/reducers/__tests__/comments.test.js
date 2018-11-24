import commentsReducer from '../../reducers/comments'; // Went up 2 directories just to make it clear we're importing a reducer :)
import { SAVE_COMMENT } from '../../actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  // Testing a reducer:
  // 1) Call the reducer
  // 2) Pass in a 'fake' action. We don't have to call any action creator
  // 3) Make an assertion around the value the reducer returns

  // Creating the fake action
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  };

  // Call the reducer and pass in the fake action
  const newState = commentsReducer([], action);

  // Make our assertion
  expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
  const newState = commentsReducer([], { type: 'TYPE_DOESNT_EXIST' }); // action.type is a type that doesn't exist to us

  expect(newState).toEqual([]);
});
