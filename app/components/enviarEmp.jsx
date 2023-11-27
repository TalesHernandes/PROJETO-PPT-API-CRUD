"use client";

import React, { useState } from 'react';

const FormularioEmpPOST = () => {
  const [salario, setSalario] = useState('');
  const [cargo, setCargo] = useState('');
  const [nome, setNome] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dados = {
      id: 0,
      nome: nome,
      cargo: cargo,
      salario: salario,
    };

    const resposta = await fetch('https://app-projeto-pppt.onrender.com/empregados', {
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
            Cargo:
            <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} />
        </label>
        <label>
            Salário:
            <input type="number" value={salario} onChange={(e) => setSalario(e.target.value)} />
        </label>
        <input type="submit" value="Enviar" />
        </form>
  );
};

export default FormularioEmpPOST;