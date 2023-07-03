import React from "react";

const ModoDePreparo = ({iconModoDePreparo}) => {
  return (
    <div className="footer-column">
      <h2 className="list-title-text">
        <img
          src={iconModoDePreparo}
          alt="Icone Modo de Preparo"
          className="list-title-icon"
        />{" "}
        Modo de Preparo
      </h2>
      <ol className="footer-list-items numbered">
        <li>Descasque a espiga de milho e corte os grãos.</li>
        <li>Bata o milho, açúcar, manteiga e sal no liquidificador.</li>
        <li>Coloque a massa nas palhas de milho e feche bem.</li>
        <li>Cozinhe em água fervente por cerca de 40 minutos.</li>
        <li>Deixe esfriar e sirva.</li>
      </ol>
    </div>
  );
};

export default ModoDePreparo;
