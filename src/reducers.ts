import { combineReducers, Reducer } from 'redux';

// Define the types for your state and actions
interface SomeState {
  // Define your state properties here...
}

// Define the actions enum and its corresponding action types
enum SomeActionTypes {
  SOME_ACTION_1 = 'SOME_ACTION_1',
  SOME_ACTION_2 = 'SOME_ACTION_2',
  // Add more action types as needed...
}

// Define the action interfaces for each action type
interface SomeAction1 {
  type: SomeActionTypes.SOME_ACTION_1;
  payload: any; // Add this if your action has payload data
}

interface SomeAction2 {
  type: SomeActionTypes.SOME_ACTION_2;
  // Add additional properties for this action type if needed...
}

type SomeAction = SomeAction1 | SomeAction2;

// Define the initial state
const initialState: SomeState = {
  // Your initial state properties here...
};

// Create the reducer with the state and action types
const someReducer: Reducer<SomeState, SomeAction> = (state = initialState, action) => {
  switch (action.type) {
    case SomeActionTypes.SOME_ACTION_1:
      // Handle SOME_ACTION_1 here...
      return state;
    case SomeActionTypes.SOME_ACTION_2:
      // Handle SOME_ACTION_2 here...
      return state;
    // Add more cases for other action types if needed...
    default:
      return state;
  }
};

// Combine the reducers
const rootReducer = combineReducers({
  someReducer,
  // Add more reducers as needed...
});

export default rootReducer;