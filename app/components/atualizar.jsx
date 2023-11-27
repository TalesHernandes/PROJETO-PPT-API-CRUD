"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const FormularioCidadesPUT = () => {
  const [id, setId] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');
  const [populacao, setPopulacao] = useState('');
  const [nome, setNome] = useState('');

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { id: idQuery, nome: nomeQuery, estado: estadoQuery, pais: paisQuery, populacao: populacaoQuery } = router.query;
      if (idQuery) setId(idQuery);
      if (nomeQuery) setNome(decodeURIComponent(nomeQuery)); 
      if (estadoQuery) setEstado(decodeURIComponent(estadoQuery));
      if (paisQuery) setPais(decodeURIComponent(paisQuery));
      if (populacaoQuery) setPopulacao(decodeURIComponent(populacaoQuery));
    }
  }, [router.isReady]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dados = {
      id: id,
      nome: nome,
      estado: estado,
      pais: pais,
      populacao: populacao,
    };

    const resposta = await fetch(`https://app-projeto-pppt.onrender.com/cidades/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    });

    const dadosResposta = await resposta.json();
    console.log(dadosResposta);
    window.alert('Atualizado com sucesso!')
    window.location.replace('/')
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
        <input type="submit" value="Atualizar" />
    </form>
  );
};

export default FormularioCidadesPUT;
