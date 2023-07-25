import { useState } from "react";
import CustomInput from "../../components/CustomInput";
import { Button } from "@mui/material";
import { _Pessoa } from "./PessoaModel";
import { validateCpf } from "../../utils/validators";

const RegistrarPessoa = () => {
  const pessoa = {
    nome:"",
    cpf:"",
    telefone:"",
    dataNascimento:"",
    email:"",
    logradouro:"",
    numero:"",
    bairro:"",
    cep:"",
    cidade:"",
    estado:"",
    areaAtuacao:"",
  }
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [ cpfValido, setCpfValido] = useState(false);
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [areaAtuacao, setAreaAtuacao] = useState("");

  const handleSignUp = () => {
    // Perform sign-up logic here, e.g., making an API call to register the user
    console.log("Sign-up form data:", {
      nome,
      cpf,
      telefone,
      dataNascimento,
      email,
      logradouro,
      numero,
      bairro,
      cep,
      cidade,
      estado,
      areaAtuacao,
    });
  };

  return (
    <div>
      <h2>Registro:</h2>
      <form>
        <CustomInput
          isIconActive={false}
          label={_Pessoa.nome.label}
          placeholder="Seu nome..."
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <CustomInput
          isIconActive={false}
          label="CPF:"
          placeholder="Seu CPF..."
          value={cpf}
          onChange={e => setCpf(e.target.value)}
        />
        <CustomInput
          isIconActive={false}
          label="Telefone:"
          placeholder="Seu telefone..."
          value={telefone}
          onChange={e => setTelefone(e.target.value)}
        />
        <CustomInput
          isIconActive={false}
          label="__/__/__"
          placeholder="__/__/__"
          value={dataNascimento}
          onChange={e => setDataNascimento(e.target.value)}
          type="date"
        />
        <CustomInput
          isIconActive={false}
          label="Email:"
          placeholder="Seu email..."
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
        />
        <CustomInput
          isIconActive={false}
          label="Logradouro:"
          placeholder="Seu logradouro..."
          value={logradouro}
          onChange={e => setLogradouro(e.target.value)}
        />
        <CustomInput
          isIconActive={false}
          label="Número:"
          placeholder="Seu número..."
          value={numero}
          onChange={e =>setNumero(e.target.value)}
        />
        <CustomInput
          isIconActive={false}
          label="Bairro:"
          placeholder="Seu bairro..."
          value={bairro}
          onChange={e =>setBairro(e.target.value)}
        />
        <CustomInput
          isIconActive={false}
          label="CEP:"
          placeholder="Seu CEP..."
          value={cep}
          onChange={e => setCep(e.target.value)}
        />
        <CustomInput
          isIconActive={false}
          label="Cidade:"
          placeholder="Sua cidade..."
          value={cidade}
          onChange={e => setCidade(e.target.value)}
        />
        <CustomInput
          isIconActive={false}
          label="Estado:"
          placeholder="Seu estado..."
          value={estado}
          onChange={e => setEstado(e.target.value)}
        />
        <CustomInput
          isIconActive={false}
          label="Área de Atuação:"
          placeholder="Sua área de atuação..."
          value={areaAtuacao}
          onChange={e => setAreaAtuacao(e.target.value)}
        />
        <Button onClick={handleSignUp}>
          Registrar
        </Button>
      </form>
    </div>
  );
};

export default RegistrarPessoa;