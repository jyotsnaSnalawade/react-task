import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from "./task/Navbar";
import Task1 from "./task/task1/Task1";
import Task2 from "./task/task2/Task2";
import Task3 from "./task/task3/Task3";
import Task4 from "./task/task4/Task4";

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
