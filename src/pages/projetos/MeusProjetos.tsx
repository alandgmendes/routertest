import { useSelector } from "react-redux";
import { Button, Box, Grid, colors } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { getUserProjetos } from "../../scripts/services/projetos/user.projetos.loader";

const MeusProjetos: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projectsArray, setProjectsArray] = useState([{}])
  const [ProjectTable, setProjectTable] = useState([{}]);
  const [projectsdata, setProjectsData] = useState([]);
  const token = useSelector((state) => state.token)
  const navigate = useNavigate();
    const user = useSelector((state) => state?.user?.user);
    const handleClickProjetos = (e:  MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const idProjeto = e.currentTarget.value;
      navigate(`${idProjeto}`);
    }
    
    useEffect(() => {
      const fetchProjetosData = async (userId: string, strToken: string) => {
        try {
          const projData = await getUserProjetos(user.pessoa._id, strToken);
          if(projData){
            setProjectsArray(projData.projetos);
            const projects = projData.projetos.map((projeto) => <Button 
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
            </Button>);
            setProjectsData(projects);
            setIsLoading(false);
          }
        } catch (error) {
          console.error("Error fetching projetos data:", error);
        }
      };  
      fetchProjetosData(user.username, token);
    }, [user.email, token]);
    const handleCreateProjetos = async() =>{
        navigate(`/usuarios/${user.username}/projetos/novo`);
    }
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
          <div id="Pessoa">
            <h1 style={{ color: '#FFFFFF', marginBottom: "100px" }}>
              Meus projetos
            </h1>
            <span style={{color: '#FFFFFF', fontSize: 30}}>Novo projeto:</span>
            <FontAwesomeIcon  onClick={handleCreateProjetos} style={{color: 'Dodgerblue', float: 'right'}}icon={faSquarePlus} size="2xl" />
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

export default MeusProjetos;