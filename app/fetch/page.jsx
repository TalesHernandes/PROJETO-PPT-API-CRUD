"use client";
import { useEffect, useState } from "react";

export default function About() {
  const [albuns, setAlbuns] = useState();

  const getAlbum = () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setAlbuns(json);
      });
  };

  useEffect(getAlbum, []);

  return (
    <ul className="albuns">
      {!albuns && (
        <li>
          <h1>Carregando dados...</h1>
        </li>
      )}
      {albuns &&
        albuns.map((album) => {
          return (
            <>
              <li key={album.id}>
                {album.title}
                <img src={album.url} />
              </li>
            </>
          );
        })}
    </ul>
  );
}
