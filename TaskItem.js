import React, { useState } from 'react';
import './TaskItem.css';
const TaskItem = ({ task, onEditTask, onDeleteTask, onCompleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const handleEdit = () => {
        if (isEditing) {
            onEditTask(task.id, editText);
        }
        setIsEditing(!isEditing);
    };
    return (
        <div className="task-item">
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                <span>{task.text}</span>
            )}
            <div>
                {!task.completed && (
                    <button onClick={() => onCompleteTask(task.id)}>Complete</button>
                )}
                <button onClick={handleEdit}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
                <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            </div>
        </div>
    );
};export default TaskItem;
