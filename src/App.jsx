import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogIn } from "./form";
import { Dashbord } from "./dashbord";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/dashbord" element={<Dashbord />} />
      </Routes>
    </BrowserRouter>
  );
}
