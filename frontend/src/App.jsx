import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ShopContextProvider } from "./context/shop-context";
import Navbar from "./components/Navbar";
import CardArticle from "./components/CardArticle";
import Footer from "./components/Footer";
import "./App.css";
import Homme from "./pages/Homme";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelectCard = (card) => {
    setSelectedCard(card);
  };
  return (
    <>
      <ShopContextProvider>
      <Navbar onSelectCard={handleSelectCard} />

        <main>
          <Outlet />
          {selectedCard ? null : <Homme />}
          {selectedCard && <CardArticle filteredData={selectedCard} />}
        </main>
        <Footer />
      </ShopContextProvider>
    </>
  );
}

export default App;
