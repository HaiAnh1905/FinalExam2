import { useState } from "react";
import './itemTask'

const ItemTask = (props) => {
  return (
    <>
      <li key={props.task.id} className="listItem">
        <input
          type="checkbox"
          name=""
          defaultChecked={props.task.done}
          onClick={() => {
            props.onCheckboxChange(props.task.id);
          }}
        />
        {
          props.task.done ? (<label className="checke">{props.task.task}</label>) : (<label className="">{props.task.task}</label>)
        }
      </li>
    </>
  );
};

export default ItemTask