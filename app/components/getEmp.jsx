import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ListaEmpregados = () => {
    const [Empregados, setEmpregados] = useState([]);

    const router = useRouter();
  
    useEffect(() => {
      const fetchEmpregados = async () => {
        const res = await fetch('https://app-projeto-pppt.onrender.com/empregados');
        const data = await res.json();
        setEmpregados(data);
      };
  
      fetchEmpregados();
    }, []);

    const handleExcluir = async (id) => {
        const res = await fetch(`https://app-projeto-pppt.onrender.com/empregados/${id}`, {
          method: 'DELETE',
        });
  
        if (res.ok) {
          setEmpregados(Empregados.filter((empregrado) => empregrado.id !== id));
        } else {
          console.error('Erro ao excluir a empregrado');
        }
    };
    
  return (
    <>
      {Empregados.map(empregrado => (
        <tr key={empregrado.id}>
          <td>{empregrado.id}</td>
          <td>{empregrado.nome}</td>
          <td>{empregrado.cargo}</td>
          <td>{empregrado.salario}</td>
          <td>
            <button onClick={() => handleEditar(empregrado)}> <img src="./imagens/editarsimbolo.png"/> </button>
            <button onClick={() => handleExcluir(empregrado.id)}> <img src="./imagens/removersimbolo.png"/> </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ListaEmpregados;