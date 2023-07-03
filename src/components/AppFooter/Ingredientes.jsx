import React from 'react'

const Ingredientes = ({iconIngredientes, quantity}) => {
  return (
    <div className="footer-column">
        <h2 className="list-title-text">
          <img
            src={iconIngredientes}
            alt="Icone Ingredientes"
            className="list-title-icon"
          />{" "}
          Ingredientes
        </h2>
        <ul className="footer-list-items">
          <li>
            {quantity} {quantity > 1 ? "espigas" : "espiga"} de milho verde
          </li>
          <li>
            {quantity} {quantity > 1 ? "colheres" : "colher"} de sopa de açúcar
          </li>
          <li>
            {quantity} {quantity > 1 ? "colheres" : "colher"} de sopa de
            manteiga
          </li>
          <li>Sal a gosto</li>
          <li>Palha de milho (para embrulhar)</li>
        </ul>
      </div>
  )
}

export default Ingredientes