import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../reducer/todos/todoSlice';
export const store = configureStore({
	reducer: {
		todos: todoSlice,
	},
});
