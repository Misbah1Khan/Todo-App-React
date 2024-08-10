import React from 'react';

const CompletedTasks = ({ completedTasks }) => {
  if (!completedTasks) {
    return <div>You don't have any completed tasks yet!</div>;
  }
  return (
    <div className="comp-task">
      <h1>Completed Tasks</h1>
      <ul>
        {completedTasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTasks;
