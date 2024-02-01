import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  return (
    <>
       <Navbar setSelectedImageUrl={setSelectedImageUrl} />
      {selectedImageUrl && (
        <div>
          <img src={selectedImageUrl} alt="Image sélectionnée" />
        </div>
      )}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
