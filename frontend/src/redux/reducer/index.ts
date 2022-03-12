import { combineReducers } from "redux";
import { AuthReducer } from "./Auth";
import { LabelReducer } from "./Label";
import { TaskReducer } from "./Task";

const rootReducer = combineReducers({
    AuthReducer,
    TaskReducer,
    LabelReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
