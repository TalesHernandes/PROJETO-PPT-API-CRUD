"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ListaPaises = () => {
  const [paises, setPaises] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPaises = async () => {
      const res = await fetch('https://app-projeto-pppt.onrender.com/paises');
      const data = await res.json();
      setPaises(data);
    };

    fetchPaises();
  }, []);

  const handleEditar = (id) => {
    router.push(`/editarPais?id=${id}`);
  };

  const handleExcluir = async (id) => {
    const res = await fetch(`https://app-projeto-pppt.onrender.com/paises/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      setPaises(paises.filter((pais) => pais.id !== id));
    } else {
      console.error('Erro ao excluir o país');
    }
  };

  return (
    <>
      {paises.map((pais) => (
        <tr key={pais.id}>
          <td>{pais.id}</td>
          <td>{pais.nome}</td>
          <td>{pais.continente}</td>
          <td>{pais.populacao}</td>
          <td>
            <button onClick={() => handleEditar(pais.id)}> <img src="./imagens/editarsimbolo.png"/> </button>
            <button onClick={() => handleExcluir(pais.id)}> <img src="./imagens/removersimbolo.png"/> </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ListaPaises;
