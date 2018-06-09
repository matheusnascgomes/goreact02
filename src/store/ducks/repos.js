/**
 * Types
 */

export const Types = {
  ADD: 'repos/add',
  LIST: 'repos/list',
};


/**
 * Reducers
 */
const INITIAL_STATE = [{
  id: 1,
  name: 'react',
  organizatiion: 'facebook',
}];

export default function repos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return [...state];
    case Types.LIST:
      return state;

    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  addRepository: repositories => ({
    type: Types.ADD,
    payload: { repositories },
  }),
  listRepositories: repositories => ({
    type: Types.LIST,
    payload: { repositories },
  }),
};

