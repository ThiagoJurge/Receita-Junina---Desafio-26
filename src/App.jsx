import "./App.css";
import AppButton from "./components/AppButton/AppButton";
import { useState } from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import AppFooter from "./components/AppFooter/AppFooter";

function App() {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const descreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="card-receita">
      <AppHeader
        descreaseQuantity={descreaseQuantity}
        increaseQuantity={increaseQuantity}
        quantity={quantity}
      />
      <AppFooter quantity={quantity} />
    </div>
  );
}

export default App;
