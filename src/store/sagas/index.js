import { all, takeLatest } from 'redux-saga/effects';

import { addRepos } from './repos';

export default function* rootSaga(){
    yield all([
        takeLatest('TYPE', addRepos),
    ]);
}
