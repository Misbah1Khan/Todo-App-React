import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import AboutUs from "./Pages/AboutUs.jsx";
import CompletedTask from "./Pages/CompletedTask.jsx";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  };

  const deleteTask = (id) => {
    
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
 
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, updatedName) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, name: updatedName } : task
    ));
  };

  const completedTasks = tasks.filter((task) => task.completed);
  return (
    <>
      <Router>
        <Header />
          <Routes>
 
            <Route
              path="/"
              element={
                <div>
                  <TaskForm addTask={addTask} />
                  <TaskList
                    tasks={tasks.filter((task) => !task.completed)}
                    onDelete={deleteTask}
                    onToggle={toggleTaskCompletion}
                    onEdit={editTask}
                  />
                </div>
              }
            />
            <Route path="/AboutUs"  element={<AboutUs  />} />
            <Route
              path="/CompletedTask"
              element={<CompletedTask completedTasks={completedTasks} />}
            />
      
          </Routes>
      </Router>
    </>
  );
}

export default App;
