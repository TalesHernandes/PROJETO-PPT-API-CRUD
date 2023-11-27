import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ListaPaises = () => {
    const [paises, setpaises] = useState([]);

    const router = useRouter();
  
    useEffect(() => {
      const fetchpaises = async () => {
        const res = await fetch('https://app-projeto-pppt.onrender.com/paises');
        const data = await res.json();
        setpaises(data);
      };
  
      fetchpaises();
    }, []);

    const handleExcluir = async (id) => {
        const res = await fetch(`https://app-projeto-pppt.onrender.com/paises/${id}`, {
          method: 'DELETE',
        });
  
        if (res.ok) {
          setpaises(paises.filter((pais) => pais.id !== id));
        } else {
          console.error('Erro ao excluir a pais');
        }
    };
    
  return (
    <>
      {paises.map(pais => (
        <tr key={pais.id}>
          <td>{pais.id}</td>
          <td>{pais.nome}</td>
          <td>{pais.continente}</td>
          <td>{pais.populacao}</td>
          <td>
            <button onClick={() => handleEditar(pais)}> <img src="./imagens/editarsimbolo.png"/> </button>
            <button onClick={() => handleExcluir(pais.id)}> <img src="./imagens/removersimbolo.png"/> </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ListaPaises;