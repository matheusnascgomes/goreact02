import { all, takeLatest } from 'redux-saga/effects';

import { Types as ReposTypes } from '../ducks/repos';
import { addRepository } from './repos';

export default function* rootSaga() {
  yield all([
    takeLatest(ReposTypes.ADD_REQUEST, addRepository),
  ]);
}
