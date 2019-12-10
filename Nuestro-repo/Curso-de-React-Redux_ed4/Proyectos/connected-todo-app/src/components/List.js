import React, { useState } from 'react';
import { Task } from './Task';

import '../styles/List.css';

const List = ({
  changeListName = () => {},
  newListName = "",
  submitName = () => {},
  children = "",
  placeholder = `New task on ${children}`,
}) => {

  const [ inputValue, setInputValue ] = useState("");
  const [ tasks, setTasks ] = useState([]);
  const [ percentage, setPercentage ] = useState([]);

  const percentageFeatureStyle = {
    opacity: tasks.length,
    transition: "opacity .5s",
    WebkitTransition: "width .5s"
  }

  const percentageBarStyle = {
    width: `${percentage}%`,
    transition: "opacity .5s",
    WebkitTransition: "width .5s"
  };

  const onChange = (event) => {
    setInputValue(event.target.value)
  };

  const calcPercentage = (arr) => {
    let counter = 0;
    for (var i = 0; i < arr.length; i++) { if (arr[i].status) { counter++ }}

    let calculatePercentage = (counter/arr.length * 100).toFixed();
    if (!arr.length) { calculatePercentage = 0 }
    setPercentage(calculatePercentage);
  };

  const onButtonClick = () => {
    const newArr = tasks.slice(0);

    if(inputValue) {
      newArr.length < 10 ? newArr.push({ text: inputValue, status: false }) : alert("Try to accomplish your actual tasks instead of creating a new one");
    }

    calcPercentage(newArr);
    setTasks(newArr);
    setInputValue("");
  };

  const onInputChange = (tarea, indice, tareas) => {
    tarea.status = tarea.status ? false : true;

    calcPercentage(tareas);
    setTasks(tareas)
  }

  return (
    <div className="td-list_container">
      <input
        value={children}
        className="td-list_name"
        onKeyUp={(event) => submitName(event)}
        onChange={(event)=> newListName(event, {children})}
        onDoubleClick={(event)=> changeListName(event)}
      />

      <div className="td-list_add_task_box">
        <input
          type="text"
          className="td-list_add_field"
          value={inputValue}
          onChange={onChange}
          placeholder= {placeholder}
          onKeyUp={(e) => { return e.keyCode === 13 ? onButtonClick() : null }}
        />
        <button
          onClick={onButtonClick}
          className="td-list_add_cta">Add task</button>
      </div>

      <div className="td-task-box">
        {tasks.map((task, idx, tasks) => (
          <Task
            key={task.text}
            checked={task.status}
            onInpChange={() => onInputChange(task, idx,tasks)}
          >
              {task.text}
          </Task>
        ))}
      </div>

      <div className="td-list_info" style={percentageFeatureStyle}>
        <p>{`${percentage}% tasks completed`}</p>
        <div className='td-list_info_bar' style={percentageBarStyle}></div>
      </div>
    </div>
  )
};

export default List;
