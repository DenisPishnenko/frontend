import { combineReducers } from "redux";

import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
  newsReducer: newsReducer,
});

export default rootReducer;
