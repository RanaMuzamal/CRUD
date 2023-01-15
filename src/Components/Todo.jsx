import React, { useState } from "react";
import { addData, DeleteData } from "../actions/index";
import { 
  , useSelector } from "react-redux";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.DataReducer.list);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <h1>Add Data to List</h1>
          <div className="addItems">
            <input
              type="text"
              placeholder="Enter Your Name: "
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add Data"
              onClick={() => dispatch(addData(inputData), setInputData(""))}
            ></i>
          </div>
          <div className="showItems">
            {list.map((e) => {
              return (
                <div className="eachItem" key={e.id}>
                  <h1>{e.data}</h1>
                  <div className="todo-btn">
                    <i
                      className="fa fa-trash add-btn"
                      onClick={() => dispatch(DeleteData(e.id))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
