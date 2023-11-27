"use client";

import React, { useState } from 'react';

const FormularioCidadesPOST = () => {
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');
  const [populacao, setPopulacao] = useState('');
  const [nome, setNome] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dados = {
      id: 0,
      nome: nome,
      estado: estado,
      pais: pais,
      populacao: populacao,
    };

    const resposta = await fetch('https://app-projeto-pppt.onrender.com/cidades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    });

    const dadosResposta = await resposta.json();
    console.log(dadosResposta);
        if (res.ok) {
            window.location.replace('/')
        } else {
            console.error('Erro ao atualizar o país');
        }
  };

  return (
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
  );
};

export default FormularioCidadesPOST;