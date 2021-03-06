/**
 * Types
 */

export const Types = {
  ADD_REQUEST: 'repos/ADD_REQUEST',
  ADD_SUCCESS: 'repos/ADD_SUCCESS',
  SELECT_REPO: 'repos/SELECT_REPO',
};

/**
 * Reducers
 */
const INITIAL_STATE = [];

export default function repos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_SUCCESS:
      return [...state, action.payload.data];
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  addRepositoryRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository },
  }),
  addRepositorySuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),
};

