import { useSelector } from "react-redux";
import { Button, Box, Grid, colors } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PessoaHome() {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user?.user);
  const handleClickProjetos = async() =>{
    navigate(`/usuarios/${user?.username}/projetos`);
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
          height: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(24, 24, 24, 0.2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            padding: "20px",
            borderRadius: "30px", 
          }}
        >
          <div id="Pessoa">
            <h1 style={{ marginBottom: "100px" }}>
              Olá, {user?.pessoa?.nome}
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                marginBottom: "100px",
              }}
            >
              <Button
                variant="contained"
                fullWidth
                sx={{ boxShadow: `0 0 20px ${colors.green[500]}` }}
              >
                Minhas informações
              </Button>
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2, boxShadow: `0 0 20px ${colors.green[500]}` }}
                onClick={handleClickProjetos}
              >
                Meus projetos
              </Button>
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2, boxShadow: `0 0 20px ${colors.green[500]}` }}
              >
                Minhas oportunidades
              </Button>
            </div>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}