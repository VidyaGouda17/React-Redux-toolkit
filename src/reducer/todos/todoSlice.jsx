import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
	todos: [
		{
			id: 1,
			text: 'Hello World',
		},
	],
};

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const newTodo = {
				id: nanoid(),
				text: action.payload,
			};
			state.todos.push(newTodo);
		},
		updateTodo: (state, action) => {
			state.todos['text'] = action.payload;
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
	},
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
