import { Outlet } from "react-router-dom";


import "./App.css";
import NewsLetters from "./components/NewsLetters";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <>
      <Navbar />
      <NewsLetters />
      <main>
        <Outlet />
      </main>
      <Accueil />

    </>
  );
}

export default App;
