"use client";

import Link from 'next/link';
import ListaCidades from './getCidades';

const CrudTabelaCidade = () => {

  return (
    <div>
      <div className='addDiv'>
      <article className="buttons">
        <Link href="/adicionarCidades" className="add"></Link>
          <p>Adicionar</p>
      </article>
      </div>
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
            <ListaCidades/>
        </tbody>
    </table>
    </div>
  );
};

export default CrudTabelaCidade;