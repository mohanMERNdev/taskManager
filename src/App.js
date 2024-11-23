import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import EditTaskModal from "./components/EditTaskModal";
import "./styles.css"

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmed) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const saveEditedTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditTask(null);
  };

  return (
    <div className=" App container mt-4">
      <h1 className="text-center mb-4">Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onEditTask={setEditTask}
        onDeleteTask={deleteTask}
      />
      {editTask && (
        <EditTaskModal
          task={editTask}
          onSave={saveEditedTask}
          onClose={() => setEditTask(null)}
        />
      )}
    </div>
  );
};

export default App;
