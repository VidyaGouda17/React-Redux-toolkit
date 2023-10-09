import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../reducer/todos/todoSlice';

export const AddTodo = () => {
	const [text, setText] = useState('');
	const dispatch = useDispatch();
	const handleChange = (event) => {
		setText(event.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTodo(text));
		setText('');
	};
	return (
		<>
			<h1>Add todo</h1>
			<div>
				<form onSubmit={handleSubmit}>
					<input type='text' value={text} onChange={handleChange} />
					<button type='submit'>Add</button>
				</form>
			</div>
		</>
	);
};
