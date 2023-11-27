"use client"

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'

const EditarCidade = () => {
  const searchParams = useSearchParams();
  const Id = searchParams.get('id')

  if(Id == null) {
    window.location.href();
  }
  console.log('Id:', Id);

  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');
  const [populacao, setPopulacao] = useState('');
  const [nome, setNome] = useState('');

  useEffect(() => {
    const fetchcidade = async () => {
      if (Id) {
        const res = await fetch(`https://app-projeto-pppt.onrender.com/cidades/${Id}`);
        const data = await res.json();
        console.log('Data fetched:', data);
        setNome(data.nome);
        setPais(data.pais);
        setPopulacao(data.populacao);
        setEstado(data.estado)
      }
    };

    fetchcidade();
  }, [Id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cidadeAtualizado = {
      id: parseInt(Id),
      nome,
      pais,
      populacao: parseInt(populacao),
      estado,
    };

    const res = await fetch(`https://app-projeto-pppt.onrender.com/cidades/${Id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cidadeAtualizado),
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
            Estado:
            <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} />
        </label>
        <label>
            País:
            <input type="text" value={pais} onChange={(e) => setPais(e.target.value)} />
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

export default EditarCidade;