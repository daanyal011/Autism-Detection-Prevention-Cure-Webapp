import React from "react";
import Header from "../../component/Header"
import Topbar from "../../component/Dashboard/Topbar";
import Sidebar from "../../component/Dashboard/Sidebar";
import Tapping from "../../component/TappingGame/Tapping";
import Container from '@mui/material/Container';
import { Box, Typography } from "@mui/material";
const Home = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  return (
    <div className="app">
    <Sidebar />
      <main className='content'>
        <Topbar />
        <Box sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
          }}>
          <Typography
            variant="h2"
            // color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "5px 25px" }}
          >
             Patient Result          
            </Typography>
            <Container maxWidth="xl" sx={{ mt: 2, mb: 2 }}>
              <Header/>
            </Container>
        </Box>
    </main>
    </div>
  );
};

export default Home;
