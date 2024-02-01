import { Outlet } from "react-router-dom";


import "./App.css";
import NewsLetters from "./components/NewsLetters";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <NewsLetters />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
