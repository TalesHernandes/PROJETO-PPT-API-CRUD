import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ListaCidades = () => {
    const [cidades, setCidades] = useState([]);

    const router = useRouter();
  
    useEffect(() => {
      const fetchCidades = async () => {
        const res = await fetch('https://app-projeto-pppt.onrender.com/cidades');
        const data = await res.json();
        setCidades(data);
      };
  
      fetchCidades();
    }, []);

    const handleExcluir = async (id) => {
        const res = await fetch(`https://app-projeto-pppt.onrender.com/cidades/${id}`, {
          method: 'DELETE',
        });
  
        if (res.ok) {
          setCidades(cidades.filter((cidade) => cidade.id !== id));
        } else {
          console.error('Erro ao excluir a cidade');
        }
    };
    
  return (
    <>
      {cidades.map(cidade => (
        <tr key={cidade.id}>
          <td>{cidade.id}</td>
          <td>{cidade.nome}</td>
          <td>{cidade.estado}</td>
          <td>{cidade.pais}</td>
          <td>{cidade.populacao}</td>
          <td>
            <button onClick={() => handleEditar(cidade)}> <img src="./imagens/editarsimbolo.png"/> </button>
            <button onClick={() => handleExcluir(cidade.id)}> <img src="./imagens/removersimbolo.png"/> </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ListaCidades;