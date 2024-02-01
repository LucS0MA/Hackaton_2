import { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import "../style/Cart.css";

function Cart() {
  const { cart } = useContext(ShopContext);
  return (
    <main>
      <div className="BigContainer">
        {cart.map((item) => {
          return (
            <div className="Articles" key={item.id}>
              <img
                src={`http://localhost:5000${item.picture}`}
                alt={item.titre}
                className="Pics"
              />
              <p className="Titles">{item.titre}</p>
              <p className="Price">{item.prix} PO</p>
              <button className="AddDel">+</button>
              <button className="AddDel">-</button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Cart;
