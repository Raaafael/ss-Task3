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
      <div className="flex justify-center
      flex items-center
      h-screen
      bg-slate-900">
        
        <div className="bg-cyan-700
        w-100 h-110 border-2
        border rounded-xl
        border
        color-bg-blue-900
        p-4">
          
          <h1 className="text-4xl 
          text-white flex
          justify-center
          pb-6 mb-5
          font-bold"
          >Task Manager</h1>
          
          <form onSubmit={addTask} className="flex gap-2 mb-5">
            
            <input name="formm" placeholder="Enter task..."
              className="flex-1 p-2 bg-slate-700 
              text-white
              rounded-lg
              outline-none"/>
            
            <button className="
            bg-cyan-500 
            px-4 rounded-lg
            text-white 
            cursor-pointer 
            hover:bg-cyan-400
            hover:scale-105 
            duration-200"
            >Add</button>
          
          </form>
          <ul className="space-y-2">
            {tasks.map((task, index) => (
              <li key={index}className="flex justify-between items-center bg-slate-700 p-3 rounded-lg text-white hover:bg-slate-600 duration-200">
                <span>{task}</span>
                <button onClick={() => removeTask(index)}
                  className="flex justify-between
                  items-center 
                  bg-slate-700 
                  p-3
                  rounded-lg text-white
                  hover:bg-red-500
                  duration-200
                  hover:scale-105
                  cursor-pointer">x</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}