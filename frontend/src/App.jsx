import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ShopContextProvider } from "./context/shop-context";
import "./App.css";

function App() {
  return (
    <>
      <ShopContextProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ShopContextProvider>
    </>
  );
}

export default App;
