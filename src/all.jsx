import { useState } from "react";
import "./all.css";

const All = (props) => {
  return (
    <>
      <input
        type="text"
        value={props.task}
        onChange={props.handleChange}
        placeholder="add details"
        className="inputTast"
      />
      <button className="addItem" onClick={props.handleSubmit}>
        Add
      </button>
      <ul className="toDoList">
        {props.taskList.map((task) => (
          <li key={task.id} className="listItem">
            <input
              type="checkbox"
              name=""
              defaultChecked={task.done}
              onClick={() => {
                props.onCheckboxChange(task.id);
              }}
            />
            <label>{task.task}</label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default All;
