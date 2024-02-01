import { Outlet } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Accueil />

    </>
  );
}

export default App;
