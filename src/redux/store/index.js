import { combineReducers, configureStore } from "@reduxjs/toolkit";

import addCompanyReducer from "../reducers/addCompanyReducer";
import jobsReducer from "../reducers/jobsReducer";
import searchReducer from "../reducers/searchReducer";

const bigReducer = combineReducers({
  jobs: jobsReducer,
  favjob: addCompanyReducer,
  value: searchReducer,
});
const store = configureStore({
  reducer: bigReducer,
});

export default store;
