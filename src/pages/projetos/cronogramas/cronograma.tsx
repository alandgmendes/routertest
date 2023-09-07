import { useSelector } from "react-redux";
import * as React from 'react';
import { Button, Box, Grid, colors } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import IProjeto  from '../projeto.interface';
import { getUserProjetos } from "../../../scripts/services/projetos/user.projetos.loader";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { TransitionProps } from '@mui/material/transitions';
import { getCronogramaAtividades } from "../../../scripts/services/cronogramas/cronograma.atividades.loader";
import { createCronogramaAtividades } from "../../../scripts/services/cronogramas/cronograma.atividades.create";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Cronograma: React.FC = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [projectsArray, setProjectsArray] = useState<{ pessoa: { _id: string } }[]>([]);
  const [ProjectTable, setProjectTable] = useState([{}]);
  const [projectsdata, setProjectsData] = useState<JSX.Element[]>([]);
  const token = useSelector((state: { token: string }) => state.token);
  const navigate = useNavigate();
  const user = useSelector((state: any) => state?.user?.user);
  const project = useSelector((state: any) => state?.projeto);
  const cronograma = useSelector((state: any) => state);
  const [projeto, setProjeto] = useState({});
  const [open, setOpen] = React.useState(false);
  const [isEdittingTask, setIsEditingTask] = useState(false);
  const [editingTaskNome, setEditingTaskNome] = useState('');
  const [editingTaskDescricao, setEditingTaskDescricao] = useState('');
  const [editingTaskPeriodoInicial, setEditingTaskPeriodoInicial] = useState(1);
  const [editingTaskPeriodoFinal, setEditingTaskPeriodoFinal] = useState(2);


  const taskEdited = {
    atividade:'',
    descricaoAtividade:'',
    periodoInicial: 0,
    periodoFinal: 0,
    criadaEm: '',
    modificadaEm: '',
    acessadaEm: '',
    cronogramaId: '',
  }

  const getAtividades = async(cronogramaId: string, token: string) =>{
    const atividadesLista = await getCronogramaAtividades(cronogramaId, token);
    console.log(atividadesLista);
    debugger;
  }

  //const handleSave
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleIsEditing = () => {
    setIsEditingTask((prevIsEditingTask) => !prevIsEditingTask);
  };

  const editingTaskField = (field:string, value: string ) =>{
    switch (field){
      case "nomeTarefa":
        setEditingTaskNome(value);
        break;
      case "descricaoTarefa":
        setEditingTaskDescricao(value);
        break;
      case "periodoInicial":
        setEditingTaskPeriodoInicial(parseInt(value));
        break;
      case "periodoFinal":
        setEditingTaskPeriodoFinal(parseInt(value));
        break;
    }
  }

  const handleSave = () => {
    const idCronograma = params.cronogramaId;
    if(idCronograma){
      taskEdited.atividade = editingTaskNome;
      taskEdited.descricaoAtividade = editingTaskDescricao;
      taskEdited.periodoInicial = editingTaskPeriodoInicial;
      taskEdited.periodoFinal = editingTaskPeriodoFinal;
      taskEdited.cronogramaId = idCronograma;
      console.log(taskEdited);
      createCronogramaAtividades(idCronograma, token, taskEdited);
    };
    setIsEditingTask(false);
  }

  const handleClickProjetos = (e: React.MouseEvent<HTMLButtonElement>) => {
    const idProjeto = e.currentTarget.value;
    navigate(`${idProjeto}`);
  }


  useEffect(() => {
    const cronogramaId = params.cronogramaId;
    if(cronogramaId){

    const resAtividades = getAtividades(cronogramaId, token);
    debugger;
    }
    //const resAtividades = getAtividades()
    const fetchProjetosData = async (userId: string, strToken: string) => {
      try {
        const projData = await getUserProjetos(user.pessoa._id, strToken);
        if (projData) {
          setProjectsArray(projData.projetos);
          const projects = projData.projetos.map((projeto: IProjeto) => (
            <Button
              key={projeto._id}
              id={projeto._id}
              name={projeto._id}
              value={projeto._id}
              onClick={(e) => handleClickProjetos(e)}
              variant="contained"
              fullWidth
              sx={{ mt: 4, boxShadow: `0 0 20px ${colors.green[500]}` }}
            >
              <p>{projeto.titulo}</p>
            </Button>            
          ));
          setProjectsData(projects);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching projetos data:", error);
      }
    };
    fetchProjetosData(user.username, token);
  }, [user.email, token]);

  return (
    <Grid
      container 
      justifyContent="center" 
      alignItems="flex-end" 
      height="100vh" 
    >
      <Grid
        item 
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(24, 24, 24, 0.2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            borderRadius: "30px", 
          }}
        >
          <div id="Cronograma">
            <h1 style={{ color: '#FFFFFF', marginBottom: "100px" }}>
              Cronograma
            </h1>
            <span style={{color: '#FFFFFF', fontSize: 30}}>Nova atividade:</span>
            <FontAwesomeIcon  onClick={handleClickOpen} style={{color: 'Dodgerblue', float: 'right'}}icon={faSquarePlus} size="2xl" />
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Atividade"}</DialogTitle>
              <DialogContent>
              <DialogContentText>
                Dados da sua Atividade:
              </DialogContentText>
              <TextField
                autoFocus
                disabled={isEdittingTask}
                margin="dense"
                id="nomeTarefa"
                label="Nome:"
                type="text"
                fullWidth
                variant="standard"
                value={editingTaskNome}
                onChange={(e) => editingTaskField("nomeTarefa", e.target.value)} 
              />
              <TextField
                autoFocus
                disabled={isEdittingTask}
                margin="dense"
                id="descricaoTarefa"
                label="Descrição:"
                type="text"
                fullWidth
                variant="standard"
                value={editingTaskDescricao}
                onChange={(e) => editingTaskField("descricaoTarefa", e.target.value)} 
              />
            <FormControl fullWidth>
              <InputLabel id="periodoInicial-label">Período Inicial:</InputLabel>
              <Select
                autoFocus
                disabled={isEdittingTask}
                labelId="periodoInicial-label"
                id="periodoInicial"
                label="Período Inicial:"
                value={editingTaskPeriodoInicial.toString()}
                onChange={(e) => {
                  const newValue = parseInt(e.target.value);
                  if (newValue < editingTaskPeriodoFinal) {
                    setEditingTaskPeriodoInicial(newValue);
                  }
                }}
              >
                {[...Array(24)].map((_, index) => (
                  <MenuItem key={index + 1} value={(index + 1).toString()}>
                    {`Mês: ${(index + 1).toString()}`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="periodoFinal-label">Período Final:</InputLabel>
              <Select
                autoFocus
                disabled={isEdittingTask || editingTaskPeriodoInicial === 24}
                labelId="periodoFinal-label"
                id="periodoFinal"
                label="Período Final:"
                value={editingTaskPeriodoFinal.toString()}
                onChange={(e) => setEditingTaskPeriodoFinal(parseInt(e.target.value))}
              >
                {[...Array(25 - editingTaskPeriodoInicial)].map((_, index) => (
                  <MenuItem key={editingTaskPeriodoInicial + index} value={editingTaskPeriodoInicial + index}>
                    {`Mês: ${editingTaskPeriodoInicial + index}`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            </DialogContent>
              <DialogActions>
                <Button variant="contained"
              fullWidth
              sx={{ mt: 4, boxShadow: `0 0 20px ${colors.green[500]}` }} onClick={handleSave}>Salvar</Button>
                <Button variant="contained"
              fullWidth
              sx={{ mt: 4, boxShadow: `0 0 20px ${colors.green[500]}` }} onClick={handleIsEditing}>Editar</Button>
                <Button variant="contained"
              fullWidth
              sx={{ mt: 4, boxShadow: `0 0 20px ${colors.green[500]}` }} onClick={handleClose}>Cancelar</Button>
              </DialogActions>
            </Dialog>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                marginBottom: "100px",
                marginTop: '200px',
              }}
            >
              <hr />
              {projectsdata != null && <>
                {projectsdata}
              </>}
            </div>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Cronograma;