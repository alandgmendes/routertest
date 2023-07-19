import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Error;
  const info = Object.entries(error);
  console.log(info);

  return (
    <div id="error-page">
      <h1>Perdão!</h1>
      <p>Um erro inesperado aconteceu.</p>
      <p><i>{`Status: ${info[0][1]}`}</i></p>
      <p><i>{`Descrição do erro: ${info[1][1]}`}</i></p>
      <p><i>{`Causa: ${info[3][1]}`}</i></p>
    </div>
  );
}