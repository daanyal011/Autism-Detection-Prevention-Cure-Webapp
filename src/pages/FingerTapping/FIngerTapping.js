import { Box, Typography } from "@mui/material";
import React from "react";
import { styled, useTheme } from '@mui/material/styles';
import Topbar from "../../component/Dashboard/Topbar";
import Sidebar from "../../component/Dashboard/Sidebar";
import Tapping from "../../component/TappingGame/Tapping";
import Container from '@mui/material/Container';

const FingerTapping = () => {

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
            Finger Tapping
          </Typography>
          <Typography variant="h5"
            sx={{ m: "0px 25px" }} >
            Game
          </Typography>
            <Container maxWidth="xl" sx={{ mt: 2, mb: 2 }}>
                      <Tapping/>
            </Container>
        </Box>
    </main>
    </div>
  );
};

export default FingerTapping;
