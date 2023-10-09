import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../reducer/todos/todoSlice';

function Todo() {
	const todos = useSelector((state) => state.todos.todos);
	console.log(todos);
	const dispatch = useDispatch();
	const handleDelete = (id) => {
		dispatch(deleteTodo(id));
	};
	return (
		<div>
			<h2>List of the todo's</h2>
			<ul>
				{todos?.map((todo) => (
					<li key={todo.id}>
						{todo.text}
						<button onClick={() => handleDelete(todo.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Todo;
