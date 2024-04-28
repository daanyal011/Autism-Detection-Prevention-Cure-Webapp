import React, { useState, useContext } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import Item from './Item'; // Import the corrected Item component
import { Link } from "react-router-dom";
import Image from '../../assets/11.jpeg'
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ExtensionIcon from '@mui/icons-material/Extension';
import QuizIcon from '@mui/icons-material/Quiz';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SmartToySharpIcon from '@mui/icons-material/SmartToySharp';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SportsBaseballSharpIcon from '@mui/icons-material/SportsBaseballSharp';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import UploadFileIcon from '@mui/icons-material/UploadFile';
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
// import Chatbot from './Chatbot'; // Import the Item component
import fire from '../../config/Fire';
import { AuthContext } from '../../context/Auth';


const Item = ({ title, to, icon, selected, setSelected, isExternal }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      {isExternal ? (
        <a href={to} target="_blank" rel="noopener noreferrer">
          {/* Open external links in a new tab */}
        </a>
      ) : (
        <span>
          <Link to={to} /> {/* Internal links */}
        </span>
      )}
    </MenuItem>
  );
};

// export default Item;

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const { currentUser } = useContext(AuthContext);

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
        <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* Logo and Collapse Icon */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                {/* <MenuOutlinedIcon /> */}
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              {/* <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={<Image />}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box> */}
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  ASD Tester
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                {currentUser.email}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/Home"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Games
            </Typography>
            <Item
              title="Personal-History"
              to="/PersonalHistory"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Medical-History"
              to="/MedicalHistory"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="AQ-Test"
              to="/AQTest"
              icon={<QuizIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Finger-Tapping"
              to="/FingerTapping"
              icon={<SportsEsportsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Emoji Test"
              to="/EmojiTest"
              icon={<EmojiEmotionsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Brain Frequency"
              to="/BrainFrequency"
              icon={<MonitorHeartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Memory Test"
              to="/MemoryTest"
              icon={<PsychologyIcon />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Ball Clicking Test"
              to="/BallGame"
              icon={<SportsBaseballSharpIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item title= "Video Upload"
              to="/VideoUpload"
              icon={<UploadFileIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Chat Bot"
              to="https://chat-bot-54.streamlit.app/"
              icon={<SmartToySharpIcon />}
              selected={selected}
              setSelected={setSelected}
              isExternal
            />
            {/* <a href="https://chat-bot-54.streamlit.app/" target="_blank"><b></b></a> */}

            <Item
              title="Cure Center"
              to="https://cure-center-nir91f.flutterflow.app/"
              icon={<MedicalServicesIcon />}
              selected={selected}
              setSelected={setSelected}
              isExternal
            />
            {/* <Item title= "cure center"
              to="https://cure-center-nir91f.flutterflow.app/"
              icon={<MedicalServicesIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <a href="https://cure-center-nir91f.flutterflow.app/" target="_blank"><b></b></a> */}


            {/* <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
            Result
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            {/* <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            {/* <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            {/* <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            {/* <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}

export default Sidebar
