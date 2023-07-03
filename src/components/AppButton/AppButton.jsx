import React from "react";
import ButtonPlus from "../../assets/buttonPlus.png";
import ButtonMinus from "../../assets/buttonMinus.png";

const AppButton = ({ type, increaseQuantity, descreaseQuantity }) => {
  const handleClick = () => {
    if (type === "plus") {
      increaseQuantity();
    } else if (type === "minus") {
        descreaseQuantity()
    }
  };

  return (
    <button className="buttonquantidade" onClick={handleClick}>
      <img
        src={
          type === "plus" ? ButtonPlus : type === "minus" ? ButtonMinus : null
        }
        alt="Botão Menos"
      />
    </button>
  );
};

export default AppButton;
