import {combineReducers} from "redux";
import locationReducer from "./locationReducer";
import photoReducer from "./photosReducer"

const allReducers = combineReducers({
  photos: photoReducer,
  location: locationReducer
});
export default allReducers;
