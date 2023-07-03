import React from "react";
import PamonhaIMG from "../../assets/ilustracao_de_pamonha.png";
import AppButton from "../AppButton/AppButton";

const AppHeader = ({increaseQuantity, descreaseQuantity, quantity}) => {
  return (
    <div className="header">
      <div className="container-pamonha">
        <img
          src={PamonhaIMG}
          alt="Imagem de Pamonha"
          className="imagem-pamonha"
        />
      </div>
      <div className="container-title">
        <h1 className="titulo-pamonha">Pamonha</h1>
        <p className="descricao-pamonha">Prato típico com milho verde ralado</p>
        <div className="porcoes">
          <span className="porcoes-title">Porções</span>
          <div className="controle-porcoes">
            <AppButton
              type={"minus"}
              increaseQuantity={increaseQuantity}
              descreaseQuantity={descreaseQuantity}
            />
            <span className="quantity">0{quantity}</span>
            <AppButton
              type={"plus"}
              increaseQuantity={increaseQuantity}
              descreaseQuantity={descreaseQuantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
