import { Outlet } from "react-router-dom";


import "./App.css";
import NewsLetters from "./components/NewsLetters";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <NewsLetters />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
