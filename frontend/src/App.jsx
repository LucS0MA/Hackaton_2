import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ShopContextProvider } from "./context/shop-context";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

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
