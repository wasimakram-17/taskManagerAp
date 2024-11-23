import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, updateTask, deleteTask } = useContext(TaskContext);
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleEdit = (task) => {
    setEditingId(task.id);
    setEditedText(task.text);
  };

  const handleUpdate = () => {
    updateTask({ id: editingId, text: editedText, completed: false });
    setEditingId(null);
    setEditedText("");
  };

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {editingId === task.id ? (
            <>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="form-control"
              />
              <button
                onClick={handleUpdate}
                className="btn btn-success btn-sm ml-2"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span>{task.text}</span>
              <div>
                <button
                  onClick={() => handleEdit(task)}
                  className="btn btn-warning btn-sm mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
