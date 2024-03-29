import { createStore, applyMiddleware } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducer";

const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk)
  //composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
