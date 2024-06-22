import { useState } from "react";
import "./active.css"
import ItemTask from "./itemTask";

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
        {/* {console.log(props.taskList)} */}
        {props.taskList.map((task) => task.done == false ? (<ItemTask task = {task} onCheckboxChange={props.onCheckboxChange}/>) : null
        )}
        
      </ul>
    </>
  );
};

export default Active;
