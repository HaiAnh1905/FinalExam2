import { useState } from "react";

const Active = (props) => {
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
        {props.taskList.map((task, index) => (
          <li key={index} className="listItem">
            <input type="checkbox" name="" />
            <label>{task}</label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Active;
