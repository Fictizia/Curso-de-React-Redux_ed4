import React from 'react';

import '../styles/Task.css'

const Task = ({
  removeTask = () => {},
  children = "",
  onInpChange = () => {},
  className = "",
  checked = false,
}) => {

return (
  <div className="td-task-wrapper">
    <input
      className="td-task-input"
      type="checkbox"
      id={children}
      checked={checked}
      onChange={onInpChange}
    />
    <label
      onClick={onInpChange}
      htmlFor={children}
      className="td-list_task"
    >
      {children}
    </label>
    <button
      className="td-remove_task">
        x
    </button>
  </div>
)};

export { Task };
