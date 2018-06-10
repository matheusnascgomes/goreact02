import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as ReposActions } from '../ducks/repos';

export function* addRepository(action) {
  const { data } = yield call(api.get, `repos/${action.payload.repository}`);

  const repositoryData = {
    id: data.id,
    name: data.name,
    organization: data.organization.login,
    avatar: data.owner.avatar_url,
  };

  yield put(ReposActions.addRepositorySuccess(repositoryData));
}
