import React, { useState } from 'react';


const CrudTabelaEmp = () => {
  const [empregados, setEmpregados] = useState([
    { id: 1, nome: 'João', cargo: 'Desenvolvedor', salario: 5000 },
    { id: 2, nome: 'Maria', cargo: 'Designer', salario: 4500 },
    { id: 3, nome: 'Carlos', cargo: 'Analista de Negócios', salario: 5500 }
  ]);

  const handleExcluir = (id) => {
    const novosEmpregados = empregados.filter(empregado => empregado.id !== id);
    setEmpregados(novosEmpregados);
  };

  const handleEditar = (id) => {
    // Implemente a lógica de edição aqui
    console.log(`Editar Empregado com ID ${id}`);
  };

  return (
    <table className="tabelacrud">
        <thead className="tabelacrudhead">
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Cargo</th>
                <th>Salário</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {empregados.map(empregado => (
            <tr key={empregado.id}>
                <td>{empregado.id}</td>
                <td>{empregado.nome}</td>
                <td>{empregado.cargo}</td>
                <td>{empregado.salario}</td>
                <td>
                    <button onClick={() => handleEditar(empregado.id)}> <img src="./imagens/editarsimbolo.png"/> </button>
                    <button onClick={() => handleExcluir(empregado.id)}> <img src="./imagens/removersimbolo.png"/> </button>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
  );
};

export default CrudTabelaEmp;
