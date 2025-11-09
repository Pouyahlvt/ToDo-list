import { useState } from "react";
import { useNavigate } from "react-router-dom";

let name = "";

function UPForm() {
  const navigator = useNavigate();
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [fullIn, setFullIn] = useState(true);

  const handleLog = function () {
    if (name !== "" && password !== "") {
      navigator("/dashbord", { state: { name } });
    } else {
      setFullIn(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-b from-pallet-2 to-pallet-3">
      <div className="relative h-screen sm:h-[80%]  w-full sm:w-[50%]  lg:w-[40%] flex flex-col items-center gap-4 sm:bg-pallet-5bb sm:rounded-2xl ">
        <h1 className="font-semibold text-[3rem] text-pallet-5 sm:text-pallet-1 sm:text-[3rem] lg:text-[4rem]">
          Log in
        </h1>
        <input
          className={`w-[80%] mt-5 bg-pallet-5 rounded-[0.5rem] border-2 border-pallet-1 ${
            fullIn ? "placeholder-pallet-2" : "placeholder-red-700"
          } focus:outline-none focus:bg-pallet-4 focus:ring-1 focus:ring-pallet-1 focus:placeholder:text-pallet-4 transition-all duration-100 pl-2 py-1`}
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Username"
        />
        <input
          className={`w-[80%] mt-3 bg-pallet-5 rounded-[0.5rem] border-2 border-pallet-1 ${
            fullIn ? "placeholder-pallet-2" : "placeholder-red-700"
          } focus:outline-none focus:bg-pallet-4 focus:ring-1 focus:ring-pallet-1 focus:placeholder:text-pallet-4 transition-all duration-100 pl-2 py-1`}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          onClick={handleLog}
          type="submit"
          className="active:scale-[.98] hover:w-[82%] mt-5 w-[80%] rounded-[0.5rem] text-pallet-1 bg-pallet-3 py-2 text-[1.5rem] transition-all duration-150">
          Enter
        </button>
        <p className="absolute bottom-2">
          you don't have acount? <span className="underline">Sign In</span>
        </p>
      </div>
    </div>
  );
}
export function LogIn() {
  return <UPForm />;
}
