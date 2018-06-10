import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { 'action' }  from '...'

export function* addRepo(action) {
  const { data } = yield call(api.get, `repos/${action.payload.repository}`);

  const repositoryData = {
    id: data.id,
    name: data.full_name,
    organization: data.organization,
    url: data.url,
  };

  yield put((repositoryData));

}
