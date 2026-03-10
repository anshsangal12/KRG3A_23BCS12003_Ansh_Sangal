import React, { useState } from "react";
import useForm from "../hooks/useForm";

function TaskManager() {

  const [tasks, setTasks] = useState([]);

  const { formData, handleChange, resetForm } = useForm({
    title: "",
    priority: "Low"
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: formData.title,
      priority: formData.priority
    };

    setTasks([...tasks, newTask]);

    resetForm();
  };

  return (
    <div>
      <h2>Task Tracker</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleChange}
        />

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button type="submit">Add Task</button>
      </form>

      <h3>Task List</h3>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.title} | {task.priority}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default TaskManager;