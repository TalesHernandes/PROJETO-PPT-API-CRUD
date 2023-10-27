"use client";
import { useState } from "react";

export default function Contador({ inicial = 0, final }) {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (final != undefined && contador >= final) {
      return;
    }
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div className="contador">
      <div>Contador: {contador}</div>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
    </div>
  );
}
