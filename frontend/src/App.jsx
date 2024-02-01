import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Accueil />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
