import { combineReducers } from "redux";
import { TodoReducer } from "./Todo";
import { AuthReducer } from "./Auth";

const rootReducer = combineReducers({
    TodoReducer,
    AuthReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
