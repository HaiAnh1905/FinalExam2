import { useState } from "react";
import "./all.css";
import ItemTask from "./itemTask";

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
      <button className="addItem" onClick={() => props.handleSubmit()}>
        Add
      </button>
      <ul className="toDoList">
        {/* {console.log(props.taskList)} */}
        {props.taskList.map((task) => 
          <ItemTask task = {task} onCheckboxChange={props.onCheckboxChange}/>
        )}
      </ul>
    </>
  );
};

export default All;
