"use client";

import Link from 'next/link';
import ListaPaises from './getPais';

const CrudTabelaPais = () => {

  return (
    <div>
      <div className='addDiv'>
      <article className="buttons">
        <Link href="/adicionarPaises" className="add"></Link>
          <p>Adicionar</p>
      </article>
      </div>
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
            <ListaPaises/>
        </tbody>
    </table>
    </div>
  );
};

export default CrudTabelaPais;