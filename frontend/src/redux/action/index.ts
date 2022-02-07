import * as Type from "./../constants";
export interface AddTodo {
    type: Type.ADD_TODO;
    payload: object;
}
export const addTodoAction = (payload: object): AddTodo => {
    return {
        type: Type.ADD_TODO,
        payload,
    };
};
