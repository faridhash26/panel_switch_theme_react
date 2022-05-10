import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { themeReducer } from "./reducers/theReducers";
const reducer = combineReducers({
  theme: themeReducer,
});

const colorTheme = localStorage.getItem("theme")
  ? JSON.parse(localStorage.getItem("theme"))
  : false;


  
const inintState = {
  theme: { bgColor: colorTheme },
};
const middleware = [];

const store = createStore(
  reducer,
  inintState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
