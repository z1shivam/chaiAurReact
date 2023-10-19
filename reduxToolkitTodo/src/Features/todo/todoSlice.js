import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: 'Shivam can code!'}],
}

const add = (state, action) => {
    const todo ={
        id: nanoid(),
        text: action.payload,
    }
    state.todos.push(todo);
}
const remove = (state, action) => {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload)
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: add,
        removeTodo: remove,
    }
});

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;
