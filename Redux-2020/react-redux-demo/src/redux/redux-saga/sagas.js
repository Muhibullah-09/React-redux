import { call, put,  takeLatest } from "redux-saga/effects";

import {
    FETCH_POSTS_REQUEST,
    fetchPostsSuccess,
    fetchPostsFailure
} from "./actions";
import axios from 'axios'

function* fetch_post_success() {
    try {
        const data = yield call(axios.get, ['https://jsonplaceholder.typicode.com/posts']);
        yield put(fetchPostsSuccess(data));
    } catch (e) {
        // console.log(e);
        yield put(fetchPostsFailure('Something is Going Wrong!'));
    }
}


export function* fetchData() {
    yield takeLatest(FETCH_POSTS_REQUEST, fetch_post_success);
}