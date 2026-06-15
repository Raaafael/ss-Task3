import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(e) {
    e.preventDefault();

    const value = e.target.formm.value.trim();
    if (!value) return;

    const newTasks = [...tasks];
    newTasks.push(value);
    setTasks(newTasks);

    e.target.reset();
  }

  function removeTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <>
      <body className="flex justify-center flex items-center h-screen">
        <div className="bg-blue-500 w-100 ">
          <h1 className="text-4xl text-red-600">Task Manager</h1>
          <form onSubmit={addTask}>
            <input name="formm" placeholder="Enter task..." />
            <button>Add</button>
          </form>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => removeTask(index)}>x</button>
              </li>
            ))}
          </ul>
        </div>
      </body>
    </>
  );
}