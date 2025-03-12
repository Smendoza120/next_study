"use client";
import Styles from "app/sass/global-error.module.sass";
import Image from "next/image";

export default function GlobalError({ reset }: ErrorPageProps) {
  return (
    <main className={Styles.Error}>
      <h1 className={Styles.Error__title}>Ha ocurrido un error</h1>

      <Image src="/images/error.png" alt="Error" width={300} height={300} />

      <p className={Styles.Error__message}>
        Al parecer ha ocurrido un error, pero no te sientas mal
      </p>

      <button className={Styles.Error__button} onClick={reset}>
        Volver a intentar
      </button>
    </main>
  );
}
