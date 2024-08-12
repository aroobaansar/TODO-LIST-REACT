import React, { useState } from 'react';
import './TaskInput.css';
const TaskInput = ({ onAddTask }) => {
    const [task, setTask] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            onAddTask(task);
            setTask('');
        }
    };
    return (
        <form onSubmit={handleSubmit} className="task-input">
            <input
                type="text"
                placeholder="Add a new task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};
export default TaskInput;
