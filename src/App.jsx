import { useCallback, useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import All from "./all";
import Completed from "./completed";
import Active from "./active";
import { v4 } from "uuid";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  // useEffect(() => {
  //   const storageTaskList = localStorage.getItem('tasks');
  //   if(storageTaskList){
  //     // setTaskList(JSON.parse(storageTaskList))
  //   }
  // })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const newTask = JSON.stringify(taskList);

  const handleSubmit = () => {
    setTaskList([...taskList, { id: v4(), task: task, done: false }]);
    setTask("");
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const onCheckboxChange = useCallback((id) => {
    setTaskList((prevState) =>
      prevState.map((todo) => (todo.id === id ? { ...todo, done: true } : todo))
    );
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="center">#todo</h1>
        <div className="main">
          <ul className="tasks center">
            <li>
              <NavLink
                className={(path) => {
                  return path.isActive ? "active" : "";
                }}
                to="/"
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(path) => {
                  return path.isActive ? "active" : "";
                }}
                to="/Active"
              >
                Active
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(path) => {
                  return path.isActive ? "active" : "";
                }}
                to="/Completed"
              >
                Completed
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="body center">
          <Routes>
            <Route
              path="/"
              element={
                <All
                  task={task}
                  taskList={taskList}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  onCheckboxChange={onCheckboxChange}
                />
              }
            />
            <Route
              path="/Active"
              element={
                <Active
                  task={task}
                  taskList={taskList}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  onCheckboxChange={onCheckboxChange}
                />
              }
            />
            <Route
              path="/Completed"
              element={
                <Completed
                  task={task}
                  taskList={taskList}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  onCheckboxChange={onCheckboxChange}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
