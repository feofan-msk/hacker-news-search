import { takeLatest, all } from 'redux-saga/effects';
import { STORIES_FETCH } from '../constants/actionTypes';
import { handleFetchStories } from './story';

function* watchAll() {
  yield all([takeLatest(STORIES_FETCH, handleFetchStories)]);
}

export default watchAll;
