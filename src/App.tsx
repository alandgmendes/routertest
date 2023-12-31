import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import SigninPage from "./pages/auth/SigninPage";
import TitleBox from "./components/TitleBox";
import MainLayout from "./layouts/MainLayout";

import QuestionPage from "./components/QuestionPage";
import { Outlet } from "react-router-dom";

//gitcheck
const App: React.FC = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          width: {
            sm: "90vw",
            xs: "90vw",
            md: "60vw",
            lg: "60vw",
            xl: "60vw",
          },
        }}
      >
        {/* GRID SYSTEM */}
        <Grid container height="90vh">
          <Outlet />
        </Grid>
        {/* GRID SYSTEM END */}
      </Box>
    </MainLayout>
  );
};

export default App;
