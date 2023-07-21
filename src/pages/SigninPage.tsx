import { Box, Button, colors, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState, useCallback, ChangeEvent } from "react";
import CustomInput from "../components/CustomInput";
import { loginCall } from "../scripts/services/auth/login.services";
import logo from '../assets/logo1.png';

const SigninPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const handleLogin = async () => {
    try {
      const response = await loginCall(email, password);

      console.log(response);
      if (response === "ok") {
        // Redirect to another page on successful login
        console.log(response);
      } else {
        setError("Invalid email or password"); // Set error message
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred during login");
    }
  };

  const handleVoltarSignUp = () =>{
    setIsSignUp(false);
    setIsSignIn(true); 
  };

  const handleSignUp = ()=>{
    setIsSignUp(true);
    setIsSignIn(false); 
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
        {isSignIn && <Box width="50%">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box width="90%">
              <img src={logo} alt="Logo" style={{ width: '120%', height: '120%' }} />
            </Box>
            <CustomInput
              label="Login"
              placeholder="Seu login..."
              isIconActive={false}
              value={email}
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
            />
            <CustomInput
              label="Senha"
              placeholder="Sua senha..."
              isIconActive={false}
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
              value={password}
              type="password"
              autoComplete="current-password"
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 4, boxShadow: `0 0 20px ${colors.green[500]}` }}
              onClick={handleLogin}
            >
              Login
            </Button>

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 4, boxShadow: `0 0 20px ${colors.green[500]}` }}
              onClick={handleSignUp}
            >
              Cadastre-se
            </Button>

            {/* Error message */}
            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
          </Box>
        </Box>}
        {isSignUp && <Box width="50%">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box width="90%">
              <img src={logo} alt="Logo" style={{ width: '120%', height: '120%' }} />
            </Box>
            <CustomInput
              label="Login"
              placeholder="Seu login..."
              isIconActive={false}
              value={email}
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
            />
            <CustomInput
              label="Senha"
              placeholder="Sua senha..."
              isIconActive={false}
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
              value={password}
              type="password"
              autoComplete="current-password"
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 4, boxShadow: `0 0 20px ${colors.green[500]}` }}
              onClick={handleLogin}
            >
              Registrar
            </Button>

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 4, boxShadow: `0 0 20px ${colors.green[500]}` }}
              onClick={handleVoltarSignUp}
            >
              voltar
            </Button>

            {/* Error message */}
            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
          </Box>
        </Box>}
      </Box>
    </Grid>
  );
};

export default SigninPage;