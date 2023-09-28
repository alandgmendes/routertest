import { Box, Button, colors, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState, useCallback, ChangeEvent } from "react";
import CustomInput from "../../../components/CustomInput";
import logo from '../../../assets/logo1.png'
import { useNavigate } from "react-router-dom";
import { Buffer } from "buffer";
import { useDispatch } from "react-redux";

const OrcamentoCreate: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [produtoABuscar, setProdutoABuscar] =  useState('');

  const handleConsulta = async (produto: string) => {
    try {
      const response = await fetch(`http://localhost:3000/produto/orcamento/${produto}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers you may need, such as authorization headers
        },
      });

      if (response.ok) {
        const data = await response.json();
        const pdfBase64 = data.data;

        // Create a data URL
        const dataURL = `data:application/pdf;base64,${pdfBase64}`;

        // Open the PDF in a new browser window
        window.open(dataURL, "_blank");

        // Alternatively, trigger a file download
        const a = document.createElement("a");
        a.href = dataURL;
        a.download = "document.pdf"; // Specify the desired file name
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        // Handle errors here
        console.error('Failed to fetch data from the backend');
      }
    } catch (error) {
      // Handle network errors or other exceptions here
      console.error('An error occurred:', error);
    }
  };

  return (
    <Grid
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={6}
      minHeight={550}
      sx={{
        boxShadow: {
          xs: "",
          sm: "",
          md: "15px 2px 5px -5px",
          lg: "15px 2px 5px -5px",
          xl: "15px 2px 5px -5px",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(24, 24, 24, 0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          borderRadius: {
            xs: "30px",
            sm: "30px",
            md: "30px 0 0 30px",
            lg: "30px 0 0 30px",
            xl: "30px 0 0 30px",
          },
        }}
      >
        <Box width="50%">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box width="90%">
              <img src={logo} alt="Logo" style={{ width: '120%', height: '120%' }} />
            </Box>
            <CustomInput
              label="Produto"
              placeholder="Seu produto..."
              isIconActive={false}
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setProdutoABuscar(e.target.value)}
              value={produtoABuscar}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 4, boxShadow: `0 0 20px ${colors.green[500]}` }}
              onClick={e => handleConsulta(produtoABuscar)}
            >
              Consulta
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default OrcamentoCreate;