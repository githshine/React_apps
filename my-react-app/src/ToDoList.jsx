import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([
    'Eat Breakfast',
    'Take a shower',
    'Walk the dog',
  ]);
  const [newTask, setNewTask] = useState([]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (!newTask) return;
    setTasks((t) => [...t, newTask]);
    setNewTask(''); // clear value of the input
  }

  function deleteTask(index) {
    setTasks((t) => t.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index === 0) return;

    // const iTask = tasks[index];
    // // console.log(iTask);
    // const newTasks = tasks.filter((_, i) => i !== index);
    // // console.log(newTasks);
    // newTasks.splice(index - 1, 0, iTask);
    // Another way -- using deconstructing [which is amazing!! check the teaching video later!!]
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = [
      updatedTasks[index - 1],
      updatedTasks[index],
    ];
    setTasks((t) => (t = updatedTasks));
  }
  function moveTaskDown(index) {
    if (index === tasks.length) return;

    const iTask = tasks[index]; // task that need to move down
    const newTasks = tasks.filter((_, i) => i !== index);
    newTasks.splice(index + 1, 0, iTask);
    setTasks(newTasks);
  }

  return (
    <div className="to-do-list">
      <h1>TO-DO-List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          placeholder="Enter a task..."
          onChange={handleInputChange} // React 会自动传入 event parameter
        ></input>
        <button className="add-button" onClick={addTask}>
          Add
        </button>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                ☝️
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
