import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

let idc = 0;

export function Dashbord() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [check, setCheck] = useState(false);
  const location = useLocation();
  const name = location.state?.name || "";

  const handleAdd = function (e) {
    if (input == "") return;
    setList([...list, { id: idc++, todo: todo }]);
    setTodo("");
  };

  return (
    <div className="flex flex-col bg-linear-to-b from-pallet-3 to-pallet-4 w-full h-screen">
      <h1 className="text-pallet-1  sm:text-[3.5rem] text-[2.5rem] font-sans font-semibold tracking-tight capitalize throughtline ml-5 mb-5">
        {name}'s todo list
      </h1>
      <div className="w-full h-[28rem] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none]">
        <ul>
          {list.map((todos) => (
            <div className="flex items-center bg-pallet-5bb mx-2 p-4 gap-2 mb-2 rounded-[1rem] active:scale-99 duration-150">
              <input
                type="checkbox"
                onChange={(e) => setCheck(e.target.checked)}
                className="appearance-none w-5 h-5 border-2 rounded-full checked:bg-pallet-1 transition-all duration-150 ease-in-out"
              />
              <li
                className={`flex w-full mx-5 text-[1.5rem] ml-2 transition-all duration-150 wrap-break-words`}
                key={todos.id}>
                {todos.todo}
              </li>
              <button
                className="right-5"
                onClick={() => {
                  setList(list.filter((a) => a.id !== todos.id));
                }}>
                <img
                  src="./src/icons-trash.svg"
                  alt=""
                  className="w-7 h-7 hover:scale-110 duration-150"
                />
              </button>
            </div>
          ))}
        </ul>
      </div>
      <div className="fixed flex items-center bottom-5 left-5 right-5 bg-pallet-3 rounded-full">
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value), setInput(e.target.value);
          }}
          placeholder="Add To Do list ..."
          className=" pl-5 w-[90%] h-[3rem] rounded-full focus:outline-none"
        />
        <div className="mt-1.5">
          <button
            onClick={handleAdd}
            className="font-bold text-pallet-1 hover:text-[1.3rem] duration-200">
            <img
              src="./src/icons8-arrow-up-50.png"
              alt=""
              className="w-7 h-7 hover:scale-120 duration-150"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
