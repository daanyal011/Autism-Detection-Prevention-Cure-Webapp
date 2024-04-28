import { Box, Typography } from "@mui/material";
import React from "react";
import Topbar from "../../component/Dashboard/Topbar";
import Sidebar from "../../component/Dashboard/Sidebar";
import Container  from "@mui/material/Container";
import FileUploader from "../../component/Uploads/FileUploader";
import VideoResultUpload from "../../component/Uploads/VideoResultUpload";

const VideoUpload = () => {
  return (
    <div className="app">
    <Sidebar />
      <main className='content'>
        <Topbar />
        <Box sx={{
            marginTop: 8,
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
             Patient Video Result          
            </Typography>
            <Container maxWidth="xl" sx={{ mt: 2, mb: 2 }}>
            {/* <FileUploader/> */}
            <VideoResultUpload/>
            </Container>
        </Box>
    </main>
    </div>
  );
};

export default VideoUpload;