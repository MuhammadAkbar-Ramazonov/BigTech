import { combineReducers } from "redux";
import { UserReducer } from "./counter/userReducer";

export const rootReducer = combineReducers({
	numOfCount: UserReducer,
});
