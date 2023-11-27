"use client"

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'

const EditarPais = () => {
  const searchParams = useSearchParams();
  const Id = searchParams.get('id')

  if(Id == null) {
    window.location.href();
  }
  console.log('Id:', Id);

  const [nome, setNome] = useState('');
  const [continente, setContinente] = useState('');
  const [populacao, setPopulacao] = useState('');

  useEffect(() => {
    const fetchPais = async () => {
      if (Id) {
        const res = await fetch(`https://app-projeto-pppt.onrender.com/paises/${Id}`);
        const data = await res.json();
        console.log('Data fetched:', data);
        setNome(data.nome);
        setContinente(data.continente);
        setPopulacao(data.populacao);
      }
    };

    fetchPais();
  }, [Id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const paisAtualizado = {
      id: parseInt(Id),
      nome,
      continente,
      populacao: parseInt(populacao),
    };

    const res = await fetch(`https://app-projeto-pppt.onrender.com/paises/${Id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paisAtualizado),
    });

    if (res.ok) {
      window.location.replace('/')
    } else {
      console.error('Erro ao editar o país');
    }
  };

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
        <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <label>
          Continente:
          <input type="text" value={continente} onChange={(e) => setContinente(e.target.value)} />
        </label>
        <label>
          População:
          <input type="number" value={populacao} onChange={(e) => setPopulacao(e.target.value)} />
        </label>
        <input type="submit" value="Enviar" />
        </form>
        </div>
      </section>
    </div>
  </div>
  );
};

export default EditarPais;