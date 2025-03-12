"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.log(error.message);
  }, []);

  return (
    <div
      style={{
        padding: "10rem",
      }}
    >
      <h1>😢</h1>
      <p>Ha ocurrido un error</p>
      <button onAbort={reset}>Intentar de nuevo</button>
    </div>
  );
}
