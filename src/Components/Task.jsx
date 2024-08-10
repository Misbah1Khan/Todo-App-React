import React from 'react'
import { useState } from 'react';

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.name);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(task.id, editedTaskName);
    setIsEditing(false);
  };

  return (
    <div className={`task ${isEditing ? 'editing' : ''}`}>
      <input
        type="text"
        value={editedTaskName}
        onChange={(e) => setEditedTaskName(e.target.value)}
        className={isEditing ? 'visible' : 'hidden'}
      />
      <p className={isEditing ? 'hidden' : ''}>
        {task.name}
      </p>
      <button onClick={() => onToggle(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleSave} className={isEditing ? 'visible' : 'hidden'}>Save</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  )
}

export default Task