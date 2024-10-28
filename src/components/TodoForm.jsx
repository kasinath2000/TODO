import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const TodoForm = ({ existingTodo, closeForm }) => {
  const [title, setTitle] = useState(existingTodo ? existingTodo.title : '');
  const [description, setDescription] = useState(existingTodo ? existingTodo.description : '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingTodo) {
      // Update existing todo
      dispatch(editTodo({ id: existingTodo.id, data: { title, description } }));
    } else {
      // Add new todo
      dispatch(addTodo({ title, description }));
    }
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {existingTodo ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default TodoForm;
