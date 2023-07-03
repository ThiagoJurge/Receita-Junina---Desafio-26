import React from "react";
import iconModoDePreparo from "../../assets/iconModoDePreparo.png";
import iconIngredientes from "../../assets/iconIngredientes.png";
import Ingredientes from "./Ingredientes";
import ModoDePreparo from "./ModoDePreparo";

const AppFooter = ({ quantity }) => {
  return (
    <div className="footer">
      <Ingredientes iconIngredientes={iconIngredientes} quantity={quantity} />
      <ModoDePreparo iconModoDePreparo={iconModoDePreparo} />
    </div>
  );
};

export default AppFooter;
