/**
 * Created By: Sahand Mahdavi
 * Email: shndmahdavi@gmail.com
 */
import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import * as auth from "../components/app/auth/redux/authRedux";

export const rootReducer = combineReducers({
  auth: auth.reducer,
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
