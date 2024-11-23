import React, { useState } from "react";
import "./EditTaskModal.css"

const EditTaskModal = ({ task, onSave, onClose }) => {
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  return (
    <div className="modal show d-block" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Task</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              name="title"
              value={updatedTask.title}
              onChange={handleChange}
              className="form-control mb-3"
            />
            <textarea
              name="description"
              value={updatedTask.description}
              onChange={handleChange}
              className="form-control mb-3"
            />
            <input
              type="date"
              name="dueDate"
              value={updatedTask.dueDate}
              onChange={handleChange}
              className="form-control mb-3"
            />
            <select
              name="status"
              value={updatedTask.status}
              onChange={handleChange}
              className="form-select"
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={() => onSave(updatedTask)}>
              Save Changes
            </button>
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
