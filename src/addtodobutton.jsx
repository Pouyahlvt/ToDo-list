import React from "react";
import { useState } from "react";

export function Addtodo() {
  const [ised, setIsed] = useState(false);
  return (
    <div className="fixed w-[5rem] h-[5rem] flex flex-col justify-center items-center rounded-full bottom-5 right-5 bg-pallet-3">
      <button className="mx-3 my-3 text-[3rem]">+</button>
    </div>
  );
}
