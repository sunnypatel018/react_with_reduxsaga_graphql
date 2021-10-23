import { takeLatest, put, call, all } from 'redux-saga/effects';
import { fetchData } from '../../api/api';
import { REQUEST_API_DATA } from '../action/countAction';
import { receiveData } from '../action/countAction';




// const delay = (ms) => new Promise((res) => setTimeout(res, ms));
// function* ageUpAsync() {
//     yield call(delay, 2000);
//     yield put({ type: 'AGE_UP_ASYNC', value: 1 });
// }



function* requestDataAsync(action) {
    const data = yield call(fetchData, action.cityName);
    yield put(receiveData(data));
}

export function* actionWatcher() {
    yield all([
        // takeLatest(AGE_UP, ageUpAsync),
        takeLatest(REQUEST_API_DATA, requestDataAsync),
    ]);
}
