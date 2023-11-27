"use client";

import Link from 'next/link';
import ListaEmpregados from './getEmp';

const CrudTabelaEmpregado = () => {

  return (
    <div>
      <div className='addDiv'>
      <article className="buttons">
        <Link href="/adicionarEmp" className="add"></Link>
          <p>Adicionar</p>
      </article>
      </div>
      <table className="tabelacrud">
        <thead className="tabelacrudhead">
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Cargo</th>
                <th>Salario</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <ListaEmpregados/>
        </tbody>
    </table>
    </div>
  );
};

export default CrudTabelaEmpregado;