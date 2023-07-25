import { 
    Form, 
    useLoaderData, 
    Link,
    useFetcher,
    useParams
 } from "react-router-dom";
import { getPessoaByUserId } from "../scripts/services/pessoa/pessoa.loader";


export default function Contact() {
  let { userId } = useParams();
  const pessoa = getPessoaByUserId(userId);
  console.log(pessoa);
  return (
    <div id="contact">
      <h1>Pessoa</h1>
    </div>
  );
}
