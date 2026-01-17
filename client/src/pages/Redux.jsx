import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, fetchTodos } from '../feature/addTodo/AddTodo';
import { useEffect } from 'react';

function generateRandomId(length = 10) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const Redux = () => {
  const [inputValue, setInputValue] = useState("");
  const [trigger, setTrigger] = useState(0);
  const { data: todos, loading, error } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  useEffect(() => {
    const s = localStorage.getItem('todo');
    if (s) {
      // console.log(s);
      const st = JSON.parse(s);
      // console.log(st);
      dispatch(addTodo(st));
    }
  }, [trigger])

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      return;
    }

    const data = {
      id: generateRandomId(),
      title: inputValue
    }

    dispatch(addTodo(data));
    setInputValue('');
  }

  const handleRemove = (todoId) => {
    // console.log(todoId);
    dispatch(removeTodo(todoId));
    setTrigger(prev => prev + 1)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-purple-500 via-indigo-600 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 p-6">
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-lg max-w-lg w-full p-8">
        <h1 className="text-4xl font-semibold text-center text-indigo-800 dark:text-indigo-400 mb-6">Todo App</h1>
        {/* <form action=""></form> */}
        <form className="flex space-x-4 mb-6" onSubmit={handleAddTodo}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-lg placeholder-gray-400 dark:placeholder-gray-500 transition duration-200 ease-in-out"
            placeholder="Add a new task"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition-all duration-200"
          >
            Add
          </button>
        </form>
        <div>
          {loading && (
            <p className="text-center text-blue-500 font-semibold text-lg">Loading todos...</p>
          )}

          {error && (
            <p className="text-center text-red-500 font-semibold text-lg">{error}</p>
          )}

          {!loading && todos.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No tasks yet. Add some!
            </p>
          ) : (
            <ul className="space-y-4">
              {todos.map((todo, index) => (
                <li
                  key={todo.id}
                  className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <span className="text-lg text-gray-800 dark:text-gray-200">
                    {index + 1}. {todo.title}
                  </span>
                  <button
                    className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500"
                    type="button"
                    onClick={() => handleRemove(todo.id)}
                  >
                    ✖
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
};

export default Redux;
