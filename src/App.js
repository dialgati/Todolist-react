// Installez d'abord React en utilisant la commande : npm install react react-dom
import React, { useState } from "react";
import Group from './images/Group.png'
import { RiDeleteBin6Line } from "react-icons/ri";

import "./App.css"; // Assurez-vous de créer ce fichier CSS pour les styles

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, text: newTask }]);
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <div className="header fs-1 fw-bold text-uppercase">
        _______To-Do Now_____
      </div>
      <div className="add-task position-relative">
        <input
          className="clak "
          type="text"
          placeholder="Ajouter une nouvelle tâche"
          required
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleAddTask(e.target.value);
              e.target.value = "";
            }
          }}
        />
        <button
          className="pousse position-absolute"
          onClick={() => handleAddTask(document.querySelector("input").value)}
        >
          Add task
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span>{task.text}</span>
            <button onClick={() => handleRemoveTask(task.id)}>
              <RiDeleteBin6Line />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
