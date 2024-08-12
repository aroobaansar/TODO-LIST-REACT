import React, { useState } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import ModalForm from './components/ModalForm';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
const App = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const handleAddTask = (task) => {
        setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    };
    const handleCompleteTask = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: true } : task));
    };
    const handleEditTask = (id, newText) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
    };
    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };
    return (
        <div className="App">
            <Header
                onLoginClick={() => setIsLoginOpen(true)}
                onSignupClick={() => setIsSignupOpen(true)}
            />
<TaskInput onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
                onCompleteTask={handleCompleteTask}
            />

            {isLoginOpen && (
                <ModalForm title="Login" onClose={() => setIsLoginOpen(false)}>
                    <Login />
                </ModalForm>
            )}
            {isSignupOpen && (
                <ModalForm title="Signup" onClose={() => setIsSignupOpen(false)}>
                    <Signup />
                </ModalForm>
            )}
        </div>
    );
};
export default App;
