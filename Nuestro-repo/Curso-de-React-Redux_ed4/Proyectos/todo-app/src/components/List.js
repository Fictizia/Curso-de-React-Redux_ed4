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

  const removeThisTask = (arrIdx) => {
    const newArr = tasks.splice(0);

    if (arrIdx > -1) { newArr.splice(arrIdx, 1); }
    calcPercentage(newArr);
    setTasks(newArr);
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
            key={idx}
            checked={task.status}
            onInpChange={() => onInputChange(task, idx,tasks)}
            removeTask={() => removeThisTask({idx}.idx)}>
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

// El usuario hace click y llama al Envent Listener del DOM.
// a.onClick(event);

// La función anónima dentro del onClick de <a> ((event)) "recoge y permite utilizar" event, children y className.
// Después, esta función invoca a la función que nosotros hemos definido en const (en este caso 'click').
// Puede acceder a los datos (event, children, className) porque está dentro del return. Si definiéramos esa función,
// además tiene this.props asociado por delante (this.props.click = function(event){*por definir en props*})

// let anonymous = function(event){
//  onClick(event, children, className);
// }

// Arriba, en const, definimos (o en este caso permitimos al desarrollador) que utilice los parámetros
// invocados en (el callback) de la función anterior, en este caso click.
//
// ** Como en el caso del texto que alberga children ('This is a title'), nos interesa que click por defecto
// y como medida de seguridad, devuelva una función vacía (así no peta la página). Esto es solo un default value
// que puede ser modificado en la props del elemento donde se coloque.
