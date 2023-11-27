"use client";

import FormularioCidadesPUT from "../components/atualizar";

export default function Page() {
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
        <section>
          <div>
            <FormularioCidadesPUT></FormularioCidadesPUT>
          </div>
        </section>
      </div>
    </div>
  );
}
