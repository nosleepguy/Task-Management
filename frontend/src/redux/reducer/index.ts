import { combineReducers } from "redux";
import { AuthReducer } from "./Auth";
import { TaskReducer } from "./Task";
import { LabelReducer } from "./Label";

const rootReducer = combineReducers({
    AuthReducer,
    TaskReducer,
    LabelReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
