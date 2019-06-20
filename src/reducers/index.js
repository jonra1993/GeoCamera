import {combineReducers} from "redux";
import countReducer from "./countReducer.js";
import bottomBarReducer from "./bottomBarReducer";
import locationReducer from "./locationReducer";
import tipsReducer from "./tipsReducer"

const allReducers = combineReducers({
  count: countReducer,
  tips: tipsReducer,
  tabs: bottomBarReducer,
  location: locationReducer
});
export default allReducers;
