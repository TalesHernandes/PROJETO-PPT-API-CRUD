"use client"

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'

const EditarEmp = () => {
  const searchParams = useSearchParams();
  const Id = searchParams.get('id')

  if(Id == null) {
    window.location.href();
  }
  console.log('Id:', Id);

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [salario, setSalario] = useState('');

  useEffect(() => {
    const fetchPais = async () => {
      if (Id) {
        const res = await fetch(`https://app-projeto-pppt.onrender.com/empregados/${Id}`);
        const data = await res.json();
        console.log('Data fetched:', data);
        setNome(data.nome);
        setCargo(data.cargo);
        setSalario(data.salario);
      }
    };

    fetchPais();
  }, [Id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const empAtualizado = {
      id: parseInt(Id),
      nome,
      cargo,
      salario,
    };

    const res = await fetch(`https://app-projeto-pppt.onrender.com/empregados/${Id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(empAtualizado),
    });

    if (res.ok) {
      window.location.replace('/')
    } else {
      console.error('Erro ao editar o país');
    }
  };

  return (
    <div>
    <div className="logo">
      <img src="./imagens/logo.png" className="imagemlogo" alt="logo" />
      <h1>
        Projeto PPT API 
      </h1>  
    </div>
    <div className="content">
      <section className="desc">
        <img src="./imagens/definicoes.png" alt="logoDesc"/>
        <h2> Portal de Transparência e Gerenciamento da Empresa PPT </h2>
      </section>
      <section>
        <div>
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
          Salario:
          <input type="number" value={salario} onChange={(e) => setSalario(e.target.value)} />
        </label>
        <input type="submit" value="Enviar" />
        </form>
        </div>
      </section>
    </div>
  </div>
  );
};

export default EditarEmp;