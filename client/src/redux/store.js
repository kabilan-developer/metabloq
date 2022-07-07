import { applyMiddleware, compose, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import WalletConnect from "./Reducer";
import ConditionReducer from "./condition/conditionReducer";

const rootReducer = combineReducers({
  WalletConnect,
  ConditionReducer
});

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;
