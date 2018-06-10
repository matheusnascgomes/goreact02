/**
 * Types
 */

export const Types = {
  ADD: 'repos/ADD',
  LIST: 'repos/LIST',
};

/**
 * Reducers
 */
const INITIAL_STATE = [];

export default function repos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return [...state, {
        id: 2,
        name: 'vuejs',
        organization: 'vue',
      }];

    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  addRepository: () => ({
    type: Types.ADD,
  }),
};

