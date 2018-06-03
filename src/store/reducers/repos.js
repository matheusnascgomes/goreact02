const INITIAL_STATE = [{
  repositories: [],
}];


export default function repos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_REPOSITORY':
      return [...state, {
        repositories: action.payload,
      }];
    case 'LIST_REPOS':
      return state;

    default:
      return state;
  }
}
