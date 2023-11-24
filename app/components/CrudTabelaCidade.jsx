import React, { useState } from 'react';


const CrudTabelaCidade = () => {
  const [cidades, setCidades] = useState([
    { id: 1, nome: 'São Paulo', estado: 'SP', pais: 'Brazil', populacao: 12000000},
    { id: 2, nome: 'Rio de Janeiro', estado: 'RJ', pais: 'Brazil', populacao: 6700000},
  ]);

  const handleExcluir = (id) => {
    const novaCidades = cidades.filter(cidade => cidade.id !== id);
    setCidades(novaCidades);
  };

  const handleEditar = (id) => {
    // Implemente a lógica de edição aqui
    console.log(`Editar Cidade com ID ${id}`);
  };

  return (
    <table className="tabelacrud">
        <thead className="tabelacrudhead">
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Estado</th>
                <th>País</th>
                <th>População</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {cidades.map(cidade => (
            <tr key={cidade.id}>
                <td>{cidade.id}</td>
                <td>{cidade.nome}</td>
                <td>{cidade.estado}</td>
                <td>{cidade.pais}</td>
                <td>{cidade.populacao}</td>
                <td>
                    <button onClick={() => handleEditar(cidade.id)}> <img src="./imagens/editarsimbolo.png"/> </button>
                    <button onClick={() => handleExcluir(cidade.id)}> <img src="./imagens/removersimbolo.png"/> </button>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
  );
};

export default CrudTabelaCidade;
