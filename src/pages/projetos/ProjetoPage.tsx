import { useNavigate, useParams } from "react-router-dom";
import { Button, Box, Grid, colors } from "@mui/material";
import { useState, ChangeEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { registerProjeto } from "../../scripts/services/projetos/projeto.create";
import { setProjeto } from "./projeto.slice";
import CustomTextArea from "../../components/CustomTextArea";
import mongoose from 'mongoose';
import { getProjetoData } from "../../scripts/services/projetos/projeto.data";
import { getCronogramaByProjetoId } from "../../scripts/services/cronogramas/cronograma.projeto.loader";
export type TObjectId = mongoose.ObjectId;
export const ObjectId = mongoose.Types.ObjectId;

const Projeto: React.FC = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const token = useSelector((state: { token: string }) => state.token);
  const navigate = useNavigate();
  const user = useSelector((state: any) => state?.user?.user);
  const [titulo, setTitulo] = useState("");
  const [resumoProjeto, setResumoProjeto] = useState("");
  const [descricaoProjeto, setDescricaoProjeto] = useState("");
  const [justificativaProjeto, setJustificativaProjeto] = useState("");
  const [metasObjetivos, setMetasObjetivos] = useState("");
  const [acessibilidade, setAcessibilidade] = useState("");
  const [democratizacaoAcesso, setDemocratizacaoAcesso] = useState("");
  const [produtoCultural, setProdutoCultural] = useState("");
  const [planoDivulgacao, setPlanoDivulgacao] = useState("");
  const [fontesPatrocinio, setFontesPatrocinio] = useState("");
  const [projetoData, setProjetoData] = useState({});
  const [isProjetoSet, setIsProjetoSet] = useState(false);
  const [fieldEditing, setFieldEditing] = useState(0);
  const [ cronograma, setCronograma] = useState({});
  const fields = [
    {
      name: "titulo",
      id: "titulo",
      value: titulo,
      placeholder: "Título do projeto...",
      label: "Título:",
    },
    {
      name: "resumoProjeto",
      id: "resumoProjeto",
      value: resumoProjeto,
      placeholder: "Resumo do projeto...",
      label: "Resumo do Projeto:",
    },
    {
      name: "descricaoProjeto",
      id: "descricaoProjeto",
      value: descricaoProjeto,
      placeholder: "Descrição do projeto...",
      label: "Descrição do Projeto:",
    },
    {
      name: "justificativaProjeto",
      id: "justificativaProjeto",
      value: justificativaProjeto,
      placeholder: "Justificativa do projeto...",
      label: "Justificativa do Projeto:",
    },
    {
      name: "metasObjetivos",
      id: "metasObjetivos",
      value: metasObjetivos,
      placeholder: "Metas e Objetivos...",
      label: "Metas e Objetivos:",
    },
    {
      name: "acessibilidade",
      id: "acessibilidade",
      value: acessibilidade,
      placeholder: "Acessibilidade...",
      label: "Acessibilidade:",
    },
    {
      name: "democratizacaoAcesso",
      id: "democratizacaoAcesso",
      value: democratizacaoAcesso,
      placeholder: "Democratização do Acesso...",
      label: "Democratização do Acesso:",
    },
    {
      name: "produtoCultural",
      id: "produtoCultural",
      value: produtoCultural,
      placeholder: "Produto Cultural...",
      label: "Produto Cultural:",
    },
    {
      name: "planoDivulgacao",
      id: "planoDivulgacao",
      value: planoDivulgacao,
      placeholder: "Plano de Divulgação...",
      label: "Plano de Divulgação:",
    },
    {
      name: "fontesPatrocinio",
      id: "fontesPatrocinio",
      value: fontesPatrocinio,
      placeholder: "Fontes de Patrocínio...",
      label: "Fontes de Patrocínio:",
    },
  ];
  const handleCreate = async () => {
    const userId = user.pessoa._id;  

    const projetoData = {
      titulo,
      resumoProjeto,
      descricaoProjeto,
      justificativaProjeto,
      metasObjetivos,
      acessibilidade,
      democratizacaoAcesso,
      produtoCultural,
      planoDivulgacao,
      fontesPatrocinio,  
      userId,    
    };  
    const projetoReturn = await registerProjeto(projetoData, token);

    if (projetoReturn != "error") {
      dispatch(setProjeto(projetoData));
      navigate(`/projetos/${projetoReturn.projeto._id}`);
    }
  };

  const handleClickCronograma = async(e: React.MouseEvent<HTMLButtonElement>) => {
    const idProjeto = e.currentTarget.id;
    const idCronograma = cronograma?._id; 
    navigate(`/usuarios/${user.username}/projetos/${idProjeto}/cronograma/${idCronograma}`);
  }

  const handleInputChange = (fieldName: string, value: string) => {
    switch (fieldName) {
      case "titulo":
        setTitulo(value);
        break;
      case "resumoProjeto":
        setResumoProjeto(value);
        break;
      case "descricaoProjeto":
        setDescricaoProjeto(value);
        break;
      case "justificativaProjeto":
        setJustificativaProjeto(value);
        break;
      case "metasObjetivos":
        setMetasObjetivos(value);
        break;
      case "acessibilidade":
        setAcessibilidade(value);
        break;
      case "democratizacaoAcesso":
        setDemocratizacaoAcesso(value);
        break;
      case "produtoCultural":
        setProdutoCultural(value);
        break;
      case "planoDivulgacao":
        setPlanoDivulgacao(value);
        break;
      case "fontesPatrocinio":
        setFontesPatrocinio(value);
        break;
      default:        
        break;
    }
  };
  const switchToField = (fieldIndex:number) => {
    setFieldEditing(fieldIndex);
  };
  
  const SwitchFieldsButtons = () => {
    return (
      <div>
        {fields.map((field, index) => (
          <button key={field.name} onClick={() => switchToField(index)}>
            {field.label}
          </button>
        ))}
      </div>
    );
  };
  const buttonsFields = SwitchFieldsButtons();
  const RenderField = () => {
    const field = fields[fieldEditing]; 
    return (
      <div>
          <CustomTextArea
            label={field.label}
            placeholder={field.placeholder}
            value={field.value}
            onChange={(e) => handleInputChange(field.name, e.currentTarget.value)}
            rows={20}
          />
      </div>
    );
  };


  const fetchProjectData = async () => {
    if (params?.projetoId) {
      try {
        const dataProjeto = await getProjetoData(params.projetoId, token);
        const cronogramaResult = await getCronogramaByProjetoId(params.projetoId, token);
        setCronograma(cronogramaResult);
        setProjetoData(dataProjeto);
        setIsProjetoSet(true);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    }
  };

  useEffect(() => {
    fetchProjectData();
  }, [params?.projetoId, token]);

  const renderedField = RenderField();
  return (
    <div>
      {isProjetoSet == true && <div>
        <h2 style={{ color: "white" }}>Projeto {projetoData?.project?.titulo}:</h2>
        {isProjetoSet && <Button 
              variant="contained"
              fullWidth
              sx={{ mt: 4, boxShadow: `0 0 20px ${colors.green[500]}` }} id={projetoData?.project?._id} onClick={handleClickCronograma}>Ir para cronograma</Button>}
          {renderedField}
          {buttonsFields}
        <Button 
              variant="contained"
              fullWidth
              sx={{ mt: 4, boxShadow: `0 0 20px ${colors.green[500]}` }} onClick={handleCreate}>Salvar Edição</Button>
      </div>}
    </div>
  );
}
export default Projeto;
