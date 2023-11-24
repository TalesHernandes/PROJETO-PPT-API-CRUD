import React, { useState } from "react";
import CrudTabelaEmp from "./CrudTabelaEmp.jsx";
import CrudTabelaCidade from "./CrudTabelaCidade.jsx";
import CrudTabelaPais from "./CrudTabelaPais.jsx";


const BotaoMostrar = () => {
  const [tabelaAtiva, setTabelaAtiva] = useState(null);

  const mostrarTabela = (tabela) => {
    if (tabelaAtiva === tabela) {
      setTabelaAtiva(null);
    } else{
      setTabelaAtiva(tabela);
    }
  };

  return (
    <div>
      <div className="botaoMostrar">
        <button onClick={() => mostrarTabela("empregados")} >
          <img src="./imagens/user.png" alt="logoEmpregado"/>
          Nossos Empregados
        </button>

        <button onClick={() => mostrarTabela("cidades")} >
          <img src="./imagens/urbano.png" alt="logoCidade"/>
          Cidades Que Operamos
        </button> 

        <button onClick={() => mostrarTabela("paises")} >
          <img src="./imagens/paises.png" alt="logoPaises"/>
          Países Que Operamos
        </button> 
      </div>

      {tabelaAtiva === "empregados" && <CrudTabelaEmp/>}
      {tabelaAtiva === "cidades" && <CrudTabelaCidade/>}
      {tabelaAtiva === "paises" && <CrudTabelaPais/>}
      
    </div>
  );
};

export default BotaoMostrar;
