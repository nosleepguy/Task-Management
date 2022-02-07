import { combineReducers } from "redux";
import { TodoReducer } from "./Todo";

interface RootState {
    TodoReducer: object;
}

export default combineReducers<RootState>({
    TodoReducer,
});
