import React, { useState } from 'react';


const CrudTabelaPais = () => {
  const [paises, setPaises] = useState([
    { id: 1, nome: 'Brazil', continente: 'America do Sul', populacao: 200000000},
    { id: 2, nome: 'França', continente: 'Europa', populacao: 67000000},
  ]);

  const handleExcluir = (id) => {
    const novoPaises = paises.filter(pais => pais.id !== id);
    setPaises(novoPaises);
  };

  const handleEditar = (id) => {
    // Implemente a lógica de edição aqui
    console.log(`Editar País com ID ${id}`);
  };

  return (
    <table className="tabelacrud">
        <thead className="tabelacrudhead">
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Continente</th>
                <th>População</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {paises.map(pais => (
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
        </tbody>
    </table>
  );
};

export default CrudTabelaPais;
