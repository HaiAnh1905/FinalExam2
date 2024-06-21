import { useState } from "react";

const Completed = (props) => {
    return(
        <>
        <ul className="toDoList">
            <li className="listItem">
                <input type="checkbox" name="" defaultChecked={true}/> 
                <label className="checke">Do code challenge</label>
            </li>
            <li className="listItem">
                <input type="checkbox" name="" defaultChecked={true}/> 
                <label className="checke">Do code challenge</label>
            </li>
            <li className="listItem">
                <input type="checkbox" name="" defaultChecked={true}/> 
                <label className="checke">Do code challenge</label>
            </li>
        </ul>
        </>
    )
}

export default Completed