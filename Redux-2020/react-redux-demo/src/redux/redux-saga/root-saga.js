import {all} from 'redux-saga/effects';
import {fetchData} from './sagas';

export default function* rootSaga(){
  yield all([fetchData()])
}