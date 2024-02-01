import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  return (
    <>
      <ShopContextProvider>
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
      </ShopContextProvider>
    </>
  );
}

export default App;
