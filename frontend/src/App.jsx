import { Outlet } from "react-router-dom";


import "./App.css";
import NewsLetters from "./components/NewsLetters";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      
      <NewsLetters />
      <Accueil />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
