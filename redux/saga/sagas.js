import { put, takeLatest, all, call } from 'redux-saga/effects';
import {START_FETCH} from '../actionTypes';
import { loadToState } from '../actions';

let date = new Date();
let since = date.toISOString().slice(0, 10);
date = new Date(date.getTime() + 1000 * 60 * 60 * 24 * 10)
let till = date.toISOString().slice(0, 10);

const fetchSkyScanner = async () => {
  const resp = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/RUB/en-US/SFO-sky/ORD-sky/${since}?inboundpartialdate=${till}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": "98b60516c1mshcef2662272b0c82p166559jsnc414fdca814f"
    }
  });
  const result = await resp.json();
  return result;
}

function* fetchData() {
  const data = yield call(fetchSkyScanner);
  yield put(loadToState(data));
}

 function* actionWatcher() {
  yield takeLatest(START_FETCH, fetchData)
}

export default function* rootSaga() {
  yield all([actionWatcher()])
} 
