import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <>
      <Navbar />
      <Accueil />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
