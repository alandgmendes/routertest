import { useState, useRef, ChangeEvent } from "react";
import CustomInput from "../../components/CustomInput";
import { Button } from "@mui/material";
import { _Pessoa } from "./PessoaModel";
import { validateCpf } from "../../utils/validators";
import { getCep } from "../../utils/ViaCEP";
import { useSelector } from "react-redux";
import { registerPessoa } from "../../scripts/services/pessoa/pessoa.create";

const RegistrarPessoa = () => {
  const user = useSelector((state) => state?.user?.user);  
  const pessoa = {
    nome:"",
    cpf:"",
    telefone:"",
    dataNascimento:"",
    email:user.username,
    endereco: {
      logradouro: "",
      cep: "",
      estado: "",
      numero: "",
      bairro: "",
      cidade: "",
    },
    criadoEm: new Date(),
  }
  const [nome, setNome] = useState("");
  const [isNomeValido, setIsNomeValido] = useState(false);

  const [cpf, setCpf] = useState("");
  const [cpfValido, setCpfValido] = useState(false);

  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");

  const [logradouro, setLogradouro] = useState("");
  const [logradouroIsValido, setLogradouroIsValido] = useState(false);

  const [numero, setNumero] = useState("");
  const [numeroIsValido, setNumeroIsValido] = useState(false);

  const [bairro, setBairro] = useState("");
  const [bairroIsValido, setBairroIsValido] = useState(false);

  const [cep, setCep] = useState("");
  const [cepIsValido, setCepIsValido] = useState(false);

  const [cidade, setCidade] = useState("");
  const [cidadeIsValido, setCidadeIsValido] = useState(false);

  const [estado, setEstado] = useState("");
  const [estadoIsValido, setEstadoIsValido] = useState(false);

  const handleSignUp = async() => {
    const removeNonAlphanumericChars = (input: string): string => {
      const regex = /[^a-zA-Z0-9]/g;
      const result = input.replace(regex, '');
      return result;
    };
    pessoa.nome = nome;
    pessoa.cpf = removeNonAlphanumericChars(cpf);
    pessoa.telefone = removeNonAlphanumericChars(telefone);
    pessoa.dataNascimento = dataNascimento;
    pessoa.email = email;
    pessoa.endereco.logradouro = logradouro;
    pessoa.endereco.numero = numero;
    pessoa.endereco.cep = cep;
    pessoa.endereco.bairro = bairro;
    pessoa.endereco.cidade = cidade;
    pessoa.endereco.estado = estado;
    pessoa.email = user.username;
    pessoa.criadoEm = new Date();
    debugger;
    const creation = await registerPessoa(pessoa);
    if(creation){
      debugger;
      console.log(creation);
    }
    debugger;
    // Perform sign-up logic here, e.g., making an API call to register the user
    console.log(pessoa);
  };

  
  const cpfInputRef = useRef<HTMLInputElement>(null);

  const handleCpfChange = (cpf: string) => {
    if(cpf.length < 15){
      const digitsOnly = cpf.replace(/\D/g, "");
      setCpfValido(validateCpf(digitsOnly));
      const cursorPosition = cpfInputRef.current?.selectionStart || 0;
      const groups = [
        digitsOnly.slice(0, 3),
        digitsOnly.slice(3, 6),
        digitsOnly.slice(6, 9),
        digitsOnly.slice(9, 11),
      ];
      const maskedCPF = groups
        .map((group, index) => {
          if (index === groups.length - 1) {
            return group;
          }
          return cursorPosition > group.length * index ? group : "";
        })
        .filter((group) => group !== "")
        .join(".");
      setCpf(maskedCPF);
      if (cpfInputRef.current) {
        cpfInputRef.current.setSelectionRange(cursorPosition, cursorPosition);
      }
    }    
  };

  const cepInputRef = useRef<HTMLInputElement>(null);

  const handleCepChange = async(cep: string) => {
    if(cep.length < 10){
      const digitsOnly = cep.replace(/\D/g, "");
      if(cep.length === 9){
        const enderecoComp = await getCep(digitsOnly);
        setLogradouro(enderecoComp?.logradouro || "");
        setLogradouroIsValido(true);
        setBairro(enderecoComp?.bairro || "");
        setBairroIsValido(true);
        setCidade(enderecoComp?.localidade || "");
        setCidadeIsValido(true);
        setEstado(enderecoComp?.uf || "");
        setEstadoIsValido(true);
        setCepIsValido(true);
      }
      const cursorPosition = cepInputRef.current?.selectionStart || 0;
      let maskedCEP = "";
      for (let i = 0; i < digitsOnly.length; i++) {
        if (i === 5) {
          maskedCEP += "-";
        }
        maskedCEP += digitsOnly[i];
      }
      setCep(maskedCEP);
      if (cepInputRef.current) {
        if (cursorPosition === 5) {
          cepInputRef.current.setSelectionRange(6, 6);
        } else {
          cepInputRef.current.setSelectionRange(cursorPosition, cursorPosition);
        }
      }    
    }
  };

  const handleNomeChange =(nomeIn: string) =>{
    if(nomeIn.length > 2){
      setIsNomeValido(true);
    }
    if(nomeIn.length < 2){
      setIsNomeValido(false);
    }
    setNome(nomeIn);
  };

  const telefoneInputRef = useRef<HTMLInputElement>(null);

  const handleTelefoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const phoneInput = e.currentTarget.value;
    let formattedPhone = phoneInput;
    const digitsOnly = phoneInput.replace(/\D/g, "");
    if (digitsOnly.length >= 2) {
      formattedPhone = `(${digitsOnly.slice(0, 2)})`;
  
      if (digitsOnly.length > 2 && digitsOnly.length <= 7) {
        formattedPhone += `${digitsOnly.slice(2, 7)}`;
      } else if (digitsOnly.length > 7) {
        formattedPhone += `${digitsOnly.slice(2, 7)}-${digitsOnly.slice(7, 12)}`;
      }
    }
    setTelefone(formattedPhone);
  
    if (telefoneInputRef.current) {
      const inputLength = formattedPhone.length;
      telefoneInputRef.current.setSelectionRange(inputLength, inputLength);
    }
  };

  
  return (
    <div>
      <h2 style={{color: 'white'}}>Registro:</h2>
      <form>
        <CustomInput
          isIconActive={false}
          label={_Pessoa.nome.label}
          placeholder="Seu nome..."
          value={nome}
          onChange={e => handleNomeChange(e.currentTarget.value)}
          name={_Pessoa.nome.Descricao}
          isInValid={!isNomeValido}
        />
        <CustomInput
          isIconActive={false}
          label="CPF:"
          placeholder="Seu CPF..."
          value={cpf}
          isInValid={!cpfValido}
          onChange={e => handleCpfChange(e.target.value)}
          inputRef={cpfInputRef}
        />
        <CustomInput
          isIconActive={false}
          label="Telefone:"
          placeholder="Seu telefone..."
          value={telefone}
          onChange={e => handleTelefoneChange(e)}
        />
        <CustomInput
          isIconActive={false}
          label="Data de nasc."
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
          onChange={e => handleCepChange(e.target.value)}
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
        <Button onClick={handleSignUp}>
          Registrar
        </Button>
      </form>
    </div>
  );
};

export default RegistrarPessoa;