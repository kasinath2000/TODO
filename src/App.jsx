import "./App.css";
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
const  App = ()=> {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md">
        {showForm ? (
          <TodoForm closeForm={() => setShowForm(false)} />
        ) : (
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-500 text-white px-4 py-2 rounded w-full"
          >
            Add New Todo
          </button>
        )}
        <TodoList />
      </div>
    </div>
    </>
  );
}

export default App;
