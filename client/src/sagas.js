import { all, call, put, takeEvery } from 'redux-saga/effects'

function* helloWorld() {
  console.log('helloWorld')
}
export default function* sagas() {
  yield all([
    helloWorld()
  ])
}