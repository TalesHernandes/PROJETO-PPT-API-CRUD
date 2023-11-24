"use client";

import BotaoMostrar from "./components/BotaoMostrar.jsx"

export default function Home() {
  return (
    <div>
      <div className="logo">
        <img src="./imagens/logo.png" className="imagemlogo" alt="logo" />
        <h1>
          Projeto PPT API 
        </h1>  
      </div>
      <div className="content">
        <section className="desc">
          <img src="./imagens/definicoes.png" alt="logoDesc"/>
          <h2> Portal de Transparência e Gerenciamento da Empresa PPT </h2>
        </section>
        <section className="tabelas">
          <div className="tabelaUP">
            <h3> Selecione um de nossos sistemas: </h3>
          </div>
          <BotaoMostrar/>
        </section>
      </div>
    </div>
  );
}
