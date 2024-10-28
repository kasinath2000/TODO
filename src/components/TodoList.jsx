import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice';
import TodoForm from './TodoForm';

const TodoList = () => {
  const todos = useSelector((state) => state.todos || []); // Default to empty array
  const dispatch = useDispatch();
  const [editingTodo, setEditingTodo] = useState(null);

  const renderTodos = () => {
    if (!Array.isArray(todos) || todos.length === 0) {
      return <p className="text-gray-500">No todos available.</p>;
    }

    return todos.map((todo) => (
      <div
        key={todo.id}
        className="bg-gray-100 p-4 mb-2 rounded shadow-md flex justify-between items-center"
      >
        <div>
          <h2 className="text-xl font-semibold">{todo.title}</h2>
          <p>{todo.description}</p>
          <span className="text-sm text-gray-500">{todo.date}</span>
        </div>
        <div>
          <button
            onClick={() => setEditingTodo(todo)}
            className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      {editingTodo && (
        <TodoForm existingTodo={editingTodo} closeForm={() => setEditingTodo(null)} />
      )}

      {renderTodos()} {/* Call the helper function to render todos */}
    </div>
  );
};

export default TodoList;
