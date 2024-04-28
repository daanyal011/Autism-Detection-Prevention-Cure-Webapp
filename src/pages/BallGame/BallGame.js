import React from 'react'
import { Box, Typography } from "@mui/material";
import Topbar from "../../component/Dashboard/Topbar";
import Sidebar from "../../component/Dashboard/Sidebar";
import Container  from "@mui/material/Container";
import BallClicker from '../../component/BallClicker/BallClicker';


const BallGame = () => {
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
             Ball Clicking         
            </Typography>
          <Typography variant="h5"
            sx={{ m: "0px 25px" }} >
           Test
          </Typography>
            <Container maxWidth="xl" sx={{ mt: 2, mb: 2 }}>
            <BallClicker/>
            </Container>
        </Box>
    </main>
    </div>
  )
}

export default BallGame