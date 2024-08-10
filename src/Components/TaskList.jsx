import React from "react";
import Task from './Task'
const TaskList = ({tasks ,onDelete ,onToggle, onEdit}) => {
  return (
    <>
    <div className="task-list">
 
      <ul >
        {tasks.map((task) => (
          <li key={task.id}>
             <Task task={task} onDelete={onDelete} onToggle={onToggle}  onEdit={onEdit} />
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default TaskList;
