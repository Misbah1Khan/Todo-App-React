import React from "react";
import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask({ name: taskName });
      setTaskName("");
    }
  };

  return (
    <>
    <h1 className="todo">Todo Lists</h1>
    <div className="TaskForm">
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
    </>
  );
};

export default TaskForm;
