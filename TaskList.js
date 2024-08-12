import React, { useState } from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';
const TaskList = ({ tasks, onEditTask, onDeleteTask, onCompleteTask }) => {
    const [filter, setFilter] = useState('all');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'pending') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true; 
    });
    return (
        <div className="task-list">
            <div className="filter-buttons">
                <button
                    className={filter === 'all' ? 'active' : ''}
                    onClick={() => setFilter('all')}
                >
                    All Tasks
                </button>
                <button
                    className={filter === 'pending' ? 'active' : ''}
                    onClick={() => setFilter('pending')}
                >
                    Pending
                </button>
                <button
                    className={filter === 'completed' ? 'active' : ''}
                    onClick={() => setFilter('completed')}
                >
                    Completed
                </button>
            </div>
            {filteredTasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onEditTask={onEditTask}
                    onDeleteTask={onDeleteTask}
                    onCompleteTask={onCompleteTask}
                />
            ))}
        </div>
    );
};
export default TaskList;
