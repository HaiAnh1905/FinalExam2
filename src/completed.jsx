import { useState } from "react";
import ItemTask from "./itemTask";

const Completed = (props) => {
  return (
    <>
      <ul className="toDoList">
        {/* {console.log(props.taskList)} */}
        {props.taskList.map((task) =>
          task.done == true ? (
            <ItemTask task={task} onCheckboxChange={props.onCheckboxChange} />
          ) : null
        )}
      </ul>
    </>
  );
};

export default Completed;
